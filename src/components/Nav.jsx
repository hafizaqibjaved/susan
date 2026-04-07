import { useState, useEffect } from 'react';
import { logo } from '../assets';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Links', href: '#links' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '14px 0' : '22px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Susan Stevens Celebrant" style={{ height: 52, width: 52, objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-dark)', lineHeight: 1.1 }}>
              Susan Stevens
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 400 }}>
              Celebrant
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} style={{
                fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.68rem' }}>
              Enquire
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 4
        }} className="burger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: 'var(--text-dark)',
              transition: 'all 0.3s ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--cream)', zIndex: -1,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 28,
      }}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 300,
              color: 'var(--text-dark)', letterSpacing: '0.05em',
            }}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Enquire Now</a>
      </div>

      <style>{`
        @media(max-width:900px){ .desktop-nav{ display:none !important; } .burger{ display:flex !important; } }
      `}</style>
    </nav>
  );
}
