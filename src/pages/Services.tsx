
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mic, MessageSquare, Brain, Bot, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'voice-assistant',
      title: 'Voice Assistant',
      description: 'Advanced voice recognition and natural speech processing with multilingual support',
      icon: Mic,
      color: 'from-purple-500 to-indigo-600',
      features: ['Natural Language Understanding', 'Voice Recognition', 'Speech Synthesis', 'Multilingual Support'],
      path: '/knowledge'
    },
    {
      id: 'nlp-support',
      title: 'NLP Support',
      description: 'Comprehensive natural language processing for text analysis and understanding',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600',
      features: ['Text Analysis', 'Sentiment Detection', 'Entity Recognition', 'Language Translation'],
      path: '/support'
    },
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI',
      description: 'Integrated AI that processes text, voice, images, and video simultaneously',
      icon: Brain,
      color: 'from-green-500 to-emerald-600',
      features: ['Image Recognition', 'Video Analysis', 'Audio Processing', 'Cross-Modal Understanding'],
      path: '/insights'
    },
    {
      id: 'chat-copilot',
      title: 'Chat Co-Pilot',
      description: 'Intelligent chat assistant that enhances customer support and engagement',
      icon: Bot,
      color: 'from-orange-500 to-red-600',
      features: ['24/7 Availability', 'Context Awareness', 'Personalized Responses', 'Integration Ready'],
      path: '/support'
    },
    {
      id: 'ml-pipeline',
      title: 'ML Pipeline Automation',
      description: 'Automated machine learning pipeline for model training and deployment',
      icon: Cog,
      color: 'from-pink-500 to-purple-600',
      features: ['Auto ML Training', 'Model Deployment', 'Performance Monitoring', 'Scalable Infrastructure'],
      path: '/talent'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300 mb-4">
            Our Services
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            AI Solutions Portfolio
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business operations and enhance user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={service.path}>
                    <Button
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-purple-600 hover:to-cyan-600 text-white border-0 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can be customized for your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/login">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3">
                    Get Started
                  </Button>
                </Link>
                <Link to="/support">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
