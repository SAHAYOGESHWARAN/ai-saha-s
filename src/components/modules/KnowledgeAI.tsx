
import { useState } from 'react';
import { Upload, FileText, Search, Brain, MessageSquare, Plus, File, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const KnowledgeAI = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Company Policy 2024.pdf', size: '2.4 MB', uploaded: '2 hours ago', type: 'pdf' },
    { id: 2, name: 'Employee Handbook.docx', size: '1.8 MB', uploaded: '1 day ago', type: 'docx' },
    { id: 3, name: 'Technical Documentation.md', size: '854 KB', uploaded: '3 days ago', type: 'md' }
  ]);
  
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'ai', message: 'Hello! I can help you find information from your uploaded documents. What would you like to know?' },
    { id: 2, type: 'user', message: 'What is the remote work policy?' },
    { id: 3, type: 'ai', message: 'Based on your Company Policy 2024.pdf, employees are allowed to work remotely up to 3 days per week with manager approval. Full remote work requires special circumstances and HR approval.' }
  ]);

  const [query, setQuery] = useState('');

  const handleSendMessage = () => {
    if (!query.trim()) return;
    
    setChatMessages([...chatMessages, 
      { id: chatMessages.length + 1, type: 'user', message: query },
      { id: chatMessages.length + 2, type: 'ai', message: 'I\'m processing your question and searching through your documents...' }
    ]);
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Knowledge AI</h1>
              <p className="text-slate-400">Intelligent document search and Q&A</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Document Library */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 h-fit">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Document Library
                </CardTitle>
                <CardDescription>Upload and manage your knowledge base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload Zone */}
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-300 text-sm">Drop files here or click to upload</p>
                  <p className="text-slate-500 text-xs mt-1">PDF, DOCX, TXT, MD supported</p>
                </div>

                {/* Document List */}
                <div className="space-y-2">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                      <File className="w-4 h-4 text-blue-400" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{doc.name}</p>
                        <p className="text-slate-400 text-xs">{doc.size} • {doc.uploaded}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Documents
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-800/50 border-slate-700 mt-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-xs text-slate-400">Documents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-400">5.1MB</div>
                    <div className="text-xs text-slate-400">Total Size</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  AI Assistant
                </CardTitle>
                <CardDescription>Ask questions about your documents</CardDescription>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                        : 'bg-slate-700 text-slate-100'
                    }`}>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask anything about your documents..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                  <Button onClick={handleSendMessage} className="bg-gradient-to-r from-purple-600 to-indigo-600">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Smart Embeddings</h3>
              <p className="text-slate-400 text-sm">AI-powered document understanding with vector embeddings</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Semantic Search</h3>
              <p className="text-slate-400 text-sm">Find relevant information even with different wording</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Multi-Format</h3>
              <p className="text-slate-400 text-sm">Support for PDF, DOCX, TXT, MD, and more formats</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeAI;
