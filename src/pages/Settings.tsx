
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Palette, 
  Shield, 
  Mic, 
  Save,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { user, updateUser } = useUser();
  const { addNotification } = useNotifications();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    notifications: user?.preferences.notifications ?? true,
    voiceCommands: user?.preferences.voiceCommands ?? true,
  });

  const handleSave = () => {
    if (user) {
      updateUser({
        name: formData.name,
        email: formData.email,
        preferences: {
          ...user.preferences,
          notifications: formData.notifications,
          voiceCommands: formData.voiceCommands,
          theme: theme,
        }
      });

      addNotification({
        type: 'success',
        title: 'Settings Saved',
        message: 'Your preferences have been updated successfully.'
      });
    }
  };

  const getThemeIcon = (themeValue: string) => {
    switch (themeValue) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <SettingsIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
            Settings & Profile
          </h1>
          <p className="text-slate-400">Customize your Infinetix experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
                <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-cyan-500">
                  {user?.role}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-900/50 border-slate-600 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-900/50 border-slate-600 text-white"
                />
              </div>

              <Separator className="bg-slate-700" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-slate-300">Role</Label>
                  <p className="text-sm text-slate-400">Your current access level</p>
                </div>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  {user?.role || 'user'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label className="text-slate-300">Theme</Label>
                <Select value={theme} onValueChange={(value: 'light' | 'dark' | 'system') => setTheme(value)}>
                  <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                    <SelectValue placeholder="Select theme">
                      <div className="flex items-center">
                        {getThemeIcon(theme)}
                        <span className="ml-2 capitalize">{theme}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="light" className="text-white">
                      <div className="flex items-center">
                        <Sun className="w-4 h-4 mr-2" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark" className="text-white">
                      <div className="flex items-center">
                        <Moon className="w-4 h-4 mr-2" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system" className="text-white">
                      <div className="flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        System
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-500">
                  Choose your preferred color scheme
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-slate-300">Push Notifications</Label>
                  <p className="text-sm text-slate-400">Receive notifications for important updates</p>
                </div>
                <Switch
                  checked={formData.notifications}
                  onCheckedChange={(checked) => setFormData({ ...formData, notifications: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Voice Commands */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mic className="w-5 h-5 mr-2" />
                Voice Commands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-slate-300">Enable Voice Commands</Label>
                  <p className="text-sm text-slate-400">Control the app using voice commands</p>
                </div>
                <Switch
                  checked={formData.voiceCommands}
                  onCheckedChange={(checked) => setFormData({ ...formData, voiceCommands: checked })}
                />
              </div>
              
              {formData.voiceCommands && (
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                  <p className="text-slate-300 text-sm mb-2">
                    <strong>Available Commands:</strong>
                  </p>
                  <ul className="text-slate-400 text-xs space-y-1">
                    <li>• "Open [module name]" - Navigate to AI modules</li>
                    <li>• "Go to settings" - Open settings page</li>
                    <li>• "Show notifications" - Display notification center</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-3"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>

        {/* Security Info */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-slate-400">
              <p>
                Your data is encrypted and stored securely. Infinetix follows enterprise-grade security standards to protect your information.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-green-500/50 text-green-400">
                  <Shield className="w-3 h-3 mr-1" />
                  SSL Encrypted
                </Badge>
                <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                  GDPR Compliant
                </Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                  SOC 2 Certified
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
