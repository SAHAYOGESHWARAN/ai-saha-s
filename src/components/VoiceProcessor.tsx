
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, Volume2, Settings } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface VoiceCommand {
  command: string;
  action: () => void;
  description: string;
}

interface VoiceProcessorProps {
  onCommand?: (command: string) => void;
  commands?: VoiceCommand[];
}

const VoiceProcessor: React.FC<VoiceProcessorProps> = ({ onCommand, commands = [] }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const { addNotification } = useNotifications();
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Default voice commands for navigation and interaction
  const defaultCommands: VoiceCommand[] = [
    {
      command: 'open knowledge ai',
      action: () => window.location.hash = '#knowledge',
      description: 'Navigate to Knowledge AI module'
    },
    {
      command: 'open health ai',
      action: () => window.location.hash = '#health',
      description: 'Navigate to Health AI module'
    },
    {
      command: 'open support ai',
      action: () => window.location.hash = '#support',
      description: 'Navigate to Support AI module'
    },
    {
      command: 'go to settings',
      action: () => window.location.hash = '#settings',
      description: 'Navigate to Settings page'
    },
    {
      command: 'show notifications',
      action: () => {
        addNotification({
          type: 'info',
          title: 'Voice Command',
          message: 'Notifications panel activated via voice command'
        });
      },
      description: 'Show notification center'
    }
  ];

  const allCommands = [...defaultCommands, ...commands];

  useEffect(() => {
    // Check if Speech Recognition is supported
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setIsSupported(true);
      
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          console.log('Voice recognition started');
          setIsListening(true);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let finalTranscript = '';
          
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              finalTranscript += result[0].transcript;
            }
          }

          if (finalTranscript) {
            setTranscript(finalTranscript.toLowerCase().trim());
            processVoiceCommand(finalTranscript.toLowerCase().trim());
          }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          
          addNotification({
            type: 'error',
            title: 'Voice Recognition Error',
            message: `Error: ${event.error}. Please try again.`
          });
        };

        recognition.onend = () => {
          console.log('Voice recognition ended');
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    } else {
      console.warn('Speech Recognition not supported');
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const processVoiceCommand = (command: string) => {
    console.log('Processing voice command:', command);

    // Find matching command
    const matchedCommand = allCommands.find(cmd => 
      command.includes(cmd.command.toLowerCase())
    );

    if (matchedCommand) {
      matchedCommand.action();
      
      addNotification({
        type: 'success',
        title: 'Voice Command Executed',
        message: `Command "${matchedCommand.command}" executed successfully`
      });

      if (onCommand) {
        onCommand(command);
      }
    } else {
      addNotification({
        type: 'warning',
        title: 'Command Not Recognized',
        message: `Sorry, I didn't understand "${command}". Try one of the available commands.`
      });
    }

    // Clear transcript after processing
    setTimeout(() => setTranscript(''), 3000);
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        addNotification({
          type: 'info',
          title: 'Voice Commands Active',
          message: 'Listening for voice commands...'
        });
      } catch (error) {
        console.error('Error starting recognition:', error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  if (!isSupported) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Voice Commands
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400 text-sm">
            Voice recognition is not supported in your browser. Please use a modern browser like Chrome, Edge, or Safari.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center">
              <Volume2 className="w-5 h-5 mr-2" />
              Voice Commands AI
              {isListening && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <Badge className="ml-2 bg-green-500 animate-pulse">
                    Listening
                  </Badge>
                </motion.div>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={isListening ? stopListening : startListening}
                className={`${
                  isListening 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                } transition-all duration-300`}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-4 h-4 mr-2" />
                    Stop Listening
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4 mr-2" />
                    Start Voice Commands
                  </>
                )}
              </Button>
            </motion.div>
          </div>

          {transcript && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-900/50 p-3 rounded-lg border border-slate-700"
            >
              <p className="text-slate-300 text-sm">
                <strong>Last command:</strong> "{transcript}"
              </p>
            </motion.div>
          )}

          <div className="space-y-2">
            <h4 className="text-white font-medium text-sm">Available Commands:</h4>
            <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
              {allCommands.slice(0, 5).map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/30 p-2 rounded border border-slate-700 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <p className="text-cyan-400 text-xs font-medium">"{cmd.command}"</p>
                  <p className="text-slate-400 text-xs">{cmd.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VoiceProcessor;
