// useScrollAnimation.js - исправленный для animate-to-scroll
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Добавляем класс visible, убираем hidden (если есть)
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
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