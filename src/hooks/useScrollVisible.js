import { useState, useEffect, useRef, useCallback } from 'react';

const useScrollVisible = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const { offsetTop, offsetHeight } = elementRef.current;
      const triggerPosition = offsetTop + offsetHeight * 0.8;
      setIsVisible(scrollPosition > triggerPosition);
    }
  }, []);

  useEffect(() => {
    const currentElement = document.getElementById(elementId);
    if (currentElement) {
      elementRef.current = currentElement;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId, handleScroll]);

  return isVisible;
};

export default useScrollVisible;
