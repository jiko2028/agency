import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '../components/SectionReveal';
import TextFillReveal from '../components/TextFillReveal';
import BlockReveal from '../components/BlockReveal';
import Marquee from '../components/Marquee';
import ProjectCard from '../components/ProjectCard';
import InteractiveSelector from '../components/ui/interactive-selector';
import projects from '../data/projects';
import heroImg from '../assets/hero-main.png';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  'Aplikasi Web', 'Landing Page', 'Profil Perusahaan', 'E-Commerce',
  'Desain UI/UX', 'React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Figma',
];

const marqueeItems2 = [
  'Strategi', 'Desain', 'Pengembangan', 'Branding', 'Desain Animasi',
  'Performa', 'Responsif', 'SEO', 'Aksesibilitas', 'Kreativitas',
];

export default function Home() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const featuredProjects = projects.slice(0, 4);

  // Hero animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero__cta-group',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero__image-wrap',
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      // 3D Scroll Rotation linked directly to Lenis scroll scrub
      gsap.fromTo(
        '.hero__image',
        { rotateX: 18, rotateY: -15, scale: 0.95 },
        {
          rotateX: -12,
          rotateY: 15,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero__image-wrap',
            start: 'top 85%',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef} id="hero">
        <div className="container hero__content" ref={heroTextRef}>
          <h1 className="hero__heading">
            <BlockReveal delay={0.1} blockColor="var(--black)">
              <span>Dari konsep menjadi produk</span>
            </BlockReveal>
            <br />
            <BlockReveal delay={0.25} blockColor="var(--black)">
              <span>yang dibangun dengan proses nyata</span>
            </BlockReveal>
          </h1>
          <p className="hero__subtitle">
            <BlockReveal delay={0.4} blockColor="var(--accent)">
              <span>Mengubah ide dan gagasan menjadi produk digital fungsional.</span>
            </BlockReveal>
            <br />
            <BlockReveal delay={0.55} blockColor="var(--accent)">
              <span>Kami merancang website yang menaikkan kelas brand dan mendatangkan hasil nyata.</span>
            </BlockReveal>
          </p>
          <div className="hero__cta-group">
            <Link to="/works" className="btn-pill btn-primary">
              Lihat Karya Kami
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/about" className="btn-pill btn-outline">
              Cara Kami Bekerja
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="hero__image-wrap">
            <img src={heroImg} alt="Showcase desain web premium" className="hero__image" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee items={marqueeItems} />
      <Marquee items={marqueeItems2} reverse />

      {/* ===== FEATURED WORKS ===== */}
      <section className="section featured-works" id="featured-works">
        <div className="container">
          <div className="featured-works__header">
            <BlockReveal delay={0.1}>
              <p className="section-label">Karya Pilihan</p>
            </BlockReveal>
            <br />
            <BlockReveal delay={0.2} blockColor="var(--black)">
              <h2 className="section-heading">Proyek yang menceritakan kualitasnya sendiri</h2>
            </BlockReveal>
          </div>

          <SectionReveal>
            <InteractiveSelector />
          </SectionReveal>

          <SectionReveal className="featured-works__cta">
            <div data-reveal>
              <Link to="/works" className="btn-pill btn-outline">
                Lihat Semua Proyek
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== STATEMENT ===== */}
      <section className="section statement-section" id="statement">
        <div className="container">
          <SectionReveal>
            <TextFillReveal
              text="Kami tidak sekadar membuat website. Kami merancang pengalaman digital yang membuat brand Anda mustahil untuk diabaikan."
              className="statement__text"
            />
          </SectionReveal>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section services-preview" id="services-preview" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="services-preview__header">
            <BlockReveal delay={0.1}>
              <p className="section-label">Apa Yang Kami Lakukan</p>
            </BlockReveal>
            <br />
            <BlockReveal delay={0.2} blockColor="var(--accent)">
              <h2 className="section-heading">Layanan yang dirancang untuk brand yang ambisius</h2>
            </BlockReveal>
          </div>

          <div className="services-preview__grid">
            {['Aplikasi Web', 'Landing Page', 'Profil Perusahaan', 'E-Commerce'].map((service, index) => (
              <SectionReveal key={service} delay={index * 0.1}>
                <Link to="/services" className="service-preview-card" data-reveal>
                  <span className="service-preview-card__number">0{index + 1}</span>
                  <h3 className="service-preview-card__title">{service}</h3>
                  <span className="service-preview-card__arrow">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
