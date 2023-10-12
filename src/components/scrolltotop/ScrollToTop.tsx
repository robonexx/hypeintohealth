
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md opacity-80 hover:opacity-100"
          onClick={scrollToTop}
        >
          Scroll To Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;