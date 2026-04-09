import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { photo2, photo5 } from '../assets';
import { APCBadge } from '../components/APCComponents';

// ── Scroll animation hook ──────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const [ref, visible] = useReveal();
  const transforms = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)', none: 'none' };
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}



const services = [
  { title: 'Funerals', icon: '🕊', text: 'A calm, compassionate presence to guide you through this tender moment. Personal, sincere and a gentle tribute to a life lived and loved.' },
  { title: 'Weddings', icon: '💍', text: 'Your love story is unique. Together we craft a ceremony that is personal, heartfelt, and entirely yours.' },
  { title: 'Vow Renewals', icon: '🌿', text: 'Every milestone deserves recognition. Ceremonies designed to be deeply personal, heartfelt and entirely yours.' },
  { title: 'Life Celebrations', icon: '✨', text: 'Celebrating every meaningful moment that deserves to be honoured with warmth and connection.' },
  { title: 'Pet Funerals', icon: '🐾', text: 'Pets are family. I create ceremonies that honour your companion\'s life and celebrate the love you shared.' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}/>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(10,18,10,0.55) 0%, rgba(10,18,10,0.42) 50%, rgba(10,18,10,0.65) 100%)' }}/>

        {/* Full-width centred content */}
        <div style={{ position: 'relative', zIndex: 3, width: '100%', paddingTop: 100 }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 400, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: 'var(--apricot-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28,
              animation: 'fadeUp 0.8s ease 0.1s both',
            }}>
              <span style={{ display: 'block', width: 30, height: 1, background: 'var(--apricot-light)' }}/>
              APC Certified Celebrant
              <span style={{ display: 'block', width: 30, height: 1, background: 'var(--apricot-light)' }}/>
            </p>

            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 300,
              color: '#fff', lineHeight: 1.0, marginBottom: 28,
              animation: 'fadeUp 0.8s ease 0.2s both',
            }}>
              Susan Stevens<br/>
              <em style={{ color: 'var(--apricot-light)', fontStyle: 'italic' }}>Celebrant</em>
            </h1>

            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic',
              color: 'rgba(255,255,255,0.88)', marginBottom: 18, fontWeight: 300,
              animation: 'fadeUp 0.8s ease 0.3s both',
            }}>
              Every Story Treasured with Love
            </p>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 44px',
              lineHeight: 1.9, animation: 'fadeUp 0.8s ease 0.4s both',
            }}>
              Life is made of moments that touch the heart — moments of love, moments of loss and moments that quietly change us forever. I am here to hold space for all of them, with warmth, care and deep respect for your story.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 36,
              animation: 'fadeUp 0.8s ease 0.5s both',
            }}>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 35px',
                background: 'transparent', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--sans)',
                fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
                border: '1.5px solid rgba(255,255,255,0.45)', transition: 'all 0.3s ease',
              }}>View Services</Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.8s ease 0.6s both' }}>
              <APCBadge dark={true} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
        `}</style>
      </section>

      {/* ── TRUST BAND ── */}
      <section style={{ background: 'var(--sage)', padding: '16px 0' }}>
        <div className="container trust-band" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {['Warm & Compassionate', 'Fully Personalised', 'APC Certified', 'Serving Families with Care'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)', fontWeight: 400,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--apricot-light)', display: 'block' }}/>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section-pad" style={{ background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <Reveal direction="left">
              <div className="about-images" style={{ position: 'relative' }}>
                <img src={photo5} alt="Susan Stevens" style={{ width: '100%', height: 460, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}/>
                <div style={{ background: 'var(--sage)', padding: '22px 26px', marginTop: 0, position: 'relative', zIndex: 2 }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: '#fff', lineHeight: 1.6 }}>
                    "Every life, every love, every story deserves to be honoured."
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="section-tag">Meet Susan</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, marginTop: 12, marginBottom: 28, lineHeight: 1.2 }}>
                Holding Space for Life's Most{' '}
                <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Meaningful Moments</em>
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 20 }}>
                Hello, my name is Susan and I work with people at some of the most meaningful points in life whether saying goodbye to someone deeply cherished, marking a commitment or celebrating a love story.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 20 }}>
                Every ceremony I create is personal, heartfelt and thoughtful. I take time to listen, understand and reflect on what is meaningful to you, so that every moment feels authentic, memorable, and deeply respectful.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 36 }}>
                Because every life, every love, every story deserves to be honoured.
              </p>
              <Link to="/contact" className="btn-primary">Enquire About Your Ceremony</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-tag" style={{ justifyContent: 'center', color: 'var(--apricot)' }}>What I Offer
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--text-dark)', marginTop: 12 }}>
            Ceremonies Shaped <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>By Your Story</em>
            </h2>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              <APCBadge dark={false} showLabel={true} size={48} />
            </div>
          </Reveal>

          <div className="three-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div style={{
                  background: i % 2 === 0 ? 'var(--white)' : 'var(--cream)',
                  padding: '44px 36px', height: '100%',
                  borderTop: '2px solid ' + (i % 2 === 0 ? 'var(--sage)' : 'var(--apricot)'),
                  transition: 'transform 0.3s ease, background 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = i % 2 === 0 ? 'var(--cream)' : 'var(--off-white)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? 'var(--white)' : 'var(--cream)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 18 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', fontWeight: 400, marginBottom: 14, color: 'var(--text-dark)' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>{s.text}</p>
                  <div style={{ width: 28, height: 1.5, background: 'var(--apricot)', marginTop: 24 }}/>
                </div>
              </Reveal>
            ))}
            {/* CTA card */}
            <Reveal delay={0.4}>
              <div style={{
                background: 'var(--sage)', padding: '44px 36px', height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                borderTop: '2px solid var(--apricot)',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.2rem', color: '#fff', lineHeight: 1.5, marginBottom: 28 }}>
                  "Because every life, every love, every story deserves to be honoured."
                </p>
                <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.68rem' }}>Get in Touch</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section style={{ height: 400, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${photo2})`,
          backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center 40%',
          WebkitBackgroundAttachment: 'scroll', filter: 'brightness(0.45)',
        }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,35,18,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 28, padding: '0 20px', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', maxWidth: 700, lineHeight: 1.4 }}>
              "I am here to hold space for your moments, all of them, with warmth, care and deep respect for your story."
            </p>
          </Reveal>
          <Link to="/contact" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>Begin Your Enquiry</Link>
        </div>
      </section>

      {/* ── FEES ── */}
      <section id="fees" className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Transparent Pricing</p>
            <h2 className="section-heading">Ceremony <em>Fees</em></h2>
          </Reveal>
          <div className="fees-home three-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { category: 'Funerals, Memorials & Ashes', title: 'Funeral & Memorial Services', price: '265', desc: 'Compassionate, fully personalised ceremonies honouring a life lived and loved.', dark: true },
              { category: 'Traditional, Civil, Symbolic or Vow Renewals', title: 'Weddings', price: '700', desc: 'Bespoke ceremonies shaped entirely around your love story and your day.', dark: false },
              { category: 'Family & Children Ceremonies', title: 'Baby Naming Ceremonies', price: '250', desc: 'A beautiful, heartfelt welcome ceremony for your new arrival.', dark: false },
              { category: 'Renew Your Commitment', title: 'Vow Renewals', price: '600', desc: 'Celebrate your love and recommit in a ceremony that is entirely yours.', dark: false },
              { category: 'Beloved Companions', title: 'Pet Funerals & Memorials', price: '150', desc: 'Gentle, compassionate ceremonies honouring the bond you shared.', dark: true },
              { category: 'Bespoke', title: 'Bespoke Ceremonies', price: null, desc: 'Have something unique in mind? All bespoke ceremonies are priced by prior discussion.', dark: false },
            ].map((fee, i) => (
              <Reveal key={fee.title} delay={i * 0.07}>
                <div style={{
                  background: fee.dark ? 'var(--sage)' : 'var(--white)',
                  padding: '36px 32px 28px', display: 'flex', flexDirection: 'column',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)', height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}>
                  <div style={{ width: 32, height: 3, background: fee.dark ? 'rgba(255,255,255,0.4)' : 'var(--apricot)', marginBottom: 20 }}/>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: fee.dark ? 'rgba(255,255,255,0.6)' : 'var(--text-light)', marginBottom: 12, lineHeight: 1.6 }}>{fee.category}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400,
                    color: fee.dark ? '#fff' : 'var(--text-dark)', lineHeight: 1.2, marginBottom: 14 }}>{fee.title}</h3>
                  {fee.price ? (
                    <p style={{ marginBottom: 14 }}>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: fee.dark ? 'rgba(255,255,255,0.65)' : 'var(--text-light)', marginRight: 4 }}>from</span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.9rem', fontWeight: 500, color: fee.dark ? '#fff' : 'var(--sage-dark)' }}>£{fee.price}</span>
                    </p>
                  ) : (
                    <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: fee.dark ? 'rgba(255,255,255,0.8)' : 'var(--sage-dark)', marginBottom: 14 }}>By prior discussion</p>
                  )}
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: fee.dark ? 'rgba(255,255,255,0.72)' : 'var(--text-mid)', marginBottom: 24, flex: 1 }}>{fee.desc}</p>
                  <Link to="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '12px 20px',
                    background: fee.dark ? 'rgba(255,255,255,0.15)' : 'var(--sage)', color: '#fff',
                    fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 500,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    border: fee.dark ? '1px solid rgba(255,255,255,0.3)' : 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
                    Enquire Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, fontSize: '0.82rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
            All fees discussed openly during your initial no-obligation consultation. Travel costs may apply.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>The Journey</p>
            <h2 className="section-heading">How We <em>Work Together</em></h2>
          </Reveal>
          <div className="four-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 1,
              background: 'linear-gradient(to right, var(--sage-light), var(--apricot-light), var(--sage-light))',
            }}/>
            {[
              { num: '01', title: 'Get in Touch', text: 'Reach out by phone, email or contact form. I will respond warmly and without pressure.' },
              { num: '02', title: 'Initial Chat', text: 'We have a relaxed conversation to understand what you need and how I can help.' },
              { num: '03', title: 'Craft Together', text: 'I write your ceremony, guided entirely by your story, wishes, and what matters most.' },
              { num: '04', title: 'Your Day', text: 'I deliver your ceremony with care, warmth, and complete professionalism.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--sage)' : 'var(--apricot)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px', position: 'relative', zIndex: 1,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: '#fff', fontWeight: 500 }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: 12, fontWeight: 400 }}>{step.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section id="faqs" className="section-pad" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Questions</p>
            <h2 className="section-heading">Frequently <em>Asked Questions</em></h2>
          </Reveal>
          <FaqList/>
          <p style={{ textAlign: 'center', marginTop: 50, fontSize: '0.85rem', color: 'var(--text-mid)' }}>
            Have more questions? <Link to="/contact" style={{ color: 'var(--sage-dark)', textDecoration: 'underline' }}>Contact Susan directly</Link>
          </p>
        </div>
      </section>

      {/* ── LINKS (no gap fix - only 3 items so use 3-col) ── */}
      <section id="links" className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <Reveal>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Helpful Resources</p>
            <h2 className="section-heading" style={{ marginBottom: 40 }}>Useful <em>Links</em></h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="three-col-grid">
            {[
              { name: 'The Good Funeral Guide', url: 'https://www.goodfuneralguide.co.uk', desc: 'Guidance and support for funeral planning' },
              { name: 'Cruse Bereavement Care', url: 'https://www.cruse.org.uk', desc: 'Bereavement support and counselling' },
              { name: 'Academy of Professional Celebrants', url: 'https://www.funeralcelebrantacademy.co.uk', desc: 'Professional celebrant training and standards' },
            ].map((link, i) => (
              <Reveal key={link.name} delay={i * 0.1}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{
                  padding: '32px 24px', background: 'var(--cream)',
                  display: 'block', textAlign: 'left', height: '100%',
                  transition: 'all 0.3s ease', borderLeft: '3px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--sage)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}>
                  <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: 8 }}>{link.name}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{link.desc}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="section-pad" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <Reveal direction="left">
              <p className="section-tag" style={{ color: 'var(--apricot)' }}>Get in Touch</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-dark)', fontWeight: 300, marginTop: 12, marginBottom: 24, lineHeight: 1.2 }}>
                Let's Start a<br/><em style={{ color: 'var(--apricot-dark)', fontStyle: 'italic' }}>Conversation</em>
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 40 }}>
                I would love to hear your story. Please get in touch and I will respond warmly and promptly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <a href="mailto:hello@susanstevenscelebrant.co.uk"
                  style={{ fontSize: '0.78rem', color: 'var(--text-mid)', transition: 'color 0.2s', wordBreak: 'break-all', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                  hello@susanstevenscelebrant.co.uk
                </a>
                <a href="tel:07493204657"
                  style={{ fontSize: '0.78rem', color: 'var(--text-mid)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                  07493 204657
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <ContactForm/>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqList() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'What is a celebrant?', a: 'A celebrant is a professional who creates and delivers personalised ceremonies for life\'s significant moments, including funerals, weddings, naming ceremonies, and more. Unlike religious officiants, a celebrant creates ceremonies entirely tailored to you, your beliefs, and your story.' },
    { q: 'Are celebrant-led ceremonies legal?', a: 'For funerals, yes. For weddings, it depends on the type of ceremony. Many couples choose to have a legal signing at a registry office alongside a fully personalised celebrant ceremony. I will guide you through what works best for you.' },
    { q: 'How far in advance should I book?', a: 'I recommend getting in touch as early as possible, particularly for weddings. For funerals, I understand that notice is often short, and I will do everything I can to accommodate your needs quickly and with care.' },
    { q: 'What areas do you cover?', a: 'Please get in touch to discuss your location. I am happy to travel and will always be transparent about any travel costs involved.' },
    { q: 'How long does a ceremony last?', a: 'This varies entirely based on your wishes. A typical funeral ceremony might last 20 to 45 minutes, whilst a wedding ceremony can be tailored to any length. We will discuss what feels right for you.' },
    { q: 'Do you offer a free initial consultation?', a: 'Yes. I always offer a no-obligation chat so we can get to know each other and you can ask any questions you might have. There is absolutely no pressure.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div style={{ background: open === i ? 'var(--sage)' : 'var(--white)', transition: 'background 0.3s ease', overflow: 'hidden' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.08rem', color: open === i ? '#fff' : 'var(--text-dark)', fontWeight: 400 }}>{faq.q}</span>
              <span style={{ fontSize: '1.2rem', color: open === i ? '#fff' : 'var(--sage)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
            </button>
            {open === i && <div style={{ padding: '0 28px 24px' }}><p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>{faq.a}</p></div>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const inputStyle = { width: '100%', padding: '14px 16px', background: 'var(--off-white)', border: '1px solid rgba(0,0,0,0.08)', color: 'var(--text-dark)', fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 300, outline: 'none', transition: 'border-color 0.2s' };
  if (sent) return (
    <div style={{ padding: '60px 40px', background: 'var(--sage)', textAlign: 'center' }}>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: '#fff', marginBottom: 16 }}>Thank You</h3>
      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>Susan will be in touch with you warmly and promptly.</p>
    </div>
  );
  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage)'} onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage)'} onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
      </div>
      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="phone" value={form.phone} onChange={handle} placeholder="Phone (optional)" style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage)'} onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
        <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, color: form.type ? '#fff' : 'rgba(255,255,255,0.4)' }} onFocus={e => e.target.style.borderColor='var(--sage)'} onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}>
          <option value="">Ceremony Type</option>
          {['Funeral','Memorial','Wedding','Vow Renewal','Baby Naming','Pet Funeral','Other'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <textarea name="message" value={form.message} onChange={handle} placeholder="Your message..." rows={5} required style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor='var(--sage)'} onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>Send Message</button>
    </form>
  );
}
