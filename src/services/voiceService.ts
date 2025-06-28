
export class VoiceService {
  private synthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[];

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.voices = [];
    this.loadVoices();
  }

  private loadVoices() {
    const loadVoicesHandler = () => {
      this.voices = this.synthesis.getVoices();
    };

    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = loadVoicesHandler;
    }
    
    loadVoicesHandler();
  }

  speak(text: string, options: { rate?: number; pitch?: number; volume?: number } = {}) {
    if (!this.synthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find a good voice (prefer female English voices)
    const preferredVoice = this.voices.find(voice => 
      voice.lang.includes('en') && voice.name.toLowerCase().includes('female')
    ) || this.voices.find(voice => voice.lang.includes('en')) || this.voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.1;
    utterance.volume = options.volume || 0.8;

    this.synthesis.speak(utterance);
  }

  stop() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }

  getWelcomeMessage(userName?: string): string {
    const messages = [
      `Welcome to Infinetix AI, ${userName || 'user'}! I'm your intelligent assistant ready to help you explore our advanced AI modules.`,
      `Hello ${userName || 'there'}! Welcome to the future of AI with Infinetix. Let me guide you through our powerful features.`,
      `Greetings! I'm excited to introduce you to Infinetix AI, where innovation meets intelligence. How may I assist you today?`
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
  }
}

export const voiceService = new VoiceService();
