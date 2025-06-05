import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    rootMargin = '0px'
  } = options;
  
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);
  
  return { ref, inView };
}

// Export as default as well for compatibility
export default useScrollAnimation; 