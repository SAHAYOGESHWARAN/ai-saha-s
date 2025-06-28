
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Zap, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="flex justify-center mb-6"
          variants={itemVariants}
        >
          <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation AI Platform
          </Badge>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Infinetix
          </span>
          <br />
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent text-5xl md:text-7xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            AI Suite
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Experience the future of artificial intelligence with our comprehensive suite of AI modules.
          From knowledge management to health analytics, we've got your AI needs covered.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          variants={itemVariants}
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore AI Modules
            </Button>
          </Link>
          
          <Link to="/about">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {[
            { icon: Brain, title: "Knowledge AI", desc: "Advanced knowledge processing" },
            { icon: Zap, title: "Health AI", desc: "Intelligent health analytics" },
            { icon: Sparkles, title: "Support AI", desc: "Smart customer support" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedHero;
