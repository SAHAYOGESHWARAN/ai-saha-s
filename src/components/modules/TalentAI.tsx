import { useState } from 'react';
import { Users, Upload, User, Code, Video, FileText, CheckCircle, Clock, AlertTriangle, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TalentAI = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Developer',
      email: 'sarah.j@email.com',
      score: 94,
      skills: ['React', 'TypeScript', 'Node.js', 'Python'],
      status: 'interview',
      avatar: '/placeholder.svg',
      experience: '5 years',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Mike Chen',
      position: 'Product Manager',
      email: 'mike.c@email.com',
      score: 87,
      skills: ['Product Strategy', 'Analytics', 'Agile', 'Leadership'],
      status: 'screening',
      avatar: '/placeholder.svg',
      experience: '8 years',
      location: 'New York, NY'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      email: 'emily.r@email.com',
      score: 91,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      status: 'hired',
      avatar: '/placeholder.svg',
      experience: '4 years',
      location: 'Austin, TX'
    }
  ]);

  const [activeInterview, setActiveInterview] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Talent AI</h1>
              <p className="text-slate-400">AI-powered hiring and assessments</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="candidates" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="candidates" className="data-[state=active]:bg-slate-700">Candidates</TabsTrigger>
            <TabsTrigger value="interviews" className="data-[state=active]:bg-slate-700">Interviews</TabsTrigger>
            <TabsTrigger value="assessments" className="data-[state=active]:bg-slate-700">Assessments</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-700">Analytics</TabsTrigger>
          </TabsList>

          {/* Candidates */}
          <TabsContent value="candidates" className="space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Active Applications</p>
                      <p className="text-2xl font-bold text-white">247</p>
                    </div>
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">In Process</p>
                      <p className="text-2xl font-bold text-white">34</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Hired This Month</p>
                      <p className="text-2xl font-bold text-white">12</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Match Rate</p>
                      <p className="text-2xl font-bold text-white">87%</p>
                    </div>
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upload Resume Section */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Upload & Analyze Resumes</CardTitle>
                <CardDescription>AI-powered resume parsing and candidate matching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-slate-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Drop resumes here</h3>
                  <p className="text-slate-400 mb-4">
                    AI will automatically parse, score, and match candidates to open positions
                  </p>
                  <p className="text-slate-500 text-sm mb-6">
                    Supports PDF, DOCX, TXT formats • Bulk upload available
                  </p>
                  <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Select Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Candidate List */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Top Candidates</CardTitle>
                <CardDescription>AI-ranked candidates based on job requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidates.map((candidate) => (
                    <div key={candidate.id} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={candidate.avatar} />
                            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-white font-bold">{candidate.name}</h3>
                            <p className="text-slate-400 text-sm">{candidate.position}</p>
                            <p className="text-slate-500 text-xs">{candidate.location} • {candidate.experience}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant={
                              candidate.status === 'hired' ? 'default' :
                              candidate.status === 'interview' ? 'secondary' : 'outline'
                            }>
                              {candidate.status}
                            </Badge>
                            <div className="text-right">
                              <div className="text-lg font-bold text-orange-400">{candidate.score}%</div>
                              <div className="text-slate-400 text-xs">Match</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-slate-400 text-xs mb-2">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-slate-600">
                          <User className="w-4 h-4 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600">
                          <Video className="w-4 h-4 mr-1" />
                          Schedule Interview
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600">
                          <Code className="w-4 h-4 mr-1" />
                          Code Test
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interviews */}
          <TabsContent value="interviews" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Live Interview */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Video className="w-5 h-5 mr-2 text-orange-400" />
                      Live Interview - Sarah Johnson
                    </CardTitle>
                    <CardDescription>Senior Developer Position • 15:23 elapsed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Video Interface */}
                    <div className="bg-slate-700/50 rounded-lg h-64 flex items-center justify-center mb-6">
                      <div className="text-center">
                        <Video className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                        <p className="text-slate-400">Video interview in progress</p>
                        <p className="text-slate-500 text-sm">WebRTC face tracking active</p>
                      </div>
                    </div>

                    {/* Interview Controls */}
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <Button variant="outline" size="lg" className="rounded-full border-slate-600">
                        <Video className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full border-slate-600">
                        <Mic className="w-5 h-5" />
                      </Button>
                      <Button variant="destructive" size="lg" className="rounded-full">
                        End Interview
                      </Button>
                    </div>

                    {/* AI Questions */}
                    <Card className="bg-slate-700/50 border-slate-600">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">AI Interview Questions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="p-2 bg-slate-600/50 rounded text-slate-200 text-sm">
                          "Can you explain the difference between React hooks and class components?"
                        </div>
                        <div className="p-2 bg-slate-600/50 rounded text-slate-200 text-sm">
                          "How would you optimize a React application for performance?"
                        </div>
                        <div className="p-2 bg-slate-600/30 rounded text-slate-300 text-sm border-l-2 border-orange-400">
                          Next: "Describe your experience with state management libraries"
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>

              {/* Interview Analytics */}
              <div>
                <Card className="bg-slate-800/50 border-slate-700 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Live Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">Confidence Level</span>
                        <span className="text-green-400">High</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[85%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">Communication</span>
                        <span className="text-blue-400">Excellent</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">Technical Skills</span>
                        <span className="text-purple-400">Strong</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[88%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">AI Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-slate-300 text-sm p-2 bg-slate-700/50 rounded">
                      ✓ Strong React knowledge demonstrated
                    </div>
                    <div className="text-slate-300 text-sm p-2 bg-slate-700/50 rounded">
                      ✓ Good problem-solving approach
                    </div>
                    <div className="text-slate-300 text-sm p-2 bg-slate-700/50 rounded">
                      • Needs clarification on backend experience
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Assessments */}
          <TabsContent value="assessments" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Code Assessment Platform</CardTitle>
                <CardDescription>Live coding tests with AI evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Code Editor */}
                  <div>
                    <h3 className="text-white font-medium mb-4">Live Code Test</h3>
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 h-64 overflow-hidden">
                      <div className="text-green-400 text-sm font-mono">
                        <div className="text-slate-400">// Candidate: Sarah Johnson</div>
                        <div className="text-slate-400">// Problem: Two Sum Algorithm</div>
                        <div className="mt-2">
                          <span className="text-purple-400">function</span> <span className="text-yellow-400">twoSum</span>(nums, target) {`{`}
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-400">const</span> map = <span className="text-purple-400">new</span> <span className="text-yellow-400">Map</span>();
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = <span className="text-blue-400">0</span>; i &lt; nums.length; i++) {`{`}
                        </div>
                        <div className="ml-8">
                          <span className="text-purple-400">const</span> complement = target - nums[i];
                        </div>
                        <div className="animate-pulse">|</div>
                      </div>
                    </div>
                  </div>

                  {/* Test Results */}
                  <div>
                    <h3 className="text-white font-medium mb-4">Real-time Evaluation</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Code Quality</span>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                          <div className="w-[87%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Algorithm Efficiency</span>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                          <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-sm">Test Cases Passed</span>
                          <span className="text-green-400 text-sm">8/10</span>
                        </div>
                        <div className="w-full h-2 bg-slate-600 rounded-full">
                          <div className="w-[80%] h-full bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"></div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <h4 className="text-white font-medium text-sm mb-2">AI Feedback</h4>
                        <p className="text-slate-300 text-sm">
                          "Good approach with hash map optimization. Consider edge cases for empty arrays."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Hiring Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Applications</span>
                      <span className="text-white font-bold">247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Screened</span>
                      <span className="text-white font-bold">89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Interviewed</span>
                      <span className="text-white font-bold">34</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Offers Made</span>
                      <span className="text-white font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Hired</span>
                      <span className="text-green-400 font-bold">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">AI Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Resume Parsing</span>
                        <span className="text-green-400">98.7%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[98.7%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Match Accuracy</span>
                        <span className="text-blue-400">87.3%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[87.3%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Interview Success Rate</span>
                        <span className="text-purple-400">76.2%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[76.2%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
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

export default TalentAI;
