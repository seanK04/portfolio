import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";
import { getProjectDetail } from "../data/projectDetails/index.tsx";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top immediately when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-screen-lg mx-auto px-6 py-16">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Project not found
          </h1>
        </div>
      </div>
    );
  }

  // Render detailed content for specific projects
  const renderDetailedContent = () => {
    // Check if there's detailed content for this project
    const detailedContent = getProjectDetail(project.id);

    if (detailedContent) {
      return detailedContent;
    }

    // Default content for other projects
    return (
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">{project.description}</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md font-normal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.githubUrl && (
          <div className="mt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-screen-lg mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          {project.title}
        </h1>
        {renderDetailedContent()}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
