import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaRocket, FaBuilding, FaChartBar, FaGlobe } from 'react-icons/fa';
import projects from '../../data/projects';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  const navigate = useNavigate();

  const iconMap = [
    <FaShoppingBag size={22} className="text-white" />,
    <FaRocket size={22} className="text-white" />,
    <FaBuilding size={22} className="text-white" />,
    <FaChartBar size={22} className="text-white" />,
    <FaGlobe size={22} className="text-white" />
  ];

  const options = projects.slice(0, 5).map((project, idx) => ({
    title: project.title,
    description: `${project.subtitle} — ${project.category}`,
    image: project.thumbnail,
    slug: project.slug,
    icon: iconMap[idx % iconMap.length]
  }));

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else {
      // If clicking already active option, navigate to case study
      navigate(`/works/${options[index].slug}`);
    }
  };

  useEffect(() => {
    const timers = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-12 bg-transparent font-sans text-white w-full"> 
      {/* Options Container */}
      <div className="options flex w-full max-w-[1100px] min-w-[320px] h-[480px] md:h-[520px] mx-auto items-stretch overflow-hidden relative rounded-xl border border-[rgba(255,255,255,0.1)]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.60)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '6 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Dark gradient overlay */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: '0',
                height: '100%',
                background: activeIndex === index 
                  ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' 
                  : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-6 flex items-center justify-start h-14 z-2 pointer-events-none px-5 gap-4 w-full">
              <div className="icon min-w-[48px] max-w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[rgba(17,17,17,0.85)] backdrop-blur-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] border-2 border-[var(--accent)] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative overflow-hidden">
                <div 
                  className="main font-bold text-xl md:text-2xl transition-all duration-700 ease-in-out tracking-tight"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-sm md:text-base text-gray-300 transition-all duration-700 ease-in-out mt-0.5"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description} <span className="text-[var(--accent)] ml-2 text-xs uppercase tracking-wider font-semibold">→ View Case Study</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom keyframe animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
