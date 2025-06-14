
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const { headers } = req;
  const upgradeHeader = headers.get("upgrade") || "";

  if (upgradeHeader.toLowerCase() !== "websocket") {
    return new Response("Expected WebSocket connection", { status: 400 });
  }

  console.log('WebSocket connection request received');

  const { socket, response } = Deno.upgradeWebSocket(req);
  
  let openAISocket: WebSocket | null = null;

  socket.onopen = () => {
    console.log('Client WebSocket connected');
    
    // Connect to OpenAI Realtime API
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY not found');
      socket.send(JSON.stringify({ 
        type: 'error', 
        message: 'OpenAI API key not configured' 
      }));
      return;
    }

    const realtimeUrl = `wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01`;
    openAISocket = new WebSocket(realtimeUrl, [], {
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'OpenAI-Beta': 'realtime=v1'
      }
    });

    openAISocket.onopen = () => {
      console.log('Connected to OpenAI Realtime API');
      
      // Send session configuration after connection
      const sessionConfig = {
        type: 'session.update',
        session: {
          modalities: ['text', 'audio'],
          instructions: `You are HeyNia AI, an expert assistant for dental practice management. You help dentists and dental staff with questions about:
          - Patient management and scheduling
          - Billing and insurance processing
          - Practice efficiency and workflow
          - Appointment management
          - Revenue tracking and analytics
          - HIPAA compliance
          - Dental practice best practices
          
          Always provide helpful, accurate, and professional responses. Keep answers concise but informative. You support real-time voice conversations.`,
          voice: 'alloy',
          input_audio_format: 'pcm16',
          output_audio_format: 'pcm16',
          input_audio_transcription: {
            model: 'whisper-1'
          },
          turn_detection: {
            type: 'server_vad',
            threshold: 0.5,
            prefix_padding_ms: 300,
            silence_duration_ms: 1000
          },
          temperature: 0.7,
          max_response_output_tokens: 1000
        }
      };

      openAISocket?.send(JSON.stringify(sessionConfig));
    };

    openAISocket.onmessage = (event) => {
      console.log('Message from OpenAI:', event.data);
      
      try {
        const data = JSON.parse(event.data);
        
        // Forward the message to the client
        socket.send(JSON.stringify(data));
        
        // Log important events
        if (data.type === 'session.created') {
          console.log('OpenAI session created');
        } else if (data.type === 'response.audio.delta') {
          console.log('Audio delta received');
        } else if (data.type === 'response.audio_transcript.delta') {
          console.log('Transcript delta:', data.delta);
        }
      } catch (error) {
        console.error('Error parsing OpenAI message:', error);
      }
    };

    openAISocket.onerror = (error) => {
      console.error('OpenAI WebSocket error:', error);
      socket.send(JSON.stringify({ 
        type: 'error', 
        message: 'OpenAI connection error' 
      }));
    };

    openAISocket.onclose = () => {
      console.log('OpenAI WebSocket closed');
      socket.send(JSON.stringify({ 
        type: 'connection_closed', 
        message: 'OpenAI connection closed' 
      }));
    };
  };

  socket.onmessage = (event) => {
    console.log('Message from client:', event.data);
    
    try {
      const data = JSON.parse(event.data);
      
      // Forward client messages to OpenAI
      if (openAISocket && openAISocket.readyState === WebSocket.OPEN) {
        openAISocket.send(JSON.stringify(data));
      } else {
        console.error('OpenAI socket not ready');
        socket.send(JSON.stringify({ 
          type: 'error', 
          message: 'OpenAI connection not ready' 
        }));
      }
    } catch (error) {
      console.error('Error parsing client message:', error);
    }
  };

  socket.onclose = () => {
    console.log('Client WebSocket disconnected');
    if (openAISocket) {
      openAISocket.close();
    }
  };

  socket.onerror = (error) => {
    console.error('Client WebSocket error:', error);
    if (openAISocket) {
      openAISocket.close();
    }
  };

  return response;
});
