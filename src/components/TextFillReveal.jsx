import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TextFillReveal.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * TextFillReveal component - Fills text color from left to right on scroll or load.
 * @param {Object} props
 * @param {string} props.text - Text to display and animate
 * @param {string} [props.as='h2'] - HTML tag to render
 * @param {string} [props.className] - Additional CSS class
 * @param {boolean} [props.scrub=true] - Link animation directly to scroll scrub
 * @param {string} [props.baseColor] - Starting muted text color
 * @param {string} [props.activeColor] - Target highlight text color
 */
export default function TextFillReveal({
  text,
  as: Component = 'h2',
  className = '',
  scrub = true,
  baseColor,
  activeColor,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.fill-word-inner');
    const isDark = container.closest('.statement-section') || className.includes('dark');
    
    const startColor = baseColor || (isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.15)');
    const endColor = activeColor || (isDark ? '#FFFFFF' : '#111111');

    if (scrub) {
      gsap.fromTo(
        words,
        { color: startColor },
        {
          color: endColor,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        }
      );
    } else {
      gsap.fromTo(
        words,
        { color: startColor },
        {
          color: endColor,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [scrub, baseColor, activeColor, className]);

  // Split text into words for word-by-word fill
  const wordsArray = text.split(' ');

  return (
    <Component ref={containerRef} className={`text-fill-reveal ${className}`}>
      {wordsArray.map((word, index) => (
        <span key={index} className="fill-word">
          <span className="fill-word-inner">{word}</span>
          {index < wordsArray.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Component>
  );
}
