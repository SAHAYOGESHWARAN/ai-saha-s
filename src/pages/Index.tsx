
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Heart, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Settings,
  Sparkles,
  Zap,
  Shield,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { useNotifications } from '@/contexts/NotificationContext';
import VoiceProcessor from '@/components/VoiceProcessor';
import AnimatedHero from '@/components/AnimatedHero';
import EnhancedLoader from '@/components/EnhancedLoader';

const Index: React.FC = () => {
  const { user, isAuthenticated } = useUser();
  const { addNotification } = useNotifications();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const aiModules = [
    {
      id: 'knowledge',
      title: 'Knowledge AI',
      description: 'Advanced knowledge processing and information retrieval system',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      path: '/knowledge',
      features: ['Natural Language Processing', 'Document Analysis', 'Smart Search']
    },
    {
      id: 'health',
      title: 'Health AI',
      description: 'Intelligent health analytics and medical insights platform',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      path: '/health',
      features: ['Health Monitoring', 'Predictive Analytics', 'Medical Insights']
    },
    {
      id: 'support',
      title: 'Support AI',
      description: 'Smart customer support and automated assistance system',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600',
      path: '/support-ai',
      features: ['24/7 Support', 'Intelligent Routing', 'Auto-Resolution']
    },
    {
      id: 'insights',
      title: 'Insights AI',
      description: 'Business intelligence and data analytics platform',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      path: '/insights',
      features: ['Data Visualization', 'Trend Analysis', 'Predictive Modeling']
    },
    {
      id: 'talent',
      title: 'Talent AI',
      description: 'HR analytics and talent management system',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      path: '/talent',
      features: ['Talent Acquisition', 'Performance Analytics', 'Career Development']
    }
  ];

  const handleModuleClick = (module: typeof aiModules[0]) => {
    addNotification({
      type: 'info',
      title: `${module.title} Activated`,
      message: `Loading ${module.title} module with enhanced features...`
    });
  };

  if (isLoading) {
    return <EnhancedLoader variant="advanced" message="Initializing Infinetix AI Suite" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Quick Navigation */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Link to="/about">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">About Us</h3>
                  <p className="text-slate-400 text-sm">Learn our story</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Services</h3>
                  <p className="text-slate-400 text-sm">AI Solutions</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/features">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Features</h3>
                  <p className="text-slate-400 text-sm">Technology</p>
                </CardContent>
              </Card>
            </Link>

            <Link to={isAuthenticated ? "/dashboard" : "/login"}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {isAuthenticated ? "Dashboard" : "Get Started"}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {isAuthenticated ? "Your portal" : "Join us"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* AI Modules Grid */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </Badge>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              Choose Your AI Module
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Each module is designed with cutting-edge AI technology to provide intelligent solutions for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {module.title}
                    </CardTitle>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to={module.path}>
                      <Button
                        className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-purple-600 hover:to-cyan-600 text-white border-0 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                        onClick={() => handleModuleClick(module)}
                      >
                        Launch Module
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Voice Commands Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Voice-Controlled AI
            </h2>
            <p className="text-slate-400 text-lg">
              Control your AI experience with natural voice commands
            </p>
          </div>
          
          <div className="flex justify-center">
            <VoiceProcessor />
          </div>
        </div>
      </motion.section>

      {/* Admin Dashboard Link */}
      {user?.role === 'admin' && (
        <motion.section
          className="py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Admin Dashboard</h3>
                <p className="text-slate-300 mb-6">
                  Access advanced system controls and analytics
                </p>
                <Link to="/admin">
                  <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    <Settings className="w-4 h-4 mr-2" />
                    Access Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl ml-3">Sahayogeshwaran AI</span>
          </div>
          <p className="text-slate-400 mb-4">
            Empowering the future with intelligent AI solutions
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/settings" className="text-slate-400 hover:text-white transition-colors">
              Settings
            </Link>
            <Link to="/support" className="text-slate-400 hover:text-white transition-colors">
              Support
            </Link>
            <Link to="/notifications" className="text-slate-400 hover:text-white transition-colors">
              Notifications
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-slate-400 hover:text-white transition-colors">
                Admin
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
