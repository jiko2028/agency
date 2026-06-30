import FastMarqueeModule from 'react-fast-marquee';
import './Marquee.css';

const FastMarquee = FastMarqueeModule.default || FastMarqueeModule;

/**
 * Infinite horizontal marquee powered by react-fast-marquee.
 * @param {Object} props
 * @param {string[]} props.items - Array of text items to display
 * @param {string} [props.separator] - Separator character between items
 * @param {boolean} [props.reverse] - Reverse scroll direction
 * @param {string} [props.className] - Additional class names
 */
export default function Marquee({ items = [], separator = '—', reverse = false, className = '' }) {
  return (
    <div className={`marquee-container ${className}`}>
      <FastMarquee
        direction={reverse ? 'right' : 'left'}
        speed={45}
        pauseOnHover={true}
        gradient={false}
      >
        {items.map((item, i) => (
          <div key={i} className="marquee__item">
            <span className="marquee__text">{item}</span>
            <span className="marquee__separator">{separator}</span>
          </div>
        ))}
      </FastMarquee>
    </div>
  );
}
