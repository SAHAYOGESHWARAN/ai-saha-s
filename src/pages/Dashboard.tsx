
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  Bell, 
  Play, 
  Brain, 
  MessageSquare, 
  Heart,
  BarChart3,
  Zap
} from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePersonalizedGreeting = () => {
    const hour = currentTime.getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';

    const message = `${greeting} ${user?.name || 'there'}! Welcome to your AI dashboard. Your systems are running optimally and ready for action.`;
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const stats = [
    { title: 'AI Usage', value: '2,847', change: '+12%', icon: Brain, color: 'from-purple-500 to-indigo-500' },
    { title: 'Active Users', value: '1,234', change: '+8%', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { title: 'System Health', value: '99.9%', change: '+0.1%', icon: Activity, color: 'from-green-500 to-emerald-500' },
    { title: 'Notifications', value: '45', change: '+5', icon: Bell, color: 'from-orange-500 to-red-500' }
  ];

  const quickLinks = [
    { title: 'Knowledge AI', path: '/knowledge', icon: Brain, color: 'from-purple-500 to-indigo-600' },
    { title: 'Health AI', path: '/health', icon: Heart, color: 'from-red-500 to-pink-600' },
    { title: 'Support AI', path: '/support', icon: MessageSquare, color: 'from-blue-500 to-cyan-600' },
    { title: 'Insights AI', path: '/insights', icon: BarChart3, color: 'from-green-500 to-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Personalized Greeting */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {user?.name || 'User'}!
              </h1>
              <p className="text-slate-400 text-lg">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <Button
              onClick={handlePersonalizedGreeting}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 mt-4 lg:mt-0"
            >
              <Play className="w-4 h-4 mr-2" />
              Voice Greeting
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* AI Modules Quick Access */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Quick Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.path}>
                  <motion.div
                    className="flex items-center p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {link.title}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">AI Processing</span>
                  <span className="text-green-400">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Memory Usage</span>
                  <span className="text-blue-400">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Network Speed</span>
                  <span className="text-purple-400">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  All systems operational
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'Knowledge AI processed 24 queries', time: '2 minutes ago', status: 'success' },
                  { action: 'Health AI analysis completed', time: '5 minutes ago', status: 'success' },
                  { action: 'Support AI handled 12 conversations', time: '10 minutes ago', status: 'success' },
                  { action: 'System backup completed', time: '1 hour ago', status: 'info' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        activity.status === 'success' ? 'bg-green-400' : 'bg-blue-400'
                      }`} />
                      <span className="text-slate-300">{activity.action}</span>
                    </div>
                    <span className="text-slate-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
