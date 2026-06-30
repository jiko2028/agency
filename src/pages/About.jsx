import SectionReveal from '../components/SectionReveal';
import BlockReveal from '../components/BlockReveal';
import LineBlockReveal from '../components/LineBlockReveal';
import { Typewriter } from '../components/ui/typewriter';
import TechStickers from '../components/TechStickers';
import './About.css';

const processSteps = [
  {
    number: '01',
    title: 'Penemuan (Discovery)',
    description: 'Memahami bisnis, audiens, dan tujuan Anda secara mendalam melalui riset dan diskusi intensif.',
  },
  {
    number: '02',
    title: 'Strategi',
    description: 'Menyusun strategi digital yang tepat berdasarkan data dan insight yang telah dikumpulkan.',
  },
  {
    number: '03',
    title: 'Desain',
    description: 'Menerjemahkan strategi menjadi desain visual yang premium, user-centered, dan berdampak nyata.',
  },
  {
    number: '04',
    title: 'Pengembangan',
    description: 'Membangun website dengan teknologi modern, performa optimal, dan kode yang bersih.',
  },
  {
    number: '05',
    title: 'Peluncuran',
    description: 'Deploy, pengujian menyeluruh, dan serah terima lengkap. Kami pastikan semuanya berjalan sempurna.',
  },
];

const values = [
  {
    title: 'Kualitas di Atas Kecepatan',
    description: 'Kami tidak mengejar cepat. Kami mengejar kualitas. Setiap piksel dan baris kode dibuat dengan tujuan yang jelas.',
  },
  {
    title: 'Kemitraan, Bukan Sekadar Layanan',
    description: 'Kami bekerja sebagai partner, bukan vendor. Kesuksesan proyek Anda adalah kesuksesan kami.',
  },
  {
    title: 'Komunikasi Jujur',
    description: 'Transparansi penuh di setiap tahap. Tidak ada agenda tersembunyi — hanya dialog yang jujur dan produktif.',
  },
  {
    title: 'Desain Bertujuan',
    description: 'Setiap keputusan desain didasari tujuan yang jelas. Cantik saja tidak cukup — harus efektif.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero section" id="about-hero">
        <div className="container">
          <div>
            <BlockReveal delay={0.1}>
              <p className="section-label">Tentang Kami</p>
            </BlockReveal>
            <br />
            <LineBlockReveal
              text="Studio kecil dengan ambisi besar"
              as="h1"
              className="about-hero__heading"
              blockColor="var(--black)"
              delay={0.2}
            />
            <br />
            <SectionReveal delay={0.3}>
              <p className="about-hero__subtitle">
                Kami merancang website kustom premium yang dibangun khusus untuk:
                <span className="about-hero__typewriter-wrap">
                  <Typewriter
                    text={[
                      "menaikkan omzet bisnis Anda.",
                      "membangun kredibilitas brand Anda.",
                      "mengonversi pengunjung jadi pembeli.",
                      "mengotomatiskan operasional Anda."
                    ]}
                    speed={50}
                    className="text-[var(--accent)] font-semibold"
                    waitTime={2000}
                    deleteSpeed={30}
                    cursorChar={"_"}
                  />
                </span>
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Story */}
      <section className="about-story section" id="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__left">
              <BlockReveal delay={0.1}>
                <h3 className="about-section-label">Kisah Kami</h3>
              </BlockReveal>
            </div>
            <div className="about-story__right">
              <SectionReveal delay={0.2}>
                <p className="about-body">
                  AlamAgency lahir dari keyakinan sederhana: setiap bisnis layak memiliki website yang luar biasa. Bukan template umum, bukan hasil instan — tapi karya yang dibuat dengan keahlian dan kehati-hatian penuh.
                </p>
                <p className="about-body">
                  Kami mengombinasikan sensibilitas desain editorial dengan kemampuan rekayasa modern untuk menciptakan pengalaman digital yang tidak hanya indah dilihat, tetapi juga efektif mendorong hasil bisnis.
                </p>
                <p className="about-body">
                  Setiap proyek dimulai dari pemahaman mendalam tentang brand, audiens, dan tujuan bisnis klien. Kami tidak percaya pada solusi satu-untuk-semua — setiap produk kami buat kustom dari nol.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Keahlian Kami (Tech Stickers Wall) */}
      <TechStickers />

      {/* Values */}
      <section className="about-values section" id="about-values">
        <div className="container">
          <div className="about-values__header">
            <BlockReveal delay={0.1}>
              <p className="section-label">Nilai-Nilai Kami</p>
            </BlockReveal>
            <br />
            <LineBlockReveal
              text="Apa yang mendorong setiap karya kami"
              as="h2"
              className="section-heading"
              blockColor="var(--black)"
              delay={0.2}
            />
          </div>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <div className="value-card">
                  <h4 className="value-card__title">{value.title}</h4>
                  <p className="value-card__desc">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="about-process section" id="about-process" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="about-process__header" style={{ textAlign: 'center' }}>
            <BlockReveal delay={0.1}>
              <p className="section-label">Cara Kami Bekerja</p>
            </BlockReveal>
            <br />
            <LineBlockReveal
              text="Proses terstruktur untuk hasil luar biasa"
              as="h2"
              className="section-heading"
              blockColor="var(--accent)"
              delay={0.2}
            />
          </div>

          <div className="about-process__steps">
            {processSteps.map((step, index) => (
              <SectionReveal key={step.number} delay={index * 0.08}>
                <div className="process-step">
                  <div className="process-step__left">
                    <span className="process-step__number">{step.number}</span>
                    <h3 className="process-step__title">{step.title}</h3>
                  </div>
                  <p className="process-step__desc">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && <div className="divider" style={{ margin: '0' }}></div>}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
