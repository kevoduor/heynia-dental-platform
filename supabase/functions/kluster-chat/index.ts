
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

serve(async (req) => {
  console.log('kluster-chat function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const requestBody = await req.json()
    console.log('Request body received:', requestBody)
    
    const { message } = requestBody
    
    if (!message) {
      console.error('No message provided in request')
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }
    
    const klusterApiKey = Deno.env.get('KLUSTER_API_KEY')
    console.log('KLUSTER_API_KEY exists:', !!klusterApiKey)
    console.log('KLUSTER_API_KEY length:', klusterApiKey ? klusterApiKey.length : 0)
    
    if (!klusterApiKey) {
      console.error('KLUSTER_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    console.log('Making request to Kluster API with message:', message)

    const klusterRequestBody = {
      model: 'gpt-4o',
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
    }

    console.log('Kluster request body:', JSON.stringify(klusterRequestBody, null, 2))

    const response = await fetch('https://api.kluster.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${klusterApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(klusterRequestBody),
    })

    console.log('Kluster API response status:', response.status)
    console.log('Kluster API response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Kluster API error details:', errorText)
      console.error('Response status:', response.status)
      console.error('Response statusText:', response.statusText)
      
      // Return a more user-friendly error message
      let userMessage = 'AI service temporarily unavailable. Please try again in a moment.'
      
      if (response.status === 401) {
        userMessage = 'Authentication failed. Please check API configuration.'
        console.error('Authentication error - check KLUSTER_API_KEY')
      } else if (response.status === 429) {
        userMessage = 'Too many requests. Please wait a moment and try again.'
      } else if (response.status >= 500) {
        userMessage = 'AI service is experiencing issues. Please try again later.'
      }
      
      return new Response(
        JSON.stringify({ 
          error: userMessage,
          technical_details: {
            status: response.status,
            statusText: response.statusText,
            body: errorText
          }
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200, // Return 200 so the frontend can handle the error gracefully
        }
      )
    }

    const data = await response.json()
    console.log('Kluster API response data:', JSON.stringify(data, null, 2))
    
    const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'
    console.log('Extracted AI response:', aiResponse)

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Unexpected error in kluster-chat function:', error)
    console.error('Error stack:', error.stack)
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    
    return new Response(
      JSON.stringify({ 
        error: 'An unexpected error occurred. Please try again.',
        technical_details: {
          message: error.message,
          name: error.name,
          stack: error.stack
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, // Return 200 so the frontend can handle the error gracefully
      }
    )
  }
})
