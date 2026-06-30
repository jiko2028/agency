import { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import BlockReveal from '../components/BlockReveal';
import './Contact.css';

const projectTypes = ['Aplikasi Web', 'Landing Page', 'Profil Perusahaan', 'E-Commerce', 'Lainnya'];
const budgetRanges = ['< Rp 5 Juta', 'Rp 5 - 15 Juta', 'Rp 15 - 30 Juta', 'Rp 30 - 50 Juta', '> Rp 50 Juta'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.projectType) newErrors.projectType = 'Pilih jenis proyek';
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero section" id="contact-hero">
        <div className="container">
          <div>
            <BlockReveal delay={0.1}>
              <p className="section-label">Hubungi Kami</p>
            </BlockReveal>
            <br />
            <BlockReveal delay={0.2} blockColor="var(--black)">
              <h1 className="contact-hero__heading">
                Mari mulai berdiskusi
              </h1>
            </BlockReveal>
            <br />
            <SectionReveal delay={0.3}>
              <p className="contact-hero__subtitle">
                Ceritakan proyek impian Anda. Kami siap membantu mewujudkannya.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact Content */}
      <section className="contact-content section" id="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <SectionReveal className="contact-info">
              <div className="contact-info__block" data-reveal>
                <h4 className="contact-info__label">Email</h4>
                <a href="mailto:hello@alamagency.com" className="contact-info__value">hello@alamagency.com</a>
              </div>
              <div className="contact-info__block" data-reveal>
                <h4 className="contact-info__label">WhatsApp</h4>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="contact-info__value">+62 812 3456 7890</a>
              </div>
              <div className="contact-info__block" data-reveal>
                <h4 className="contact-info__label">Instagram</h4>
                <a href="https://instagram.com/alamagency" target="_blank" rel="noopener noreferrer" className="contact-info__value">@alamagency</a>
              </div>
              <div className="contact-info__block" data-reveal>
                <h4 className="contact-info__label">LinkedIn</h4>
                <a href="https://linkedin.com/company/alamagency" target="_blank" rel="noopener noreferrer" className="contact-info__value">AlamAgency</a>
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal className="contact-form-wrap">
              {isSubmitted ? (
                <div className="contact-success" data-reveal>
                  <div className="contact-success__icon">✓</div>
                  <h3 className="contact-success__title">Pesan terkirim!</h3>
                  <p className="contact-success__text">Terima kasih telah menghubungi kami. Kami akan segera merespons dalam 1-2 hari kerja.</p>
                  <button className="btn-pill btn-outline" onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', projectType: '', budget: '', message: '' }); }}>
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" data-reveal noValidate id="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Nama *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      placeholder="Nama lengkap Anda"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-project" className="form-label">Jenis Proyek *</label>
                      <select
                        id="contact-project"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.projectType ? 'form-input--error' : ''}`}
                      >
                        <option value="">Pilih jenis proyek</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && <span className="form-error">{errors.projectType}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-budget" className="form-label">Anggaran (Budget)</label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input form-select"
                      >
                        <option value="">Pilih rentang anggaran</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Pesan *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                      placeholder="Ceritakan tentang proyek Anda..."
                      rows="5"
                    ></textarea>
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn-pill btn-primary contact-form__submit"
                    disabled={isSubmitting}
                    id="contact-submit"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    {!isSubmitting && <span className="btn-arrow">→</span>}
                  </button>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
