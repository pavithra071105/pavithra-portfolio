import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -75% 0px',
      threshold: 0.2
    };

    const observers = [];
    const elements = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        }, observerOptions);

        observer.observe(element);
        observers.push(observer);
        elements.push(element);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        observer.unobserve(elements[index]);
      });
    };
  }, [sectionIds]);

  return activeSection;
};