
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, MessageSquare } from 'lucide-react';

const FloatingCube: React.FC = () => {
  const modules = [
    { name: 'Knowledge', icon: Brain, color: 'from-purple-500 to-indigo-600' },
    { name: 'Health', icon: Heart, color: 'from-red-500 to-pink-600' },
    { name: 'Support', icon: MessageSquare, color: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <div className="w-full py-12">
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {modules.map((module, index) => (
          <motion.div
            key={module.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <module.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{module.name} AI</h3>
                <p className="text-slate-400">Advanced AI capabilities</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingCube;
