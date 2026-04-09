import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const inputStyle = {
    width: '100%', padding: '15px 18px',
    background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-dark)', fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 300,
    outline: 'none', transition: 'border-color 0.2s',
  };



  return (
    <>
      {/* Hero banner with background */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, #1a2a1c 0%, #141a14 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'rgba(212,149,106,0.12)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>Reach Out</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Let's Start a <em style={{ color: 'var(--apricot-dark)', fontStyle: 'italic' }}>Conversation</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--page-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="contact-grid">
            {/* Left */}
            <Reveal direction="left">
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 40 }}>
                I would love to hear from you. Whether you are in the early stages of planning or simply want to ask a question, please get in touch. I always respond warmly and promptly.
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
                <a href="https://www.susanstevenscelebrant.co.uk"
                  style={{ fontSize: '0.78rem', color: 'var(--text-mid)', transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                  susanstevenscelebrant.co.uk
                </a>
              </div>
            </Reveal>
            {/* Form */}
            <Reveal direction="right" delay={0.1}>
              {sent ? (
                <div style={{ padding: '60px 40px', background: '#182018', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: 16 }}>Thank You</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>Susan will be in touch with you warmly and promptly.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage-light)'} onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.12)'}/>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage-light)'} onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.12)'}/>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} style={inputStyle} onFocus={e => e.target.style.borderColor='var(--sage-light)'} onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.12)'}/>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Ceremony Type</label>
                      <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, color: form.type ? 'var(--text-dark)' : 'var(--text-light)' }} onFocus={e => e.target.style.borderColor='var(--sage-light)'} onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.12)'}>
                        <option value="">Please select...</option>
                        {['Funeral','Memorial','Wedding','Vow Renewal','Baby Naming','Pet Funeral','Other'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Your Message *</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={7} required style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor='var(--sage-light)'} onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.12)'}/>
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 6 }}>Send Your Message</button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){
            .contact-grid{grid-template-columns:1fr !important; gap:40px !important;}
            .contact-form-row{grid-template-columns:1fr !important;}
          }
        `}</style>
      </section>
    </>
  );
}
