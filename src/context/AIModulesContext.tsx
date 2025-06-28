import React, { createContext, useContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface AIModule {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
}

interface AIModuleContextType {
  modules: AIModule[];
  addModule: (module: Omit<AIModule, 'id'>) => void;
  updateModule: (module: AIModule) => void;
  deleteModule: (id: string) => void;
}

const AIModuleContext = createContext<AIModuleContextType | undefined>(undefined);

const initialModules: AIModule[] = [
  { id: uuidv4(), name: 'Knowledge AI', description: 'Document Q&A and RAG', status: 'active' },
  { id: uuidv4(), name: 'Health AI', description: 'Medical diagnostics', status: 'active' },
  { id: uuidv4(), name: 'Support AI', description: 'Voice-to-text, chatbot', status: 'inactive' },
];

export const AIModuleProvider = ({ children }: { children: ReactNode }) => {
  const [modules, setModules] = useState<AIModule[]>(initialModules);

  const addModule = (module: Omit<AIModule, 'id'>) => {
    setModules(prev => [...prev, { ...module, id: uuidv4() }]);
  };
  const updateModule = (module: AIModule) => {
    setModules(prev => prev.map(m => (m.id === module.id ? module : m)));
  };
  const deleteModule = (id: string) => {
    setModules(prev => prev.filter(m => m.id !== id));
  };

  return (
    <AIModuleContext.Provider value={{ modules, addModule, updateModule, deleteModule }}>
      {children}
    </AIModuleContext.Provider>
  );
};

export const useAIModules = () => {
  const ctx = useContext(AIModuleContext);
  if (!ctx) throw new Error('useAIModules must be used within AIModuleProvider');
  return ctx;
};

export default AIModuleContext;
