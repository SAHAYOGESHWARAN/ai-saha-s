
import { useEffect, useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { voiceService } from '@/services/voiceService';

export function useVoiceWelcome() {
  const { user, isAuthenticated } = useUser();
  const [hasWelcomed, setHasWelcomed] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user && !hasWelcomed) {
      // Delay to ensure page is loaded
      const timer = setTimeout(() => {
        const welcomeMessage = voiceService.getWelcomeMessage(user.name);
        voiceService.speak(welcomeMessage);
        setHasWelcomed(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, user, hasWelcomed]);

  const triggerWelcome = () => {
    if (user) {
      const welcomeMessage = voiceService.getWelcomeMessage(user.name);
      voiceService.speak(welcomeMessage);
    }
  };

  return { triggerWelcome, hasWelcomed };
}
