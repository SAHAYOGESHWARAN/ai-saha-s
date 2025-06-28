import { Bell } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const demoNotifications = [
  { id: 1, title: 'AI Analysis Complete', message: 'Your uploaded document has been processed.' },
  { id: 2, title: 'New Feature', message: 'Try the new Insights AI dashboard!' },
  { id: 3, title: 'Profile Updated', message: 'Your profile information was saved.' },
];

export const NotificationsCenter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Button variant="ghost" size="icon" aria-label="Notifications" onClick={() => setOpen(!open)}>
        <Bell className="w-5 h-5" />
      </Button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 z-50">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {demoNotifications.map(n => (
                  <li key={n.id} className="border-b last:border-b-0 pb-2">
                    <div className="font-semibold">{n.title}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-300">{n.message}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
