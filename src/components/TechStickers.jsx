import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiShopify,
  SiVite,
  SiNodedotjs,
  SiFramer,
  SiLaravel,
  SiGo,
  SiFlutter,
  SiWordpress,
  SiPython,
  SiPostgresql,
} from 'react-icons/si';
import './TechStickers.css';

const techList = [
  { name: 'React', icon: <SiReact size={20} color="#61DAFB" />, rotate: -8, x: '8%', y: '15%' },
  { name: 'Next.js', icon: <SiNextdotjs size={20} color="#FFFFFF" />, rotate: 12, x: '24%', y: '55%' },
  { name: 'JavaScript', icon: <SiJavascript size={20} color="#F7DF1E" />, rotate: -15, x: '45%', y: '12%' },
  { name: 'TypeScript', icon: <SiTypescript size={20} color="#3178C6" />, rotate: 6, x: '62%', y: '48%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} color="#38BDF8" />, rotate: -10, x: '80%', y: '16%' },
  { name: 'Figma', icon: <SiFigma size={20} color="#F24E1E" />, rotate: 14, x: '85%', y: '72%' },
  { name: 'Shopify', icon: <SiShopify size={20} color="#96BF48" />, rotate: -5, x: '14%', y: '75%' },
  { name: 'Node.js', icon: <SiNodedotjs size={20} color="#339933" />, rotate: 8, x: '35%', y: '78%' },
  { name: 'Framer Motion', icon: <SiFramer size={20} color="#FF0055" />, rotate: -12, x: '52%', y: '30%' },
  { name: 'Vite', icon: <SiVite size={20} color="#646CFF" />, rotate: 5, x: '72%', y: '76%' },
  { name: 'Laravel', icon: <SiLaravel size={20} color="#FF2D20" />, rotate: -6, x: '30%', y: '32%' },
  { name: 'Go / Golang', icon: <SiGo size={20} color="#00ADD8" />, rotate: 10, x: '12%', y: '45%' },
  { name: 'Flutter', icon: <SiFlutter size={20} color="#02569B" />, rotate: -9, x: '48%', y: '60%' },
  { name: 'WordPress', icon: <SiWordpress size={20} color="#21759B" />, rotate: 7, x: '65%', y: '78%' },
  { name: 'Python', icon: <SiPython size={20} color="#3776AB" />, rotate: -12, x: '68%', y: '22%' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={20} color="#336791" />, rotate: 8, x: '88%', y: '42%' },
];

export default function TechStickers() {
  const containerRef = useRef(null);
  const [maxZIndex, setMaxZIndex] = useState(20);
  const [stickersZIndex, setStickersZIndex] = useState({});

  const handleDragStart = (name) => {
    const nextZ = maxZIndex + 1;
    setMaxZIndex(nextZ);
    setStickersZIndex((prev) => ({
      ...prev,
      [name]: nextZ,
    }));
  };

  return (
    <div className="tech-stickers-section">
      <div className="container">
        <div className="tech-stickers__header">
          <span className="tech-stickers__badge">Keahlian Kami</span>
          <h2 className="tech-stickers__title">Teknologi yang Kami Gunakan</h2>
          <p className="tech-stickers__desc">
            Geser, tumpuk, dan atur stiker teknologi di bawah untuk melihat tech stack yang kami kuasai.
          </p>
        </div>

        {/* Draggable Area */}
        <div ref={containerRef} className="tech-stickers__canvas">
          <div className="tech-stickers__grid-bg" />

          {techList.map((tech, index) => {
            const zIndexValue = stickersZIndex[tech.name] || (index + 2);
            return (
              <motion.div
                key={tech.name}
                className="tech-sticker-wrap"
                drag
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragMomentum={false}
                onDragStart={() => handleDragStart(tech.name)}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.04, type: 'spring', stiffness: 120 },
                }}
                style={{
                  left: tech.x,
                  top: tech.y,
                  position: 'absolute',
                  zIndex: zIndexValue,
                  cursor: 'grab',
                }}
              >
                {/* Inner floating/wobbling motion layer */}
                <motion.div
                  className="tech-sticker"
                  animate={{
                    y: [0, -7, 4, -5, 0],
                    rotate: [tech.rotate, tech.rotate + 3, tech.rotate - 3, tech.rotate + 2, tech.rotate],
                  }}
                  transition={{
                    duration: 4.5 + (index % 4) * 1.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
                  }}
                  whileTap={{
                    cursor: 'grabbing',
                    scale: 1.15,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  <div className="tech-sticker__icon-wrapper">{tech.icon}</div>
                  <span className="tech-sticker__name">{tech.name}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
