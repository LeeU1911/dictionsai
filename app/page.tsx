// app/pages/index.tsx

import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Accelerate your English learning.
      </h1>
      <p className="text-xl text-gray-800 mb-8">
        From months to hours.
      </p>
      <p className="text-lg text-gray-600 mb-12">
        Start your language journey with dictionsai - the personalized language learning experience.
      </p>
      {/* Add more sections, features, or CTAs as needed */}
    </div>
  );
};

export default LandingPage;

