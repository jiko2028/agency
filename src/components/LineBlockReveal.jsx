import { useState, useLayoutEffect, useRef } from 'react';
import BlockReveal from './BlockReveal';

/**
 * LineBlockReveal Component — Automatically splits a text string into lines
 * based on the browser's wrapping, and reveals them line-by-line using BlockReveal.
 * Handles responsive screens perfectly with zero manual line splitting!
 */
export default function LineBlockReveal({
  text,
  as: Component = 'h2',
  className = '',
  blockColor = 'var(--accent)',
  delay = 0,
  style = {},
}) {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  const words = text.split(/\s+/);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || lines.length > 0) return;

    // Measure offsets to group words into lines
    const spans = container.querySelectorAll('.split-word-measure');
    const linesMap = {};

    spans.forEach((span, idx) => {
      const top = span.offsetTop;
      // Group words with close vertical offsets (within 8px tolerance)
      const matchedKey = Object.keys(linesMap).find(k => Math.abs(Number(k) - top) < 8);
      if (matchedKey) {
        linesMap[matchedKey].push(words[idx]);
      } else {
        linesMap[top] = [words[idx]];
      }
    });

    const groupedLines = Object.keys(linesMap)
      .sort((a, b) => Number(a) - Number(b))
      .map(key => linesMap[key].join(' '));

    setLines(groupedLines);
  }, [text, words, lines.length]);

  // Initial render: Render all words inline to measure their offsets
  if (lines.length === 0) {
    return (
      <Component ref={containerRef} className={className} style={{ opacity: 0, pointerEvents: 'none', ...style }}>
        {words.map((word, i) => (
          <span key={i} className="split-word-measure" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Component>
    );
  }

  // Secondary render: Render the grouped lines as separate BlockReveal components
  return (
    <div className={`line-block-reveal-wrap ${className}`}>
      {lines.map((lineText, idx) => (
        <BlockReveal
          key={idx}
          delay={delay + idx * 0.15}
          blockColor={blockColor}
          as="div"
          className="line-block-reveal__item"
        >
          <Component style={{ margin: 0, display: 'inline-block', width: '100%', ...style }}>{lineText}</Component>
        </BlockReveal>
      ))}
    </div>
  );
}
