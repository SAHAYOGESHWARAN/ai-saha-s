
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Something went wrong</CardTitle>
                  <p className="text-slate-400 text-sm">An unexpected error occurred in the application</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {this.state.error && (
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="text-red-400 font-medium mb-2">Error Details:</h3>
                  <p className="text-slate-300 text-sm font-mono">{this.state.error.message}</p>
                </div>
              )}
              
              <div className="flex space-x-4">
                <Button 
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Reload Page
                </Button>
              </div>

              <div className="text-xs text-slate-500">
                <p>If this problem persists, please contact support with the error details above.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
