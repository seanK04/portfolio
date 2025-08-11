import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-screen-lg mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-semibold text-gray-900">Sean Kim</h1>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              Sc.B. Computer Science + A.B. Mathematics | Brown University '27
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-normal">Phone:</span>
              <a href="tel:+12014147999" className="text-gray-800 hover:text-blue-600 transition-colors">
                +1 (201)-414-7999
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-normal">Email:</span>
              <a href="mailto:seanskim04@gmail.com" className="text-gray-800 hover:text-blue-600 transition-colors">
                seanskim04@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-normal">LinkedIn:</span>
              <a 
                href="https://linkedin.com/in/sk40" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                linkedin.com/in/sk40
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-normal">GitHub:</span>
              <a 
                href="https://github.com/seanK04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                github.com/seanK04
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
