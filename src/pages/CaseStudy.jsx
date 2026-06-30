import { useParams, Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import projects from '../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="case-study-page">
        <section className="case-study-hero section">
          <div className="container" style={{ textAlign: 'center', paddingTop: '200px' }}>
            <h1>Studi Kasus Tidak Ditemukan</h1>
            <p style={{ marginTop: '16px', marginBottom: '32px' }}>Proyek yang Anda cari tidak tersedia.</p>
            <Link to="/works" className="btn-pill btn-primary" style={{ textDecoration: 'none' }}>
              Kembali ke Portofolio
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Find next project
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="case-study-page">
      {/* Hero */}
      <section className="case-study-hero" id="case-study-hero">
        <div className="container">
          <SectionReveal className="case-study-hero__content">
            <div className="case-study-hero__meta" data-reveal>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
            <h1 className="case-study-hero__title" data-reveal>{project.title}</h1>
            <p className="case-study-hero__desc" data-reveal>{project.description}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="case-study-hero-image">
        <div className="container">
          <SectionReveal>
            <div className="case-study-hero-image__wrap" data-reveal>
              <img src={project.thumbnail} alt={project.title} loading="lazy" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="case-study-section section" id="case-study-overview">
        <div className="container">
          <div className="case-study-grid">
            <SectionReveal className="case-study-grid__left">
              <h3 className="case-study-grid__label" data-reveal>Ringkasan</h3>
            </SectionReveal>
            <SectionReveal className="case-study-grid__right">
              <div className="case-study-info-grid" data-reveal>
                <div className="case-study-info-item">
                  <span className="case-study-info-item__label">Klien</span>
                  <span className="case-study-info-item__value">{project.client}</span>
                </div>
                <div className="case-study-info-item">
                  <span className="case-study-info-item__label">Kategori</span>
                  <span className="case-study-info-item__value">{project.category}</span>
                </div>
                <div className="case-study-info-item">
                  <span className="case-study-info-item__label">Tahun</span>
                  <span className="case-study-info-item__value">{project.year}</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}></div>

      {/* Background */}
      <section className="case-study-section section" id="case-study-background">
        <div className="container">
          <div className="case-study-grid">
            <SectionReveal className="case-study-grid__left">
              <h3 className="case-study-grid__label" data-reveal>Latar Belakang</h3>
            </SectionReveal>
            <SectionReveal className="case-study-grid__right">
              <p className="case-study-body" data-reveal>{project.background}</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}></div>

      {/* Problem */}
      <section className="case-study-section section" id="case-study-problem">
        <div className="container">
          <div className="case-study-grid">
            <SectionReveal className="case-study-grid__left">
              <h3 className="case-study-grid__label" data-reveal>Masalah</h3>
            </SectionReveal>
            <SectionReveal className="case-study-grid__right">
              <p className="case-study-body" data-reveal>{project.problem}</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}></div>

      {/* Solution */}
      <section className="case-study-section section" id="case-study-solution">
        <div className="container">
          <div className="case-study-grid">
            <SectionReveal className="case-study-grid__left">
              <h3 className="case-study-grid__label" data-reveal>Solusi</h3>
            </SectionReveal>
            <SectionReveal className="case-study-grid__right">
              <p className="case-study-body" data-reveal>{project.solution}</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="case-study-gallery section" id="case-study-gallery">
        <div className="container">
          <div className="case-study-gallery__grid">
            {project.images.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="case-study-gallery__item" data-reveal>
                  <img src={img} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}></div>

      {/* Result */}
      <section className="case-study-section section" id="case-study-result">
        <div className="container">
          <div className="case-study-grid">
            <SectionReveal className="case-study-grid__left">
              <h3 className="case-study-grid__label" data-reveal>Hasil Akhir</h3>
            </SectionReveal>
            <SectionReveal className="case-study-grid__right">
              <p className="case-study-body case-study-body--large" data-reveal>{project.result}</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="case-study-next section" id="case-study-next" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionReveal>
            <p className="section-label" data-reveal>Proyek Selanjutnya</p>
            <h2 className="case-study-next__title" data-reveal>{nextProject.title}</h2>
            <div data-reveal>
              <Link to={`/works/${nextProject.slug}`} className="btn-pill btn-primary" style={{ textDecoration: 'none' }}>
                Lihat Proyek
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
