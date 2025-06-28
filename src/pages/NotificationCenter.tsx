
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Check, Trash2, AlertCircle, Info, CheckCircle, X } from 'lucide-react';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  category: 'system' | 'voice' | 'admin';
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'success',
      title: 'Voice Processing Complete',
      message: 'Your voice command has been successfully processed and executed.',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
      category: 'voice'
    },
    {
      id: '2',
      type: 'info',
      title: 'System Update Available',
      message: 'A new AI module update is available for download.',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      read: false,
      category: 'system'
    },
    {
      id: '3',
      type: 'warning',
      title: 'High CPU Usage Detected',
      message: 'AI processing is consuming more resources than usual.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: true,
      category: 'system'
    },
    {
      id: '4',
      type: 'success',
      title: 'User Login Successful',
      message: 'New user has successfully logged into the system.',
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      read: false,
      category: 'admin'
    },
    {
      id: '5',
      type: 'error',
      title: 'Voice Recognition Error',
      message: 'Failed to process voice command due to audio quality issues.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
      category: 'voice'
    }
  ]);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'error':
        return <X className="w-5 h-5 text-red-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'border-green-500/30 bg-green-500/10';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'error':
        return 'border-red-500/30 bg-red-500/10';
      default:
        return 'border-blue-500/30 bg-blue-500/10';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filterNotifications = (category?: string) => {
    if (!category) return notifications;
    return notifications.filter(notification => notification.category === category);
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Notification Center</h1>
                <p className="text-slate-400">Stay updated with system alerts and activities</p>
              </div>
            </div>
            <Badge className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-cyan-300">
              {unreadCount} unread
            </Badge>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={markAllAsRead}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Check className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
            <Button
              onClick={clearAll}
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-900/20"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                  <TabsTrigger value="system">System ({filterNotifications('system').length})</TabsTrigger>
                  <TabsTrigger value="voice">Voice ({filterNotifications('voice').length})</TabsTrigger>
                  <TabsTrigger value="admin">Admin ({filterNotifications('admin').length})</TabsTrigger>
                </TabsList>

                {['all', 'system', 'voice', 'admin'].map((category) => (
                  <TabsContent key={category} value={category} className="space-y-4">
                    {(category === 'all' ? notifications : filterNotifications(category)).length === 0 ? (
                      <div className="text-center py-12">
                        <Bell className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400">No notifications found</p>
                      </div>
                    ) : (
                      (category === 'all' ? notifications : filterNotifications(category)).map((notification, index) => (
                        <motion.div
                          key={notification.id}
                          className={`p-4 rounded-lg border transition-all duration-300 ${
                            notification.read 
                              ? 'bg-slate-700/30 border-slate-600' 
                              : `${getNotificationColor(notification.type)} border-opacity-50`
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              {getNotificationIcon(notification.type)}
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h3 className={`font-semibold ${notification.read ? 'text-slate-300' : 'text-white'}`}>
                                    {notification.title}
                                  </h3>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                  )}
                                </div>
                                <p className={`text-sm ${notification.read ? 'text-slate-400' : 'text-slate-300'} mb-2`}>
                                  {notification.message}
                                </p>
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline" className="text-xs">
                                    {notification.category}
                                  </Badge>
                                  <span className="text-xs text-slate-500">
                                    {formatTimestamp(notification.timestamp)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 ml-4">
                              {!notification.read && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-green-400 hover:bg-green-900/20"
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => deleteNotification(notification.id)}
                                className="text-red-400 hover:bg-red-900/20"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationCenter;
