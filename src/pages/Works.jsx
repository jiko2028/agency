import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projects from '../data/projects';
import BlockReveal from '../components/BlockReveal';
import './Works.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: 'Semua', value: 'All' },
  { label: 'Aplikasi Web', value: 'Web App' },
  { label: 'Landing Page', value: 'Landing Page' },
  { label: 'Profil Perusahaan', value: 'Company Profile' },
  { label: 'E-Commerce', value: 'E-Commerce' }
];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollContainerRef = useRef(null);
  const trackWrapperRef = useRef(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Re-run GSAP scroll animation whenever filter changes
  useEffect(() => {
    // Kill any existing ScrollTrigger instances created on this component
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
      if (trigger.vars.id === 'works-pin-trigger') {
        trigger.kill(true);
      }
    });

    const cards = gsap.utils.toArray('.cinematic-card');
    if (cards.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 220 : 320;
    const cardSpacing = isMobile ? 20 : 40;
    const totalTrackWidth = cards.length * (cardWidth + cardSpacing) - cardSpacing;

    // 1. Initial State: Scattered messy pile (overlapping in the center)
    const angles = [-15, 8, -6, 12, -10, 14, -8, 6];
    const offsetsX = [-50, 30, -80, 60, -30, 90, -40, 50];
    const offsetsY = [-25, 15, -10, 20, -35, 25, -15, 10];

    cards.forEach((card, i) => {
      gsap.set(card, {
        x: offsetsX[i % offsetsX.length],
        y: offsetsY[i % offsetsY.length],
        rotate: angles[i % angles.length],
        transformOrigin: 'center center',
      });
    });

    // Reset track position
    gsap.set('.works-scroll-track', { x: 0 });

    // 2. Create pinned ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'works-pin-trigger',
        trigger: scrollContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Step A: Straighten and align cards into a perfect row starting from the left margin
    const leftMargin = isMobile ? 24 : 80;
    const startX = leftMargin + (cardWidth / 2) - (window.innerWidth / 2);

    tl.to(cards, {
      rotate: 0,
      y: 0,
      x: (i) => startX + i * (cardWidth + cardSpacing),
      duration: 1.2,
      ease: 'power3.out',
    });

    // Parallax text scaling & opacity boost
    tl.to('.works-bg-title', {
      opacity: 0.08,
      scale: 1.08,
      duration: 1.2,
      ease: 'power2.out',
    }, 0);

    // Step B: Scroll the track horizontally with exact math to align right side
    const rightMargin = isMobile ? 24 : 80;
    const maxScrollX = totalTrackWidth - window.innerWidth + leftMargin + rightMargin;

    if (maxScrollX > 0) {
      tl.to('.works-scroll-track', {
        x: -maxScrollX, // slide the track to align the last card exactly
        duration: 2.2,
        ease: 'none',
      }, '>-0.15');

      // Parallax move background title
      tl.to('.works-bg-title', {
        x: -120,
        duration: 2.2,
        ease: 'none',
      }, '<');
    }

    // Refresh ScrollTrigger to ensure bounds are recalculating correctly
    ScrollTrigger.refresh();

    return () => {
      const activeTriggers = ScrollTrigger.getAll();
      activeTriggers.forEach(t => {
        if (t.vars.id === 'works-pin-trigger') t.kill(true);
      });
    };
  }, [activeFilter, filteredProjects]);

  return (
    <div className="works-page">
      {/* Horizontal Pinned Scroll Container */}
      <div ref={scrollContainerRef} className="works-scroll-container">
        {/* Sticky Viewport */}
        <div className="works-pinned-wrap">
          <div className="works-noise-bg" />

          <div className="container works-pinned-inner">
            {/* Header / Nav Section */}
            <div className="works-sticky-header">
              <div className="works-sticky-header__left">
                <BlockReveal delay={0.1}>
                  <span className="works-sticky-header__badge">Portofolio</span>
                </BlockReveal>
                <BlockReveal delay={0.2} blockColor="var(--black)">
                  <h1 className="works-sticky-header__title">Karya Pilihan Kami</h1>
                </BlockReveal>
              </div>

              {/* Filter Tabs */}
              <div className="works-sticky-header__right">
                <div className="works-filter__tabs">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      className={`works-filter__tab ${activeFilter === cat.value ? 'works-filter__tab--active' : ''}`}
                      onClick={() => setActiveFilter(cat.value)}
                      id={`filter-${cat.label.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cinematic Background Title */}
            <div className="works-bg-title">PORTFOLIO</div>

            {/* Horizontal Track Wrapper */}
            <div ref={trackWrapperRef} className="works-scroll-track-wrapper">
              <div className="works-scroll-track">
                {filteredProjects.map((project) => {
                  // Split tech specs into tags
                  const tags = [
                    ...project.device.split('/').map(s => s.trim()),
                    ...project.language.split(',').map(s => s.trim()),
                    ...project.framework.split(',').map(s => s.trim())
                  ];

                  return (
                    <Link
                      key={project.id}
                      to={`/works/${project.slug}`}
                      className="cinematic-card"
                    >
                      <div className="cinematic-card__image-wrap">
                        <img src={project.thumbnail} alt={project.title} />
                        <div className="cinematic-card__overlay" />
                      </div>
                      <div className="cinematic-card__info">
                        <div className="cinematic-card__meta">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="cinematic-card__title">{project.title}</h3>
                        <p className="cinematic-card__summary">{project.shortSummary}</p>
                        
                        <div className="cinematic-card__tags">
                          {tags.map((tag, idx) => (
                            <span key={idx} className="cinematic-card__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {filteredProjects.length === 0 && (
              <div className="works-empty-cinematic">
                <p>Tidak ada proyek yang ditemukan dalam kategori ini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
