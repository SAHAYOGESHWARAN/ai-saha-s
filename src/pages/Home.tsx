
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Brain, MessageSquare, Mic, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVoiceWelcome } from '@/hooks/useVoiceWelcome';

const Home: React.FC = () => {
  const { triggerWelcome } = useVoiceWelcome();

  const handleVoiceGreeting = () => {
    const greeting = "Good morning sir! Welcome to Sahayogeshwaran AI. I'm here to assist you with our advanced AI solutions.";
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(greeting);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="text-center z-10 max-w-6xl mx-auto">
          <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Sahayogeshwaran AI Solutions
          </Badge>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Sahayogeshwaran
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent text-5xl md:text-7xl">
              AI Intelligence
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the future of artificial intelligence with our comprehensive suite of AI solutions.
            From voice assistants to advanced NLP, we deliver infinite possibilities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              onClick={handleVoiceGreeting}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Voice Greeting
            </Button>
            
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Introduction */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Welcome to Sahayogeshwaran AI
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto">
            We are pioneering the future of artificial intelligence with innovative solutions that transform how businesses operate.
            Our mission is to make AI accessible, powerful, and infinitely scalable for everyone.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "AI Innovation", desc: "Cutting-edge AI technology solutions" },
              { icon: MessageSquare, title: "Smart Communication", desc: "Advanced NLP and voice processing" },
              { icon: Sparkles, title: "Infinite Scalability", desc: "Solutions that grow with your needs" }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
