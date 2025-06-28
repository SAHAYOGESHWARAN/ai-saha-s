
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2020', event: 'Founded Sahayogeshwaran AI', description: 'Started with a vision to democratize AI' },
    { year: '2021', event: 'First AI Assistant Launch', description: 'Launched our first voice-enabled AI assistant' },
    { year: '2022', event: 'NLP Breakthrough', description: 'Achieved significant advances in natural language processing' },
    { year: '2023', event: 'Multimodal AI Platform', description: 'Introduced comprehensive multimodal AI solutions' },
    { year: '2024', event: 'Enterprise Scale', description: 'Expanded to serve enterprise clients globally' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300 mb-4">
            About Us
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Our Story & Mission
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover the passion and vision behind Sahayogeshwaran AI - pioneering intelligent solutions for tomorrow's world.
          </p>
        </motion.div>

        {/* Mission & Values */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  To democratize artificial intelligence and make advanced AI solutions accessible to businesses of all sizes.
                  We believe in creating intelligent systems that enhance human capabilities rather than replace them.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Innovation, transparency, and ethical AI development guide everything we do. 
                  We're committed to building AI solutions that are not only powerful but also responsible and trustworthy.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Founder Story */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Meet Sahayogeshwaran</h2>
              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                With over a decade of experience in artificial intelligence and machine learning, Sahayogeshwaran founded this company 
                with a vision to bridge the gap between cutting-edge AI research and practical business applications. 
                His passion for creating intelligent systems that truly understand and assist humans has driven the development 
                of our comprehensive AI suite. From humble beginnings as a solo developer to leading a team of AI experts, 
                the journey has been focused on one goal: making AI work for everyone.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                    <p className="text-slate-400">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
