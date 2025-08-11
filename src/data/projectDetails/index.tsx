import React from 'react';
import TransformerRudderContent from './transformer-rudder';
import FiViContent from './fivi';
import HybridCNNContent from './eeg-diagnosis';
import PINNContent from './pinn';

export interface ProjectDetail {
  id: string;
  content: React.ReactNode;
}

// Map of project IDs to their detailed content components
const projectDetailComponents: Record<string, React.ComponentType> = {
  'transformer-rudder': TransformerRudderContent,
  'fivi': FiViContent,
  'eeg-diagnosis': HybridCNNContent,
  'physics-pinn': PINNContent,
  // Add more projects here as you create them:
};

// Function to get detailed content for a project
export const getProjectDetail = (projectId: string): React.ReactNode | null => {
  const Component = projectDetailComponents[projectId];
  return Component ? <Component /> : null;
};

// Export all available project IDs
export const availableProjectDetails = Object.keys(projectDetailComponents);
