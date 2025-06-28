import { useUser } from '@/context/useUser';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Profile = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSave = () => {
    setUser({ name, email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile & Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="profile-name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Name</label>
              <Input
                id="profile-name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Name"
              />
            </div>
            <div>
              <label htmlFor="profile-email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email</label>
              <Input
                id="profile-email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email"
              />
            </div>
            <Button className="w-full" onClick={handleSave} aria-label="Save profile">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
