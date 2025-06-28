
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  Users, 
  Activity, 
  BarChart3, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Database,
  Server,
  Cpu,
  Search
} from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { useNotifications } from '@/contexts/NotificationContext';

interface SystemMetric {
  label: string;
  value: string | number;
  change: string;
  status: 'good' | 'warning' | 'error';
  icon: React.ReactNode;
}

const AdminDashboard: React.FC = () => {
  const { user } = useUser();
  const { addNotification } = useNotifications();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const systemMetrics: SystemMetric[] = [
    {
      label: 'Active Users',
      value: 1247,
      change: '+12%',
      status: 'good',
      icon: <Users className="w-5 h-5" />
    },
    {
      label: 'API Requests/min',
      value: '15.2K',
      change: '+8%',
      status: 'good',
      icon: <Activity className="w-5 h-5" />
    },
    {
      label: 'System Load',
      value: '68%',
      change: '+5%',
      status: 'warning',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      label: 'Error Rate',
      value: '0.02%',
      change: '-15%',
      status: 'good',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      label: 'Database Size',
      value: '2.8 TB',
      change: '+3%',
      status: 'good',
      icon: <Database className="w-5 h-5" />
    },
    {
      label: 'Uptime',
      value: '99.98%',
      change: '0%',
      status: 'good',
      icon: <Server className="w-5 h-5" />
    }
  ];

  const recentActivities = [
    { id: 1, user: 'john@example.com', action: 'Created new Knowledge AI session', time: '2 minutes ago', type: 'info' },
    { id: 2, user: 'sarah@example.com', action: 'Updated Health AI model', time: '5 minutes ago', type: 'success' },
    { id: 3, user: 'system', action: 'Automated backup completed', time: '10 minutes ago', type: 'success' },
    { id: 4, user: 'mike@example.com', action: 'Failed authentication attempt', time: '15 minutes ago', type: 'warning' },
    { id: 5, user: 'admin', action: 'System maintenance scheduled', time: '30 minutes ago', type: 'info' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <Card className="max-w-md w-full bg-slate-800/50 border-slate-700 text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400 mb-4">
              You need administrator privileges to access this dashboard.
            </p>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-400">System monitoring and management</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600 text-white w-64"
              />
            </div>
            <Button
              onClick={() => addNotification({
                type: 'info',
                title: 'System Refresh',
                message: 'Dashboard data refreshed successfully'
              })}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            >
              Refresh Data
            </Button>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemMetrics.map((metric, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                    metric.status === 'good' ? 'from-green-500 to-emerald-600' :
                    metric.status === 'warning' ? 'from-yellow-500 to-orange-600' :
                    'from-red-500 to-pink-600'
                  } flex items-center justify-center`}>
                    {metric.icon}
                  </div>
                  <Badge 
                    className={`${
                      metric.status === 'good' ? 'bg-green-500/20 text-green-400' :
                      metric.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-300 text-sm">{activity.action}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-slate-500 text-xs">by {activity.user}</p>
                          <p className="text-slate-500 text-xs">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start bg-slate-700/50 hover:bg-slate-600/50 text-slate-300"
                  onClick={() => addNotification({
                    type: 'info',
                    title: 'System Maintenance',
                    message: 'Maintenance mode activated'
                  })}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  System Maintenance
                </Button>
                
                <Button 
                  className="w-full justify-start bg-slate-700/50 hover:bg-slate-600/50 text-slate-300"
                  onClick={() => addNotification({
                    type: 'success',
                    title: 'Backup Created',
                    message: 'System backup completed successfully'
                  })}
                >
                  <Database className="w-4 h-4 mr-2" />
                  Create Backup
                </Button>
                
                <Button 
                  className="w-full justify-start bg-slate-700/50 hover:bg-slate-600/50 text-slate-300"
                  onClick={() => addNotification({
                    type: 'info',
                    title: 'User Management',
                    message: 'User management panel opened'
                  })}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                
                <Button 
                  className="w-full justify-start bg-slate-700/50 hover:bg-slate-600/50 text-slate-300"
                  onClick={() => addNotification({
                    type: 'info',
                    title: 'Analytics',
                    message: 'System analytics dashboard opened'
                  })}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Health Overview */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                System Health Overview
              </div>
              <Badge className="bg-green-500/20 text-green-400">
                All Systems Operational
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">API Services</p>
                <p className="text-green-400 text-sm">Operational</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">Database</p>
                <p className="text-green-400 text-sm">Operational</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">Servers</p>
                <p className="text-yellow-400 text-sm">High Load</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">Security</p>
                <p className="text-green-400 text-sm">Secure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
