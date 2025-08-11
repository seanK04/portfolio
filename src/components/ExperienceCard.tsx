import React from 'react';
import { Link } from 'react-router-dom';
import { Experience } from '../data/portfolioData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Link to={`/experience/${experience.id}`} className="block no-underline">
      <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 hover:shadow-md hover:bg-gray-50 transition-all duration-200">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 visited:text-gray-900 transition-colors cursor-pointer">
              {experience.title}
            </h3>
            <p className="text-lg text-gray-500 font-normal mt-1">
              {experience.company}
            </p>
          </div>
          <span className="text-gray-500 font-normal mt-2 md:mt-0 text-sm">
            {experience.dates}
          </span>
        </div>

        <p className="text-gray-800 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
