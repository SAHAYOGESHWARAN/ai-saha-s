import { useContext } from 'react';
import AIModuleContext from './AIModulesContext';

export const useAIModules = () => {
  const ctx = useContext(AIModuleContext);
  if (!ctx) throw new Error('useAIModules must be used within AIModuleProvider');
  return ctx;
};
