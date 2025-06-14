
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()
    
    const klusterApiKey = Deno.env.get('KLUSTER_API_KEY')
    if (!klusterApiKey) {
      throw new Error('KLUSTER_API_KEY not found in environment variables')
    }

    console.log('Making request to Kluster API with message:', message)

    // Try the correct Kluster API endpoint format
    const response = await fetch('https://api.kluster.ai/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${klusterApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        prompt: `You are HeyNia AI, an expert assistant for dental practice management. You help dentists and dental staff with questions about:
        - Patient management and scheduling
        - Billing and insurance processing
        - Practice efficiency and workflow
        - Appointment management
        - Revenue tracking and analytics
        - HIPAA compliance
        - Dental practice best practices
        
        Always provide helpful, accurate, and professional responses. Keep answers concise but informative.
        
        User question: ${message}`,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    console.log('Kluster API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Kluster API error details:', errorText)
      
      // If the completions endpoint fails, try the chat completions endpoint
      console.log('Trying chat completions endpoint...')
      
      const chatResponse = await fetch('https://api.kluster.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${klusterApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are HeyNia AI, an expert assistant for dental practice management. You help dentists and dental staff with questions about:
              - Patient management and scheduling
              - Billing and insurance processing
              - Practice efficiency and workflow
              - Appointment management
              - Revenue tracking and analytics
              - HIPAA compliance
              - Dental practice best practices
              
              Always provide helpful, accurate, and professional responses. Keep answers concise but informative.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      })

      console.log('Chat API response status:', chatResponse.status)

      if (!chatResponse.ok) {
        const chatErrorText = await chatResponse.text()
        console.error('Chat API error details:', chatErrorText)
        throw new Error(`Kluster API error: ${chatResponse.status} - ${chatErrorText}`)
      }

      const chatData = await chatResponse.json()
      console.log('Chat API response data:', chatData)
      
      const aiResponse = chatData.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'

      return new Response(
        JSON.stringify({ response: aiResponse }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    const data = await response.json()
    console.log('Kluster API response data:', data)
    
    // Handle both completion and chat completion response formats
    const aiResponse = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || 'Sorry, I could not generate a response.'

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
