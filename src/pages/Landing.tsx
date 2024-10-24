import React, { useState, useEffect } from 'react';
import LandingComponent from '@/components/LandingComponent';

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <LandingComponent />
      )}
    </>
  );
};

export default LandingPage;
