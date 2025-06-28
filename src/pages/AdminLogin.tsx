import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const ADMIN_CREDENTIALS = { username: 'admin', password: 'infinetix2025' };

const AdminLogin: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (
        form.username === ADMIN_CREDENTIALS.username &&
        form.password === ADMIN_CREDENTIALS.password
      ) {
        setError('');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials.');
      }
      setLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Card className="w-full max-w-md shadow-2xl border-slate-700 bg-slate-800/80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Lock className="w-6 h-6 text-purple-400" /> Admin Login
            <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-cyan-500">Secure</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-slate-300 mb-1">Username</label>
              <Input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                className="bg-slate-900/50 border-slate-600 text-white"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-slate-300 mb-1">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="bg-slate-900/50 border-slate-600 text-white"
                required
                disabled={loading}
              />
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
