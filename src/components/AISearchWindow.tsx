
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AISearchWindowProps {
  onSearch?: (query: string) => void;
}

const AISearchWindow = ({ onSearch }: AISearchWindowProps) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0]?.transcript || '';
          setQuery(transcript);
          setIsListening(false);
          if (transcript.trim()) {
            handleSearch(transcript);
          }
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    
    try {
      // Simulate AI response - in a real implementation, you'd call your AI API here
      setTimeout(() => {
        const responses = [
          "Great question! Heynia's automated scheduling system reduces no-shows by 40% through intelligent reminders and easy rescheduling options.",
          "Heynia streamlines billing with automated insurance claims processing and payment reminders, saving you 3+ hours per week.",
          "Our mobile app lets you manage appointments, view patient records, and handle payments from anywhere - perfect for busy dentists.",
          "With Heynia's analytics dashboard, you can track revenue trends, patient satisfaction, and appointment efficiency in real-time.",
          "Heynia is HIPAA-compliant and offers 24/7 support. Plus, 10% of profits support ending gender-based violence initiatives."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setResponse(randomResponse);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error searching:', error);
      setResponse('Sorry, I encountered an error. Please try again.');
      setIsLoading(false);
    }

    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl border-0">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything about Heynia... (try voice or type)"
                className="pr-20 text-base h-12 bg-white border-2 border-primary/20 focus:border-primary"
                disabled={isLoading}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button
                  type="button"
                  size="sm"
                  variant={isListening ? "destructive" : "ghost"}
                  onClick={isListening ? stopListening : startListening}
                  disabled={isLoading}
                  className="h-8 w-8 p-0"
                >
                  {isListening ? (
                    <MicOff className="h-4 w-4" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => handleSearch()}
                  disabled={isLoading || !query.trim()}
                  className="h-8 w-8 p-0 gradient-primary text-white border-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {isListening && (
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Listening...</span>
              </div>
            </div>
          )}

          {response && (
            <div className="mt-4 p-4 bg-gradient-to-br from-primary/5 to-blue-50 rounded-lg border border-primary/10">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">{response}</p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Try asking: "How does scheduling work?" or "What makes Heynia different?"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Extend the Window interface for speech recognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export default AISearchWindow;
