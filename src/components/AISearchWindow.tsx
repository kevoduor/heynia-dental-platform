import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, Loader2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AISearchWindowProps {
  onSearch?: (query: string) => void;
}

// Define SpeechRecognition types
interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  length: number;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

const VoiceWaveform = ({ isActive }: { isActive: boolean }) => {
  const bars = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="flex items-center justify-center space-x-1 h-12">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`w-1 bg-gradient-to-t from-orange-500 to-red-500 rounded-full transition-all duration-150 ${
            isActive 
              ? 'animate-pulse h-2 sm:h-4 md:h-6 lg:h-8' 
              : 'h-1'
          }`}
          style={{
            animationDelay: `${bar * 0.1}s`,
            height: isActive 
              ? `${Math.random() * 32 + 8}px` 
              : '4px',
            animationDuration: `${0.3 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

const AISearchWindow = ({ onSearch }: AISearchWindowProps) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Initialize speech recognition if available
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition() as SpeechRecognition;
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0]?.[0]?.transcript || '';
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
    <div className="w-full max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
          Ask HeyNia Anything
        </h2>
        <p className="text-gray-600 text-lg">
          Get instant answers about your dental practice management
        </p>
      </div>

      {/* Search Input Card */}
      <Card className="mb-6 border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-1">
              <div className="flex items-center space-x-3 p-4">
                <div className="flex-1">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question or use voice..."
                    className="border-0 text-lg h-12 bg-transparent focus:ring-0 placeholder:text-gray-400"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    size="sm"
                    variant={isListening ? "destructive" : "ghost"}
                    onClick={isListening ? stopListening : startListening}
                    disabled={isLoading}
                    className="h-12 w-12 rounded-xl transition-all hover:scale-105"
                  >
                    {isListening ? (
                      <MicOff className="h-5 w-5" />
                    ) : (
                      <Mic className="h-5 w-5" />
                    )}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleSearch()}
                    disabled={isLoading || !query.trim()}
                    className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Waveform Visualization */}
          {isListening && (
            <div className="mt-6">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium text-lg">Hi HeyNia, I want to...</span>
                  </div>
                  <VoiceWaveform isActive={isListening} />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Response Section */}
      {response && (
        <Card className="mb-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-800 leading-relaxed text-lg">{response}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Suggestion */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
          <Sparkles className="w-4 h-4 text-gray-400" />
          <p className="text-sm text-gray-600">
            Try Asking: "HeyNia Could you Provide me with the list of patients I'm seeing today?"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISearchWindow;
