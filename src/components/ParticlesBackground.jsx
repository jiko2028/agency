import { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';
import './ParticlesBackground.css';

/**
 * Bulletproof background component.
 * Tries to render WebGL Fluid Simulation for a highly premium interactive experience.
 * Automatically falls back to high-performance 2D Canvas particles if WebGL is unsupported or fails,
 * preventing any runtime crashes (blank white screen).
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let isWebGLSupported = false;
    let cleanupFunction = null;

    // Check WebGL context support before initializing
    try {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        isWebGLSupported = true;
      }
    } catch (e) {
      isWebGLSupported = false;
    }

    if (isWebGLSupported) {
      try {
        // Try initializing the WebGL Fluid Simulation
        WebGLFluid(canvas, {
          TRIGGER: 'hover',
          IMMEDIATE: true,
          AUTO: false,
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 512,
          DISSIPATION: 0.97,
          VELOCITY_DISSIPATION: 0.98,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.3,
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 8,
          PAUSED: false,
          BACK_COLOR: { r: 250, g: 249, b: 246 }, // #FAF9F6 off-white
          TRANSPARENT: false,
          BLOOM: true,
          BLOOM_ITERATIONS: 6,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.4,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: false,
        });

        // Set up event mapping for click-through support
        const handleMouseMove = (e) => {
          const event = new MouseEvent('mousemove', {
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
            bubbles: true,
          });
          canvas.dispatchEvent(event);
        };

        const handleMouseDown = (e) => {
          const event = new MouseEvent('mousedown', {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: true,
          });
          canvas.dispatchEvent(event);
        };

        const handleMouseUp = () => {
          const event = new MouseEvent('mouseup', {
            bubbles: true,
          });
          canvas.dispatchEvent(event);
        };

        const handleTouchStart = (e) => {
          if (e.touches.length === 0) return;
          const event = new TouchEvent('touchstart', {
            targetTouches: Array.from(e.targetTouches),
            changedTouches: Array.from(e.changedTouches),
            touches: Array.from(e.touches),
            bubbles: true,
          });
          canvas.dispatchEvent(event);
        };

        const handleTouchMove = (e) => {
          if (e.touches.length === 0) return;
          const event = new TouchEvent('touchmove', {
            targetTouches: Array.from(e.targetTouches),
            changedTouches: Array.from(e.changedTouches),
            touches: Array.from(e.touches),
            bubbles: true,
          });
          canvas.dispatchEvent(event);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        cleanupFunction = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mousedown', handleMouseDown);
          window.removeEventListener('mouseup', handleMouseUp);
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchmove', handleTouchMove);
        };
      } catch (err) {
        console.warn("WebGL Fluid failed to initialize, switching to 2D fallback:", err);
        isWebGLSupported = false; // trigger fallback
      }
    }

    // 2D Canvas Fallback (Floating Spark Particles)
    if (!isWebGLSupported) {
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);

      const particleCount = Math.floor((width * height) / 18000);
      const particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
      }));

      const render = () => {
        // Clear with background color matching #FAF9F6
        ctx.fillStyle = '#FAF9F6';
        ctx.fillRect(0, 0, width, height);

        // Draw floating sparkles
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 85, 61, ${p.alpha})`; // rust red particles
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      cleanupFunction = () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => {
      if (cleanupFunction) cleanupFunction();
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-background" />;
}
