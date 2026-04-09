import { Link } from 'react-router-dom';
import { APCBadge } from '../components/APCComponents';
import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
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



const serviceImages = [
  'https://images.unsplash.com/photo-1544819667-9750f78eeaa2?auto=format&fit=crop&w=1280&q=80', // Funerals: White roses/flowers
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1280&q=80', // Weddings: Outdoor wedding arch
  'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1280&q=80', // Vow Renewals: Mixed pink/white flowers
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1280&q=80', // Pet Funerals: Peaceful garden path/light
];

const services = [
  {
    id: 'funerals', title: 'Funerals', icon: '🕊',
    tagline: 'Honouring your story, held with love.',
    content: [
      'Saying goodbye is never easy. I offer a calm, compassionate presence to guide you through this tender moment.',
      'Together we can create a ceremony that is personal, sincere and a gentle tribute to a life lived and loved. I work closely with you to truly reflect the person you\'ve lost, their story, their character and the memories that matter most.',
      'A place where smiles and tears sit side by side.',
    ],
    includes: ['Personal consultation with the family', 'Fully written and delivered ceremony', 'Tribute and biography of the person\'s life', 'Space for readings, music, and tributes', 'Sensitive handling of all arrangements'],
  },
  {
    id: 'weddings', title: 'Weddings', icon: '💍',
    tagline: 'Celebrating your love, held with joy.',
    content: [
      'Every love story is unique, and your ceremony should reflect that. I consider it an honour to listen to your journey, your values, and the moments that matter most.',
      'Together we can craft a ceremony that is personal, heartfelt, and entirely yours, a space where your love is honoured and your guests feel the warmth of every word.',
      'A day that feels truly yours, a ceremony which is shaped by your story and celebrated with love.',
    ],
    includes: ['Initial consultation to hear your story', 'Fully personalised ceremony script', 'Guidance on vows, readings, and rituals', 'Rehearsal where desired', 'Professional ceremony delivery on your day'],
  },
  {
    id: 'vow-renewals', title: 'Vow Renewals & Life Celebrations', icon: '🌿',
    tagline: 'Honouring your moments, cherished with warmth.',
    content: [
      'Every milestone, memory and personal journey deserves recognition. I design ceremonies that are deeply personal, heartfelt and entirely yours.',
      'Every story is listened to and held with care. Celebrating in a way that leaves a lasting sense of connection, meaning and warmth.',
    ],
    includes: ['Baby Naming Ceremonies', 'Vow Renewals', 'Celebration of Life ceremonies', 'Anniversary ceremonies', 'Bespoke milestone celebrations'],
  },
  {
    id: 'pet-funerals', title: 'Pet Funerals', icon: '🐾',
    tagline: 'Remembering your companion, treasured with heart.',
    content: [
      'Pets are family and saying goodbye can be deeply emotional. I create ceremonies that honour your companion\'s life and celebrate the love you shared.',
      'I hold your memories and the special bond they brought to your life, creating a gentle, heartfelt farewell.',
    ],
    includes: ['Personalised tribute to your pet', 'Compassionate, private ceremony', 'Space for family to share memories', 'Delivered with warmth and sensitivity'],
  },
];

export default function Services() {
  return (
    <>
      {/* Dark banner */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--off-white) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'rgba(212,149,106,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>What I Offer</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Ceremonies Shaped <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>By Your Story</em>
          </h1>
          <div style={{ marginTop: 28 }}>
            <APCBadge dark={false} showLabel={true} />
          </div>
        </div>
      </section>

      {/* Service sections - NO Susan photos */}
      {services.map((s, i) => {
        return (
          <section key={s.id} id={s.id} style={{ padding: '100px 0', background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)' }}>
            <div className="container">
              <div className="services-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>

                {/* Service background image */}
                <Reveal direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div style={{ direction: 'ltr', position: 'relative' }}>
                    <div style={{
                      width: '100%', height: 480,
                      backgroundImage: `url(${serviceImages[i]})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      position: 'relative', overflow: 'hidden',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px',
                    }}>
                      {/* Dark overlay for text readability */}
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(10,20,10,0.85) 0%, rgba(10,20,10,0.3) 55%, rgba(10,20,10,0.15) 100%)` }}/>
                      {/* Tagline card */}
                      <div style={{ position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', padding: '18px 22px', borderLeft: '3px solid var(--apricot)' }}>
                        <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: 8 }}>{s.icon}</span>
                        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: '#fff', lineHeight: 1.5 }}>{s.tagline}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.1}>
                  <div style={{ direction: 'ltr' }}>
                    <p className="section-tag">Service</p>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, marginTop: 12, marginBottom: 28, lineHeight: 1.2 }}>{s.title}</h2>
                    {s.content.map((p, j) => (
                      <p key={j} style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 16 }}>{p}</p>
                    ))}
                    <div style={{ marginTop: 32, padding: '26px 28px', background: 'var(--cream)', borderLeft: '3px solid var(--sage)' }}>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: 14, fontWeight: 500 }}>What's Included</p>
                      {s.includes.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                          <span style={{ color: 'var(--apricot)', marginTop: 3, flexShrink: 0, fontSize: '0.7rem' }}>✦</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 32 }}>
                      <Link to="/contact" className="btn-primary">Enquire About {s.title}</Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <style>{`
        @media(max-width:900px){
          .services-section-grid{grid-template-columns:1fr !important; direction:ltr !important; gap:30px !important;}
          .services-section-grid > div{direction:ltr !important;}
        }
      `}</style>
    </>
  );
}
