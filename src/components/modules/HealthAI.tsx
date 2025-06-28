
import { useState } from 'react';
import { Heart, Upload, FileImage, Activity, User, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HealthAI = () => {
  const [reports] = useState([
    {
      id: 1,
      patient: 'John Smith',
      type: 'X-Ray',
      date: '2024-01-15',
      status: 'analyzed',
      priority: 'normal',
      findings: 'No significant abnormalities detected',
      confidence: 94
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      type: 'Blood Test',
      date: '2024-01-14',
      status: 'pending',
      priority: 'high',
      findings: 'Elevated white blood cell count',
      confidence: 87
    },
    {
      id: 3,
      patient: 'Mike Davis',
      type: 'MRI',
      date: '2024-01-13',
      status: 'analyzed',
      priority: 'urgent',
      findings: 'Small lesion detected, requires follow-up',
      confidence: 91
    }
  ]);

  const [vitalSigns] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    temperature: 98.6,
    oxygenSat: 98,
    respiratoryRate: 16
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Health AI</h1>
              <p className="text-slate-400">Medical diagnosis and report analysis</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-slate-700">Dashboard</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-slate-700">Reports</TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-slate-700">Upload</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-700">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Active Cases</p>
                      <p className="text-2xl font-bold text-white">24</p>
                    </div>
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Pending Analysis</p>
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
                      <p className="text-slate-400 text-sm">Completed Today</p>
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
                      <p className="text-slate-400 text-sm">Accuracy Rate</p>
                      <p className="text-2xl font-bold text-white">94.2%</p>
                    </div>
                    <Activity className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vital Signs Monitor */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-red-400" />
                  Live Vital Signs Monitor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <p className="text-2xl font-bold text-red-400">{vitalSigns.heartRate}</p>
                    <p className="text-slate-400 text-sm">BPM</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-blue-400">{vitalSigns.bloodPressure}</p>
                    <p className="text-slate-400 text-sm">mmHg</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-2xl font-bold text-orange-400">{vitalSigns.temperature}°F</p>
                    <p className="text-slate-400 text-sm">Temp</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-2xl font-bold text-green-400">{vitalSigns.oxygenSat}%</p>
                    <p className="text-slate-400 text-sm">SpO2</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-purple-400">{vitalSigns.respiratoryRate}</p>
                    <p className="text-slate-400 text-sm">RR</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Medical Reports</CardTitle>
                <CardDescription>AI-analyzed medical reports and findings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FileImage className="w-5 h-5 text-blue-400" />
                          <div>
                            <h3 className="text-white font-medium">{report.patient}</h3>
                            <p className="text-slate-400 text-sm">{report.type} • {report.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={report.priority === 'urgent' ? 'destructive' : report.priority === 'high' ? 'default' : 'secondary'}>
                            {report.priority}
                          </Badge>
                          <Badge variant={report.status === 'analyzed' ? 'default' : 'secondary'}>
                            {report.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-3">{report.findings}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 text-sm">AI Confidence:</span>
                          <div className="w-24 h-2 bg-slate-600 rounded-full">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                              style={{ width: `${report.confidence}%` }}
                            />
                          </div>
                          <span className="text-green-400 text-sm font-medium">{report.confidence}%</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-slate-600">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload */}
          <TabsContent value="upload" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Upload Medical Reports</CardTitle>
                <CardDescription>Upload medical images, scans, and reports for AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-slate-500 transition-colors cursor-pointer">
                  <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Drop medical files here</h3>
                  <p className="text-slate-400 mb-4">
                    Supports X-rays, MRI, CT scans, blood tests, and medical reports
                  </p>
                  <p className="text-slate-500 text-sm mb-6">
                    DICOM, JPG, PNG, PDF formats accepted • Max 50MB per file
                  </p>
                  <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                    Select Files
                  </Button>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <FileImage className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-white font-medium">Medical Imaging</h4>
                    <p className="text-slate-400 text-sm">X-rays, MRI, CT scans</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <Activity className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-white font-medium">Lab Reports</h4>
                    <p className="text-slate-400 text-sm">Blood tests, lab results</p>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                    <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <h4 className="text-white font-medium">ECG/EKG</h4>
                    <p className="text-slate-400 text-sm">Heart monitoring data</p>
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
                  <CardTitle className="text-white">Analysis Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">X-Ray Analysis</span>
                        <span className="text-green-400">96.2%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[96.2%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">Blood Test</span>
                        <span className="text-blue-400">94.8%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[94.8%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">MRI Scan</span>
                        <span className="text-purple-400">92.1%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[92.1%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Processing Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">847</div>
                      <div className="text-slate-400 text-sm">Reports Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">2.3s</div>
                      <div className="text-slate-400 text-sm">Avg Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">99.1%</div>
                      <div className="text-slate-400 text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-1">24/7</div>
                      <div className="text-slate-400 text-sm">Availability</div>
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

export default HealthAI;
