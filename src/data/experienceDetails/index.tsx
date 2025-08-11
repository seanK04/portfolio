import React from 'react';

export interface ExperienceDetail {
  id: string;
  content: React.ReactNode;
}

// Import experience content components
import PrincetonResearcherContent from './princeton-researcher';
import AWSInternContent from './aws-intern';

// Map of experience IDs to their detailed content components
const experienceDetailComponents: Record<string, React.ComponentType> = {
  'princeton-researcher': PrincetonResearcherContent,
  'aws-intern': AWSInternContent,
  // Add more experiences here as you create them
};

// Function to get detailed content for an experience
export const getExperienceDetail = (experienceId: string): React.ReactNode | null => {
  const Component = experienceDetailComponents[experienceId];
  return Component ? <Component /> : null;
};

// Export all available experience IDs
export const availableExperienceDetails = Object.keys(experienceDetailComponents);
