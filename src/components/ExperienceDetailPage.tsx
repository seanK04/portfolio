import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { experiences } from "../data/portfolioData";
import { getExperienceDetail } from "../data/experienceDetails/index.tsx";

const ExperienceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experiences.find((e) => e.id === id);

  // Scroll to top immediately when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!experience) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-screen-lg mx-auto px-6 py-16">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Experience not found
          </h1>
        </div>
      </div>
    );
  }

  // Render detailed content for specific experiences
  const renderDetailedContent = () => {
    // Check if there's detailed content for this experience
    const detailedContent = getExperienceDetail(experience.id);

    if (detailedContent) {
      return detailedContent;
    }

    // Default content for experiences without detailed content
    return (
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">
          {experience.description}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-screen-lg mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          {experience.title}
        </h1>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">{experience.company}</p>
          <p className="text-gray-500">{experience.dates}</p>
        </div>
        {renderDetailedContent()}
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
