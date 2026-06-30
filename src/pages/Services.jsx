import { Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import TextFillReveal from '../components/TextFillReveal';
import BlockReveal from '../components/BlockReveal';
import LineBlockReveal from '../components/LineBlockReveal';
import services from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero section" id="services-hero">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <BlockReveal delay={0.1}>
              <p className="section-label">Layanan Kami</p>
            </BlockReveal>
            <br />
            <LineBlockReveal
              text="Solusi yang dirancang untuk mengembangkan bisnis Anda"
              as="h1"
              className="services-hero__heading"
              blockColor="var(--black)"
              delay={0.2}
            />
            <br />
            <SectionReveal delay={0.3}>
              <p className="services-hero__subtitle">
                Kami menyediakan layanan end-to-end, dari strategi dan desain hingga development dan launch. Setiap proyek dikerjakan dengan standar kualitas tertinggi.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Services List */}
      <section className="services-list" id="services-list">
        {services.map((service, index) => (
          <div key={service.id} className="service-item" id={`service-${service.id}`}>
            <div className="container">
              <div className="service-item__inner">
                <div className="service-item__left">
                  <span className="service-item__number">{service.number}</span>
                  <br />
                  <BlockReveal delay={0.1} blockColor="var(--black)">
                    <h2 className="service-item__title">{service.title}</h2>
                  </BlockReveal>
                </div>
                <div className="service-item__right">
                  <SectionReveal delay={0.2}>
                    <p className="service-item__desc">{service.description}</p>
                    <ul className="service-item__features">
                      {service.features.map((feature) => (
                        <li key={feature} className="service-item__feature">
                          <span className="feature-dot"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </SectionReveal>
                </div>
              </div>
            </div>
            {index < services.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="services-cta section" id="services-cta" style={{ background: '#111111' }}>
        <div className="container">
          <div className="services-cta__inner" style={{ textAlign: 'center' }}>
            <LineBlockReveal
              text="Punya proyek yang ingin diwujudkan?"
              as="h2"
              className="services-cta__heading"
              style={{ color: '#FFFFFF' }}
              blockColor="#FFFFFF"
              delay={0.1}
            />
            <br />
            <SectionReveal delay={0.3}>
              <p className="services-cta__text">
                Ceritakan kebutuhan Anda, dan kami akan bantu mewujudkannya.
              </p>
              <div>
                <Link to="/contact" className="btn-pill btn-primary services-cta__btn">
                  Mulai Konsultasi
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
