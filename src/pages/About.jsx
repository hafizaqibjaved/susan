import { Link } from 'react-router-dom';
import { APCBadge } from '../components/APCComponents';
import { useEffect, useRef, useState } from 'react';
import { photo5 } from '../assets';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, visible] = useReveal();
  const t = { up: 'translateY(28px)', left: 'translateX(-28px)', right: 'translateX(28px)', none: 'none' };
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : t[direction], transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>{children}</div>;
}

export default function About() {
  return (
    <>
      {/* Hero banner with nature background */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--off-white) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'rgba(138,158,122,0.12)' }}/>
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 280, height: 280, borderRadius: '50%', background: 'rgba(212,149,106,0.08)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>My Story</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, maxWidth: 600, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Meet <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Susan</em>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'start' }}>
            {/* Single image - no duplicate */}
            <Reveal direction="left">
              <div style={{ position: 'sticky', top: 120 }} className="about-sticky">
                <img src={photo5} alt="Susan Stevens" style={{ width: '100%', height: 560, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}/>
                <div style={{ background: 'var(--sage)', padding: '20px 24px' }}>
                  <APCBadge dark={true} showLabel={true} size={48} />
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal direction="right" delay={0.1}>
              <div style={{ paddingTop: 20 }}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, marginBottom: 28, lineHeight: 1.2 }}>
                  Working with People at Life's Most{' '}
                  <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Meaningful Moments</em>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }} className="about-values">
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
                <Link to="/contact" className="btn-primary">Enquire About Your Ceremony</Link>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){
            .about-grid{grid-template-columns:1fr !important; gap:30px !important;}
            .about-sticky{position:static !important;}
            .about-values{grid-template-columns:1fr !important;}
          }
        `}</style>
      </section>
    </>
  );
}
