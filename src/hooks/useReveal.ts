import { useEffect, useRef, useState } from "react";

/**
 * Whether an element has entered the window once, to fade it in as the page
 * scrolls. Without IntersectionObserver the element shows right away.
 */
export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Any pixel is enough: a tall block (an experience on a phone) peeking under
      // the browser bars would otherwise stay invisible, leaving a gap until a scroll
      { threshold: 0 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
};
