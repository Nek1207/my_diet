import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.5) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [threshold]);

  return sectionRefs;
};