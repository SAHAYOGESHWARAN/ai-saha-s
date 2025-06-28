
import { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Users, Search, Filter, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InsightsAI = () => {
  const [query, setQuery] = useState('');
  const [insights] = useState([
    {
      id: 1,
      question: 'What are our top performing products this quarter?',
      answer: 'Enterprise Software leads with $2.4M revenue, followed by Cloud Services at $1.8M',
      confidence: 94,
      visualization: 'bar-chart'
    },
    {
      id: 2,
      question: 'How is customer retention trending?',
      answer: 'Customer retention improved by 12% this quarter, now at 87%',
      confidence: 91,
      visualization: 'line-chart'
    }
  ]);

  const [kpis] = useState([
    { name: 'Total Revenue', value: '$4.2M', change: '+18%', trend: 'up' },
    { name: 'Active Users', value: '12,847', change: '+5.2%', trend: 'up' },
    { name: 'Conversion Rate', value: '3.4%', change: '-0.3%', trend: 'down' },
    { name: 'Avg Order Value', value: '$327', change: '+12%', trend: 'up' }
  ]);

  const handleAskQuestion = () => {
    if (!query.trim()) return;
    console.log('Asking AI:', query);
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Insights AI</h1>
              <p className="text-slate-400">Natural language BI and live dashboards</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-slate-700">Dashboard</TabsTrigger>
            <TabsTrigger value="ask-ai" className="data-[state=active]:bg-slate-700">Ask AI</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-slate-700">Reports</TabsTrigger>
            <TabsTrigger value="predictions" className="data-[state=active]:bg-slate-700">Predictions</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-slate-400 text-sm">{kpi.name}</p>
                      <TrendingUp className={`w-4 h-4 ${kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-white">{kpi.value}</p>
                      <Badge variant={kpi.trend === 'up' ? 'default' : 'destructive'} className="text-xs">
                        {kpi.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                    Revenue Analytics
                  </CardTitle>
                  <CardDescription>Monthly revenue trend and projections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-700/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                      <p className="text-slate-400">Interactive chart would be rendered here</p>
                      <p className="text-slate-500 text-sm">Using Recharts or similar library</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-400">$4.2M</div>
                      <div className="text-slate-400 text-sm">This Month</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-400">$3.6M</div>
                      <div className="text-slate-400 text-sm">Last Month</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-400">+18%</div>
                      <div className="text-slate-400 text-sm">Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Analytics */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    User Analytics
                  </CardTitle>
                  <CardDescription>User engagement and retention metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-700/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                      <p className="text-slate-400">User engagement visualization</p>
                      <p className="text-slate-500 text-sm">Real-time user activity charts</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">Daily Active Users</span>
                      <span className="text-white font-medium">8,429</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">Session Duration</span>
                      <span className="text-white font-medium">12m 34s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-sm">Bounce Rate</span>
                      <span className="text-white font-medium">23.4%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Updates */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Real-time Business Insights</CardTitle>
                <CardDescription>Live updates from your business intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">New sale: Enterprise Software License - $12,500</p>
                      <p className="text-slate-400 text-xs">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">User engagement spike detected - 34% increase</p>
                      <p className="text-slate-400 text-xs">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Monthly revenue target 78% achieved</p>
                      <p className="text-slate-400 text-xs">12 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ask AI */}
          <TabsContent value="ask-ai" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Ask Your Data Anything</CardTitle>
                <CardDescription>Natural language queries powered by AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-6">
                  <Input
                    placeholder="Ask about sales, users, revenue, trends..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Button onClick={handleAskQuestion} className="bg-gradient-to-r from-blue-600 to-cyan-600">
                    <Search className="w-4 h-4 mr-2" />
                    Ask
                  </Button>
                </div>

                {/* Example Questions */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-sm">Sales Questions</h3>
                    <div className="space-y-1">
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        What are our top performing products?
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        Show me sales by region
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        What's our conversion funnel?
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-medium text-sm">User Questions</h3>
                    <div className="space-y-1">
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        How is user retention trending?
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        Which features are most used?
                      </Button>
                      <Button variant="outline" size="sm" className="w-full text-left justify-start border-slate-600 text-slate-300">
                        Show user demographics
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Previous Insights */}
                <div className="space-y-4">
                  <h3 className="text-white font-medium">Recent Insights</h3>
                  {insights.map((insight) => (
                    <Card key={insight.id} className="bg-slate-700/50 border-slate-600">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-white font-medium text-sm">{insight.question}</h4>
                          <Badge className="bg-purple-600 text-xs">
                            {insight.confidence}% confident
                          </Badge>
                        </div>
                        <p className="text-slate-200 mb-3">{insight.answer}</p>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="border-slate-600">
                            <BarChart3 className="w-4 h-4 mr-1" />
                            View Chart
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600">
                            <Download className="w-4 h-4 mr-1" />
                            Export
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Automated Reports</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-slate-600">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="border-slate-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Sales Report</CardTitle>
                  <CardDescription>Generated automatically every Monday</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">This Week</p>
                      <p className="text-2xl font-bold text-green-400">$847K</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">vs Last Week</p>
                      <p className="text-xl font-bold text-blue-400">+23%</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600">
                    View Full Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Monthly User Analytics</CardTitle>
                  <CardDescription>Comprehensive user behavior analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">Active Users</p>
                      <p className="text-2xl font-bold text-blue-400">12.8K</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Retention</p>
                      <p className="text-xl font-bold text-purple-400">87%</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600">
                    View Full Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Predictions */}
          <TabsContent value="predictions" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">AI Predictions</CardTitle>
                <CardDescription>Machine learning powered business forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Revenue Forecast</h3>
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">Next Month</span>
                        <span className="text-green-400 font-bold">$4.8M</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[82%] h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">82% confidence • +14% growth</p>
                    </div>
                    
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">Next Quarter</span>
                        <span className="text-blue-400 font-bold">$14.2M</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">75% confidence • +18% growth</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-medium">User Growth</h3>
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">New Users (30d)</span>
                        <span className="text-purple-400 font-bold">2,847</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[88%] h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">88% confidence • +22% growth</p>
                    </div>
                    
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">Churn Risk</span>
                        <span className="text-yellow-400 font-bold">4.2%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-600 rounded-full">
                        <div className="w-[91%] h-full bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"></div>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">91% confidence • -1.3% vs last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InsightsAI;
