import { useEffect, useRef, useState } from 'react';
import { APCLogo } from '../components/APCComponents';
import { ExternalLink } from 'lucide-react';

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
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>{children}</div>;
}

const links = [
  {
    category: 'Bereavement Support',
    items: [
      { name: 'The Good Funeral Guide', url: 'https://www.goodfuneralguide.co.uk', desc: 'Independent, compassionate guidance for those planning a funeral. A trusted resource for families.' },
      { name: 'Cruse Bereavement Care', url: 'https://www.cruse.org.uk', desc: 'National charity offering free bereavement support, counselling and information to help people through grief.' },
    ],
  },
  {
    category: 'Professional Bodies',
    items: [
      { name: 'Academy of Professional Celebrants', url: 'https://www.funeralcelebrantacademy.co.uk', desc: 'The professional body that trains and certifies celebrants to the highest standards across the UK.' },
    ],
  },
];

export default function Links() {
  return (
    <>
      {/* Dark banner with background */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--off-white) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(138,158,122,0.12)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>Helpful Resources</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Useful <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Links</em>
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', maxWidth: 520, marginTop: 16, lineHeight: 1.9 }}>
            A collection of trusted organisations and resources that I recommend to the families and individuals I work with.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {links.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1} style={{ marginBottom: 50 }}>
              <h2 style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--apricot)', fontWeight: 500, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 30, height: 1, background: 'var(--apricot)', display: 'block' }}/>
                {group.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.items.map((link, li) => (
                  <Reveal key={link.name} delay={gi * 0.1 + li * 0.08}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                      padding: '28px 32px', background: 'var(--off-white)',
                      borderLeft: '3px solid transparent', transition: 'all 0.3s ease', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--sage)'; e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.transform = 'none'; }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark)', marginBottom: 6 }}>{link.name}</h3>
                        <p style={{ fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{link.desc}</p>
                      </div>
                      <ExternalLink size={18} color="var(--sage)" style={{ flexShrink: 0 }}/>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
