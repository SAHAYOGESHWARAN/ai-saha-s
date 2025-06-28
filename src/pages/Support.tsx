
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, 
  MessageSquare, 
  Phone, 
  Mail, 
  HelpCircle, 
  Search,
  ChevronDown,
  ChevronRight,
  Send,
  Mic
} from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationContext';

const Support: React.FC = () => {
  const { addNotification } = useNotifications();
  const [chatMessage, setChatMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      id: '1',
      question: 'How do I use voice commands?',
      answer: 'To use voice commands, click the voice button and speak clearly. Our AI supports natural language processing, so you can speak naturally. Common commands include "Show me the dashboard", "Open Knowledge AI", or "What\'s my system status".'
    },
    {
      id: '2', 
      question: 'What AI modules are available?',
      answer: 'We offer five main AI modules: Knowledge AI for information processing, Health AI for medical insights, Support AI for customer service, Insights AI for business analytics, and Talent AI for HR management.'
    },
    {
      id: '3',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a secure reset link.'
    },
    {
      id: '4',
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption and security measures. All data is encrypted in transit and at rest, and we comply with industry security standards.'
    },
    {
      id: '5',
      question: 'How do I upgrade my plan?',
      answer: 'You can upgrade your plan by going to Settings > Billing or contacting our support team. We offer various tiers to suit different business needs.'
    }
  ];

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Mock AI response
    const responses = [
      "I understand you need help with that. Let me assist you with your request.",
      "That's a great question! Here's what I can help you with...",
      "I'm here to help! Based on your question, I recommend checking our documentation or contacting our support team.",
      "Thanks for reaching out! I can help you navigate through our AI modules and features."
    ];

    addNotification({
      type: 'info',
      title: 'AI Assistant Response',
      message: responses[Math.floor(Math.random() * responses.length)]
    });

    setChatMessage('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addNotification({
      type: 'success',
      title: 'Message Sent',
      message: 'Your support request has been submitted. We\'ll get back to you within 24 hours.'
    });

    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleVoiceHelp = () => {
    const helpMessage = "Welcome to Sahayogeshwaran AI Support! You can ask me about voice commands, AI modules, account settings, or any technical issues. How can I help you today?";
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(helpMessage);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300 mb-4">
            Support Center
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            How Can We Help You?
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get instant help with our AI assistant, browse our knowledge base, or contact our support team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Chat Assistant */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 h-full">
              <CardContent className="p-6">
                <Tabs defaultValue="chat" className="h-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="chat">AI Assistant</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>

                  <TabsContent value="chat" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">AI Support Assistant</h3>
                          <p className="text-slate-400 text-sm">Online and ready to help</p>
                        </div>
                      </div>
                      <Button
                        onClick={handleVoiceHelp}
                        size="sm"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                      >
                        <Mic className="w-4 h-4 mr-1" />
                        Voice Help
                      </Button>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4 min-h-[300px] flex flex-col justify-end">
                      <div className="space-y-3 mb-4">
                        <div className="bg-slate-600/50 rounded-lg p-3 max-w-xs">
                          <p className="text-slate-300 text-sm">
                            Hi! I'm your AI assistant. I can help you with voice commands, AI modules, and technical support. What would you like to know?
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleChatSubmit} className="flex space-x-2">
                        <Input
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          placeholder="Type your question here..."
                          className="flex-1 bg-slate-600/50 border-slate-500 text-white"
                        />
                        <Button type="submit" size="icon">
                          <Send className="w-4 h-4" />
                        </Button>
                      </form>
                    </div>
                  </TabsContent>

                  <TabsContent value="faq" className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search FAQs..."
                        className="pl-10 bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                      {filteredFaqs.map((faq) => (
                        <div key={faq.id} className="border border-slate-600 rounded-lg">
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                            className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                          >
                            <span className="text-white font-medium">{faq.question}</span>
                            {expandedFaq === faq.id ? (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                          {expandedFaq === faq.id && (
                            <div className="px-4 pb-4">
                              <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Quick Contact */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Phone Support</p>
                    <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email Support</p>
                    <p className="text-slate-400 text-sm">support@sahayogeshwaran.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Live Chat</p>
                    <p className="text-slate-400 text-sm">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white"
                    required
                  />
                  <Input
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white min-h-[100px]"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
