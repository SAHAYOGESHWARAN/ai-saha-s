
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Infinity, Palette, Users, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Role-Based Intelligence',
      description: 'Advanced AI that adapts to user roles and permissions, providing personalized experiences for administrators, users, and guests.',
      details: ['Admin-level analytics', 'User-specific dashboards', 'Guest access controls', 'Dynamic content filtering']
    },
    {
      icon: Palette,
      title: '3D UI & Voice Processing',
      description: 'Immersive 3D user interfaces combined with advanced voice recognition and natural language processing capabilities.',
      details: ['Interactive 3D elements', 'Voice command recognition', 'Natural speech synthesis', 'Gesture-based navigation']
    },
    {
      icon: Infinity,
      title: 'Infinite Scalability',
      description: 'Cloud-native architecture that scales seamlessly from startup to enterprise level with automatic resource optimization.',
      details: ['Auto-scaling infrastructure', 'Load balancing', 'Global CDN integration', 'Performance optimization']
    },
    {
      icon: Zap,
      title: 'Framer Motion Animations',
      description: 'Smooth, performant animations that enhance user experience with motion design and interactive transitions.',
      details: ['Fluid page transitions', 'Interactive hover effects', 'Loading animations', 'Gesture-based interactions']
    },
    {
      icon: Users,
      title: 'Multi-User Collaboration',
      description: 'Real-time collaboration tools with role-based access control and seamless team communication features.',
      details: ['Real-time updates', 'Team workspaces', 'Permission management', 'Activity tracking']
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Flexible, component-based system that allows for easy customization and integration with existing workflows.',
      details: ['Plugin ecosystem', 'API integrations', 'Custom components', 'Workflow automation']
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
            Advanced Features
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Cutting-Edge Technology
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover the powerful features and technologies that make our AI platform stand out from the competition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-center text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animation Showcase */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Experience the Motion</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <p className="text-slate-300">Interactive Animation {item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Features;
