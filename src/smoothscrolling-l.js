import { useEffect, useRef } from 'react';

export const useScrollAnimationL = (threshold = 0.8) => {
  const branchesRefs = useRef([]);

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

    const currentRefs = branchesRefs.current;
    currentRefs.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [threshold]);

  return branchesRefs;
};