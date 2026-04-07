import { Link } from 'react-router-dom';
import { useState } from 'react';
import { photo3 } from '../assets';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', date: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  const inputStyle = {
    width: '100%', padding: '15px 18px',
    background: 'var(--off-white)', border: '1px solid rgba(0,0,0,0.08)',
    color: 'var(--text-dark)', fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 300,
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,149,106,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag">Reach Out</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15 }}>
            Let's Start a <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Conversation</em>
          </h1>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            {/* Left */}
            <div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 40 }}>
                I would love to hear from you. Whether you are in the early stages of planning or simply want to ask a question, please get in touch. I always respond warmly and promptly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 50 }}>
                {[
                  { label: 'Email', value: 'hello@susanstevenscelebrant.co.uk', href: 'mailto:hello@susanstevenscelebrant.co.uk', icon: '✉' },
                  { label: 'Mobile', value: '07493 204657', href: 'tel:07493204657', icon: '☏' },
                  { label: 'Website', value: 'susanstevenscelebrant.co.uk', href: 'https://www.susanstevenscelebrant.co.uk', icon: '⊹' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{
                    display: 'flex', alignItems: 'center', gap: 20, padding: '22px 24px',
                    background: 'var(--off-white)', transition: 'all 0.3s ease',
                    borderLeft: '3px solid transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--sage)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#fff', fontSize: '1rem' }}>{c.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--text-dark)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <img src={photo3} alt="Susan Stevens" style={{ width: '100%', height: 280, objectFit: 'cover', objectPosition: 'center top' }}/>
            </div>

            {/* Form */}
            {sent ? (
              <div style={{ padding: '80px 40px', background: 'var(--cream)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 20 }}>🌿</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: 16 }}>Thank You</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.9, maxWidth: 360, margin: '0 auto' }}>
                  Your message has been received. Susan will be in touch with you warmly and promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='var(--sage)'}
                      onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='var(--sage)'}
                      onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handle} style={inputStyle}
                      onFocus={e => e.target.style.borderColor='var(--sage)'}
                      onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Ceremony Type</label>
                    <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, color: form.type ? 'var(--text-dark)' : 'var(--text-light)' }}
                      onFocus={e => e.target.style.borderColor='var(--sage)'}
                      onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}>
                      <option value="">Please select...</option>
                      {['Funeral', 'Memorial', 'Wedding', 'Vow Renewal', 'Baby Naming', 'Pet Funeral', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 6 }}>Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={6} required style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor='var(--sage)'}
                    onBlur={e => e.target.style.borderColor='rgba(0,0,0,0.08)'}/>
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 6 }}>
                  Send Your Message
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`@media(max-width:900px){#contact .container > div{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
