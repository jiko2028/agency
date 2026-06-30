import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Footer.css';

export default function Footer() {
  const ctaRef = useScrollReveal({ y: 50, stagger: 0.15 });
  const infoRef = useScrollReveal({ y: 30, stagger: 0.1, start: 'top 90%' });

  return (
    <footer className="footer" id="footer">
      {/* CTA Section */}
      <section className="footer__cta section" ref={ctaRef}>
        <div className="container">
          <p className="footer__cta-label" data-reveal>Punya ide proyek?</p>
          <h2 className="footer__cta-heading" data-reveal>
            Mari ciptakan sesuatu yang<br />bermakna bersama.
          </h2>
          <div data-reveal>
            <Link to="/contact" className="btn-pill btn-primary footer__cta-btn">
              Mulai Proyek
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Footer Info */}
      <section className="footer__info" ref={infoRef}>
        <div className="container footer__info-grid">
          <div className="footer__col" data-reveal>
            <span className="footer__brand">Alam<span className="logo-dot">Agency</span></span>
            <p className="footer__desc">Digital design studio yang mengubah konsep menjadi produk digital berkualitas tinggi.</p>
          </div>
          <div className="footer__col" data-reveal>
            <h4 className="footer__col-title">Navigasi</h4>
            <ul className="footer__nav">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/services">Layanan</Link></li>
              <li><Link to="/works">Portofolio</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/contact">Kontak</Link></li>
            </ul>
          </div>
          <div className="footer__col" data-reveal>
            <h4 className="footer__col-title">Hubungi Kami</h4>
            <ul className="footer__nav">
              <li><a href="mailto:hello@alamagency.com">hello@alamagency.com</a></li>
              <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com/alamagency" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com/company/alamagency" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer__col" data-reveal>
            <h4 className="footer__col-title">Layanan</h4>
            <ul className="footer__nav">
              <li><Link to="/services">Aplikasi Web</Link></li>
              <li><Link to="/services">Landing Page</Link></li>
              <li><Link to="/services">Profil Perusahaan</Link></li>
              <li><Link to="/services">E-Commerce</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <div className="footer__bottom container">
        <p>© 2026 AlamAgency. Hak cipta dilindungi.</p>
        <p>Didesain dengan tujuan. Dibuat tanpa kompromi.</p>
      </div>
    </footer>
  );
}
