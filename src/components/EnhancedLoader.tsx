
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

interface EnhancedLoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'minimal' | 'advanced';
}

const EnhancedLoader: React.FC<EnhancedLoaderProps> = ({ 
  message = "Loading AI Module...", 
  size = 'medium',
  variant = 'default'
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center space-x-2">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-purple-500`} />
        {message && <span className="text-slate-300">{message}</span>}
      </div>
    );
  }

  if (variant === 'advanced') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="relative mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {message}
          </motion.h2>
          
          <motion.div
            className="flex justify-center space-x-2 mb-4"
            variants={containerVariants}
            animate="animate"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />
            ))}
          </motion.div>
          
          <p className="text-slate-400">Please wait while we prepare your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className="relative mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center`}>
          <Sparkles className="w-1/2 h-1/2 text-white" />
        </div>
      </motion.div>
      
      <motion.p
        className="text-slate-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default EnhancedLoader;
