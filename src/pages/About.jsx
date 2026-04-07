import { Link } from 'react-router-dom';
import { photo3, photo5, photo1 } from '../assets';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80, background: 'var(--cream)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 360, height: 360,
          borderRadius: '50%', background: 'rgba(138,158,122,0.1)',
        }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag">My Story</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, maxWidth: 600, lineHeight: 1.15 }}>
            Meet <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Susan</em>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            {/* Image stack */}
            <div style={{ position: 'sticky', top: 120 }} className="about-sticky">
              <div style={{ position: 'relative' }}>
                <img src={photo5} alt="Susan Stevens" style={{
                  width: '100%', height: 520, objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}/>
                <div style={{
                  position: 'absolute', bottom: -30, right: -30, width: 200, height: 200,
                  backgroundImage: `url(${photo3})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  border: '6px solid var(--white)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                }}/>
                <div style={{
                  position: 'absolute', top: 30, left: -20,
                  background: 'var(--sage)', padding: '16px 24px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>APC</span>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: '#fff', marginTop: 2 }}>Certified Celebrant</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ paddingTop: 20 }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, marginBottom: 28, lineHeight: 1.3 }}>
                Working with People at Life's Most <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Meaningful Moments</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 22 }}>
                Hello, my name is Susan and I work with people at some of the most meaningful points in life, whether saying goodbye to someone deeply cherished, marking a commitment or celebrating a love story.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 22 }}>
                Every ceremony I create is personal, heartfelt and thoughtful. I take time to listen, understand and reflect on what is meaningful to you, so that every moment feels authentic, memorable, and deeply respectful.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 40 }}>
                Because every life, every love, every story deserves to be honoured.
              </p>

              {/* Values */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
                {[
                  { title: 'Compassionate', text: 'I hold every ceremony with warmth and genuine care.' },
                  { title: 'Personalised', text: 'No two ceremonies are ever the same.' },
                  { title: 'Thoughtful', text: 'I take time to listen and truly understand.' },
                  { title: 'Professional', text: 'APC certified and committed to excellence.' },
                ].map(v => (
                  <div key={v.title} style={{ padding: '22px', background: 'var(--cream)', borderLeft: '3px solid var(--apricot)' }}>
                    <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 500, marginBottom: 6, color: 'var(--text-dark)' }}>{v.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{v.text}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Enquire About Your Ceremony
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
      <style>{`
        @media(max-width:900px){
          .about-grid{grid-template-columns:1fr !important; gap:30px !important;}
          .about-sticky{position:static !important;}
          .about-values{grid-template-columns:1fr !important;}
        }
      `}</style>
    </>
  );
}