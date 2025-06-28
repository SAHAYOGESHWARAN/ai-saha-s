
import { useState } from 'react';
import { Headphones, Phone, MessageSquare, Mic, MicOff, Volume2, VolumeX, User, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SupportAI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCall, setActiveCall] = useState(null);

  const [calls] = useState([
    {
      id: 1,
      caller: 'John Smith',
      number: '+1 (555) 123-4567',
      duration: '00:05:23',
      status: 'active',
      sentiment: 'positive',
      issue: 'Billing inquiry',
      aiSummary: 'Customer asking about recent charge on account'
    },
    {
      id: 2,
      caller: 'Sarah Johnson',
      number: '+1 (555) 987-6543',
      duration: '00:12:45',
      status: 'hold',
      sentiment: 'frustrated',
      issue: 'Technical support',
      aiSummary: 'Internet connection issues, troubleshooting required'
    },
    {
      id: 3,
      caller: 'Mike Davis',
      number: '+1 (555) 456-7890',
      duration: '00:02:15',
      status: 'completed',
      sentiment: 'satisfied',
      issue: 'Account update',
      aiSummary: 'Successfully updated contact information'
    }
  ]);

  const [liveTranscript] = useState([
    { speaker: 'Customer', text: 'Hi, I need help with my recent bill', timestamp: '00:01:23' },
    { speaker: 'AI Assistant', text: 'I\'d be happy to help you with your billing inquiry. Let me pull up your account.', timestamp: '00:01:28' },
    { speaker: 'Customer', text: 'I see a charge for $49.99 that I don\'t recognize', timestamp: '00:01:35' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Support AI</h1>
              <p className="text-slate-400">Real-time voice AI call center automation</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="live" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="live" className="data-[state=active]:bg-slate-700">Live Calls</TabsTrigger>
            <TabsTrigger value="queue" className="data-[state=active]:bg-slate-700">Call Queue</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-700">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-slate-700">Settings</TabsTrigger>
          </TabsList>

          {/* Live Calls */}
          <TabsContent value="live" className="space-y-6">
            {/* Call Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Active Calls</p>
                      <p className="text-2xl font-bold text-white">3</p>
                    </div>
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">In Queue</p>
                      <p className="text-2xl font-bold text-white">7</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Avg Wait Time</p>
                      <p className="text-2xl font-bold text-white">1:23</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Resolution Rate</p>
                      <p className="text-2xl font-bold text-white">94%</p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Live Call Control */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-400" />
                      Active Call - John Smith
                    </CardTitle>
                    <CardDescription>+1 (555) 123-4567 • Duration: 00:05:23</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Call Controls */}
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <Button
                        variant={isRecording ? "destructive" : "default"}
                        size="lg"
                        className="rounded-full w-16 h-16"
                        onClick={() => setIsRecording(!isRecording)}
                      >
                        {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                      </Button>
                      
                      <Button
                        variant={isMuted ? "destructive" : "default"}
                        size="lg"
                        className="rounded-full w-16 h-16"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                      </Button>

                      <Button
                        variant="destructive"
                        size="lg"
                        className="rounded-full w-16 h-16"
                      >
                        <Phone className="w-6 h-6 rotate-135" />
                      </Button>
                    </div>

                    {/* Live Transcript */}
                    <Card className="bg-slate-700/50 border-slate-600">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">Live Transcript</CardTitle>
                      </CardHeader>
                      <CardContent className="max-h-64 overflow-y-auto space-y-3">
                        {liveTranscript.map((entry, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Badge variant={entry.speaker === 'Customer' ? 'default' : 'secondary'} className="mt-1">
                              {entry.speaker}
                            </Badge>
                            <div className="flex-1">
                              <p className="text-slate-200 text-sm">{entry.text}</p>
                              <p className="text-slate-500 text-xs mt-1">{entry.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>

              {/* AI Insights */}
              <div>
                <Card className="bg-slate-800/50 border-slate-700 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">AI Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm">Sentiment</span>
                        <Badge className="bg-green-600">Positive</Badge>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[75%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm">Urgency</span>
                        <Badge variant="secondary">Low</Badge>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[30%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm">Confidence</span>
                        <Badge className="bg-purple-600">High</Badge>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[90%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Suggested Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600">
                      Transfer to Billing
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600">
                      Send Account Summary
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600">
                      Schedule Callback
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Call Queue */}
          <TabsContent value="queue" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Call Queue Management</CardTitle>
                <CardDescription>Manage incoming and active calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {calls.map((call) => (
                    <div key={call.id} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-blue-400" />
                          <div>
                            <h3 className="text-white font-medium">{call.caller}</h3>
                            <p className="text-slate-400 text-sm">{call.number}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={
                            call.status === 'active' ? 'default' :
                            call.status === 'hold' ? 'secondary' : 'outline'
                          }>
                            {call.status}
                          </Badge>
                          <Badge variant={
                            call.sentiment === 'positive' ? 'default' :
                            call.sentiment === 'frustrated' ? 'destructive' : 'secondary'
                          }>
                            {call.sentiment}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-slate-400 text-xs">Duration</p>
                          <p className="text-white text-sm">{call.duration}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">Issue Type</p>
                          <p className="text-white text-sm">{call.issue}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">AI Summary</p>
                          <p className="text-white text-sm">{call.aiSummary}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-slate-600">
                          Take Call
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600">
                          Transfer
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600">
                          Add Note
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Call Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">247</div>
                      <div className="text-slate-400">Calls Today</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-blue-400">198</div>
                        <div className="text-slate-400 text-sm">Resolved</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-yellow-400">35</div>
                        <div className="text-slate-400 text-sm">Escalated</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-red-400">14</div>
                        <div className="text-slate-400 text-sm">Dropped</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">First Call Resolution</span>
                        <span className="text-green-400">87%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[87%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Customer Satisfaction</span>
                        <span className="text-blue-400">4.6/5</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">AI Accuracy</span>
                        <span className="text-purple-400">94.2%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[94.2%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Voice AI Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm">Voice Model</label>
                    <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>GPT-4 Voice (Premium)</option>
                      <option>Standard Voice Model</option>
                      <option>Fast Response Model</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm">Response Speed</label>
                    <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>Ultra Fast (0.5s)</option>
                      <option>Fast (1s)</option>
                      <option>Balanced (2s)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm">Language</label>
                    <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Integration Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <div>
                      <p className="text-white">Twilio Integration</p>
                      <p className="text-slate-400 text-sm">Voice calls and SMS</p>
                    </div>
                    <Badge className="bg-green-600">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <div>
                      <p className="text-white">Whisper AI</p>
                      <p className="text-slate-400 text-sm">Speech-to-text</p>
                    </div>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <div>
                      <p className="text-white">CRM Integration</p>
                      <p className="text-slate-400 text-sm">Customer data sync</p>
                    </div>
                    <Badge variant="outline">Setup Required</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SupportAI;
