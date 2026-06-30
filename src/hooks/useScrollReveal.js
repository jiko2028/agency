import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered reveal animations.
 * Supports fade, translateY, and stagger.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    start = 'top 85%',
    ease = 'power3.out',
    once = true,
  } = options;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !ref.current) return;

    const element = ref.current;
    const children = element.querySelectorAll('[data-reveal]');
    const targets = children.length > 0 ? children : element;

    gsap.set(targets, { y, opacity });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start,
      onEnter: () => {
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease,
        });
      },
      once,
    });

    return () => {
      trigger.kill();
    };
  }, [y, opacity, duration, delay, stagger, start, ease, once]);

  return ref;
}
