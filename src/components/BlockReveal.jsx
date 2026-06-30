import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlockReveal.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * BlockReveal Component — Wipes a solid accent block across text from left to right to reveal it.
 * Inspired by high-end editorial web design (e.g. Lando Norris / Off+Brand).
 * @param {Object} props
 * @param {React.ReactNode} props.children - Text or element inside
 * @param {string} [props.as='div'] - HTML wrapper tag
 * @param {string} [props.blockColor='var(--accent)'] - Color of the sliding block mask
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {number} [props.delay=0] - Delay before block wipe starts
 */
export default function BlockReveal({
  children,
  as: Component = 'div',
  blockColor = 'var(--accent)',
  className = '',
  delay = 0,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const block = container.querySelector('.block-reveal__curtain');
    const content = container.querySelector('.block-reveal__content');

    if (!block || !content) return;

    // Initial state
    gsap.set(content, { opacity: 0 });
    gsap.set(block, { scaleX: 0, transformOrigin: 'left center', backgroundColor: blockColor });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        once: true,
      },
    });

    tl.to(block, {
      scaleX: 1,
      duration: 0.45,
      delay,
      ease: 'power3.inOut',
    })
      .set(content, { opacity: 1 })
      .to(block, {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 0.45,
        ease: 'power3.inOut',
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [blockColor, delay]);

  return (
    <Component ref={containerRef} className={`block-reveal ${className}`}>
      <div className="block-reveal__curtain" />
      <div className="block-reveal__content">{children}</div>
    </Component>
  );
}
