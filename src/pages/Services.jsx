import { Link } from 'react-router-dom';
import { photo1, photo2, photo3, photo4, photo5 } from '../assets';

// Each service has a UNIQUE image - no duplicates
const services = [
  {
    id: 'funerals',
    title: 'Funerals',
    icon: '🕊',
    tagline: 'Honouring your story, held with love.',
    image: photo4,
    content: [
      'Saying goodbye is never easy. I offer a calm, compassionate presence to guide you through this tender moment.',
      'Together we can create a ceremony that is personal, sincere and a gentle tribute to a life lived and loved. I work closely with you to create a ceremony that truly reflects the person you\'ve lost, their story, their character and the memories that matter most.',
      'A place where smiles and tears sit side by side.',
    ],
    includes: ['Personal consultation with the family', 'Fully written and delivered ceremony', 'Tribute and biography of the person\'s life', 'Space for readings, music, and tributes', 'Sensitive handling of all arrangements'],
  },
  {
    id: 'weddings',
    title: 'Weddings',
    icon: '💍',
    tagline: 'Celebrating your love, held with joy.',
    image: photo2,
    content: [
      'Every love story is unique, and your ceremony should reflect that. I consider it an honour to listen to your journey, your values, and the moments that matter most.',
      'Together we can craft a ceremony that is personal, heartfelt, and entirely yours, a space where your love is honoured and your guests feel the warmth of every word.',
      'A day that feels truly yours, a ceremony which is shaped by your story and celebrated with love.',
    ],
    includes: ['Initial consultation to hear your story', 'Fully personalised ceremony script', 'Guidance on vows, readings, and rituals', 'Rehearsal where desired', 'Professional ceremony delivery on your day'],
  },
  {
    id: 'vow-renewals',
    title: 'Vow Renewals & Life Celebrations',
    icon: '🌿',
    tagline: 'Honouring your moments, cherished with warmth.',
    image: photo1,
    content: [
      'Every milestone, memory and personal journey deserves recognition. I design ceremonies that are deeply personal, heartfelt and entirely yours.',
      'Every story is listened to and held with care. Celebrating in a way that leaves a lasting sense of connection, meaning and warmth.',
      'Whether you are marking an anniversary, celebrating a significant birthday, or simply wishing to gather loved ones for something meaningful, I am here to help.',
    ],
    includes: ['Baby Naming Ceremonies', 'Vow Renewals', 'Celebration of Life ceremonies', 'Anniversary ceremonies', 'Bespoke milestone celebrations'],
  },
  {
    id: 'pet-funerals',
    title: 'Pet Funerals',
    icon: '🐾',
    tagline: 'Remembering your companion, treasured with heart.',
    image: photo3,   // ← unique image, was photo4 (duplicate of funerals)
    content: [
      'Pets are family and saying goodbye can be deeply emotional. I create ceremonies that honour your companion\'s life and celebrate the love you shared.',
      'I hold your memories and the special bond they brought to your life, creating a gentle, heartfelt farewell that truly reflects the joy your beloved companion gave.',
    ],
    includes: ['Personalised tribute to your pet', 'Compassionate, private ceremony', 'Space for family to share memories', 'Delivered with warmth and sensitivity'],
  },
];

// APC Badge SVG inline
function APCBadge() {
  return (
    <a
      href="https://www.funeralcelebrantacademy.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      title="Academy of Professional Celebrants"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, boxShadow: '0 4px 16px rgba(138,158,122,0.35)',
      }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="12" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"/>
          <text x="13" y="11" textAnchor="middle" fontFamily="Georgia,serif" fontSize="7" fontWeight="700" fill="#fff" letterSpacing="0.5">APC</text>
          <line x1="5" y1="14" x2="21" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6"/>
          <text x="13" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="4.5" fill="rgba(255,255,255,0.8)" letterSpacing="0.3">CERTIFIED</text>
        </svg>
      </div>
      <div>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500, marginBottom: 1 }}>APC Certified</p>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--text-mid)' }}>Academy of Professional Celebrants</p>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'rgba(212,149,106,0.08)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag">What I Offer</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15 }}>
            Ceremonies Shaped <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>By Your Story</em>
          </h1>
          <div style={{ marginTop: 28 }}>
            <APCBadge />
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} style={{ padding: '100px 0', background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)' }}>
          <div className="container">
            <div className="services-section-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60, alignItems: 'center',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }}>
              {/* Image */}
              <div style={{ direction: 'ltr', position: 'relative' }}>
                <img src={s.image} alt={s.title} style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }}/>
                <div style={{
                  position: 'absolute', bottom: -20, left: i % 2 === 0 ? 'auto' : -20, right: i % 2 === 0 ? -20 : 'auto',
                  background: 'var(--apricot)', padding: '20px 28px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontStyle: 'italic', color: '#fff', marginTop: 4 }}>{s.tagline}</p>
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <p className="section-tag">Service</p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, marginTop: 12, marginBottom: 28, lineHeight: 1.2 }}>
                  {s.title}
                </h2>
                {s.content.map((p, j) => (
                  <p key={j} style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 16 }}>{p}</p>
                ))}
                <div style={{ marginTop: 32, padding: '28px 30px', background: 'var(--cream)', borderLeft: '3px solid var(--sage)' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: 14, fontWeight: 500 }}>What's Included</p>
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
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @media(max-width:900px){
          .services-section-grid{grid-template-columns:1fr !important; direction:ltr !important; gap:30px !important;}
          .services-section-grid > div{direction:ltr !important;}
        }
      `}</style>
    </>
  );
}
