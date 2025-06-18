import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send, Loader2, Sparkles, AlertCircle, Camera, Upload, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

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

const VoiceWaveform = ({ isActive }: { isActive: boolean }) => {
  const bars = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="flex items-center justify-center space-x-1 h-8 sm:h-12">
      {bars.map((bar) => (
        <div
          key={bar}
          className={`w-0.5 sm:w-1 bg-gradient-to-t from-blue-400/70 to-purple-500/70 rounded-full transition-all duration-150 ${
            isActive 
              ? 'animate-pulse h-2 sm:h-4 md:h-6' 
              : 'h-1'
          }`}
          style={{
            animationDelay: `${bar * 0.1}s`,
            height: isActive 
              ? `${Math.random() * 24 + 8}px` 
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
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      try {
        recognitionRef.current.start();
      } catch (error) {
        setIsListening(false);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim() && !selectedImage) return;
    
    setIsLoading(true);
    setResponse('');
    setError('');
    
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      let requestBody: any = { message: searchQuery };
      
      if (selectedImage) {
        const base64Image = await convertImageToBase64(selectedImage);
        requestBody.image = base64Image;
        requestBody.hasImage = true;
      }
      
      const { data, error: functionError } = await supabase.functions.invoke('kluster-chat', {
        body: requestBody
      });

      if (functionError) {
        throw new Error(`Function call failed: ${functionError.message}`);
      }

      if (!data) {
        throw new Error('No response data received from AI service');
      }

      if (data.error) {
        setError(data.error);
        return;
      }

      const aiResponse = data?.response || 'Sorry, I could not generate a response.';
      setResponse(aiResponse);
    } catch (error: any) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network connection error. Please check your internet connection and try again.';
      } else if (error.message?.includes('Function call failed')) {
        errorMessage = 'AI service is temporarily unavailable. Please try again in a moment.';
      }
      
      setError(errorMessage);
    } finally {
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2 sm:mb-4">
          Ask HeyNia Anything
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl px-4">
          Get instant answers about your dental practice management - with text or images
        </p>
      </div>

      {/* Search Interface */}
      <div className="mb-4 sm:mb-6">
        <div className="relative">
          {/* Glass container */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl p-1 shadow-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4">
              <div className="flex-1">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question or upload an image..."
                  className="border-0 text-base sm:text-lg h-10 sm:h-12 bg-transparent focus:ring-0 placeholder:text-gray-500/80 text-gray-800"
                  disabled={isLoading}
                />
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={handleCameraCapture}
                  disabled={isLoading}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl transition-all hover:scale-105 bg-white/30 hover:bg-white/40 border-0"
                  title="Take photo"
                >
                  <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={handleFileUpload}
                  disabled={isLoading}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl transition-all hover:scale-105 bg-white/30 hover:bg-white/40 border-0"
                  title="Upload image"
                >
                  <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={isListening ? "destructive" : "ghost"}
                  onClick={isListening ? stopListening : startListening}
                  disabled={isLoading}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl transition-all hover:scale-105 bg-white/30 hover:bg-white/40 border-0"
                >
                  {isListening ? (
                    <MicOff className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={() => handleSearch()}
                  disabled={isLoading || (!query.trim() && !selectedImage)}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/90 hover:to-purple-700/90 transition-all hover:scale-105 shadow-lg border-0 backdrop-blur-sm"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageSelect}
          className="hidden"
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4 sm:mt-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Selected image"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shadow-lg"
                  />
                  <Button
                    onClick={removeImage}
                    size="sm"
                    variant="destructive"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Image selected for analysis</p>
                  <p className="text-xs text-gray-500">
                    The AI can analyze dental images, X-rays, or any visual content related to your practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Voice Waveform Visualization */}
        {isListening && (
          <div className="mt-4 sm:mt-6">
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-white font-medium text-sm sm:text-lg">Hi HeyNia, I want to...</span>
                </div>
                <VoiceWaveform isActive={isListening} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error Section */}
      {error && (
        <Alert className="mb-4 sm:mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 text-sm sm:text-base">
            {error}
          </AlertDescription>
        </Alert>
      )}

      {/* Response Section */}
      {response && (
        <Card className="mb-4 sm:mb-6 border-0 shadow-xl bg-white/80 backdrop-blur-xl border border-white/30">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/80 to-purple-600/80 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 shadow-lg backdrop-blur-sm">
                <span className="text-white font-bold text-sm sm:text-lg">H</span>
              </div>
              <div className="flex-1">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-white/40">
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg whitespace-pre-wrap">{response}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Suggestion */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/30 backdrop-blur-xl rounded-full border border-white/40 shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          <p className="text-xs sm:text-sm text-gray-700">
            Try asking with text or upload dental X-rays, images, or documents for analysis
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISearchWindow;
