import React from 'react';
import {useTranslations} from 'next-intl';

const LandingPage: React.FC = () => {
  const t = useTranslations('Index')
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        {t('greeting')}
      </h1>
      <p className="text-xl text-gray-800 mb-8">
        {t('subtext')}
      </p>
      <p className="text-lg text-gray-600 mb-12">
        <strong>dictionsai</strong> {t('startJourney')}
      </p>
    </div>
  );
};

export default LandingPage;

