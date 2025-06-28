import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { NotificationProvider } from './contexts/NotificationContext';
import EnhancedLoader from './components/EnhancedLoader';

// Import new pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotificationCenter from './pages/NotificationCenter';
import Support from './pages/Support';

// Existing pages
import Index from "./pages/Index";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Lazy load components for better performance
const LazyKnowledgeAI = lazy(() => import('./components/modules/KnowledgeAI'));
const LazyHealthAI = lazy(() => import('./components/modules/HealthAI'));
const LazySupportAI = lazy(() => import('./components/modules/SupportAI'));
const LazyInsightsAI = lazy(() => import('./components/modules/InsightsAI'));
const LazyTalentAI = lazy(() => import('./components/modules/TalentAI'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <NotificationProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/index" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/notifications" element={<NotificationCenter />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  
                  {/* Lazy-loaded AI Module Routes */}
                  <Route 
                    path="/knowledge" 
                    element={
                      <Suspense fallback={<EnhancedLoader variant="advanced" message="Loading Knowledge AI Module..." />}>
                        <LazyKnowledgeAI />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/health" 
                    element={
                      <Suspense fallback={<EnhancedLoader variant="advanced" message="Loading Health AI Module..." />}>
                        <LazyHealthAI />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/support-ai" 
                    element={
                      <Suspense fallback={<EnhancedLoader variant="advanced" message="Loading Support AI Module..." />}>
                        <LazySupportAI />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/insights" 
                    element={
                      <Suspense fallback={<EnhancedLoader variant="advanced" message="Loading Insights AI Module..." />}>
                        <LazyInsightsAI />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/talent" 
                    element={
                      <Suspense fallback={<EnhancedLoader variant="advanced" message="Loading Talent AI Module..." />}>
                        <LazyTalentAI />
                      </Suspense>
                    } 
                  />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </NotificationProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
