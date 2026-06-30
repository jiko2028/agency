import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/services', label: 'Layanan' },
  { path: '/works', label: 'Portofolio' },
  { path: '/about', label: 'Tentang Kami' },
  { path: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // GSAP mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.6,
        ease: 'power3.inOut',
      });
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('.mobile-nav-link'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.2, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [isMobileOpen]);

  return (
    <>
      <nav ref={navRef} className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo" aria-label="AlamAgency - Beranda">
            Alam<span className="logo-dot">Agency</span>
          </Link>

          <ul className="navbar__links" role="menubar">
            {navLinks.map((link) => (
              <li key={link.path} role="none">
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <ThemeToggle />
            <Link to="/contact" className="navbar__cta btn-pill btn-primary">
              Mulai Diskusi
              <span className="btn-arrow">→</span>
            </Link>

            <button
              className={`navbar__hamburger ${isMobileOpen ? 'is-open' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMobileOpen}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="mobile-menu" aria-hidden={!isMobileOpen}>
        <div className="mobile-menu__inner">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link--active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-pill btn-primary mobile-menu__cta" onClick={() => setIsMobileOpen(false)}>
            Mulai Diskusi
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
