import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Links', to: '/links' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Nav bar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1001,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '6px 0' : '10px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} className="nav-logo">
            <Logo size={scrolled ? 58 : 72} light={false} />
          </Link>

          {/* Desktop nav links */}
          <ul style={{ display: 'flex', gap: 26, listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map(link => {
              const active = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link to={link.to} style={{
                    fontFamily: 'var(--sans)', fontSize: '0.72rem',
                    fontWeight: active ? 500 : 400,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: active ? 'var(--sage-dark)' : 'var(--text-mid)',
                    transition: 'color 0.2s',
                    borderBottom: active ? '1.5px solid var(--sage)' : '1.5px solid transparent',
                    paddingBottom: 2, textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--sage-dark)'}
                  onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--sage-dark)' : 'var(--text-mid)'}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Burger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', flexDirection: 'column', gap: 5,
              padding: 6, zIndex: 1002,
            }}
            className="burger"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: 'var(--sage-dark)',
                transition: 'all 0.3s ease',
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 7px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -7px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay — no Enquire button, just nav links */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--cream)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 'max(48px, env(safe-area-inset-bottom))',
        paddingLeft: 24,
        paddingRight: 24,
        pointerEvents: menuOpen ? 'all' : 'none',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        overflowY: 'auto',
        gap: 0,
      }}>
        {/* Apricot divider */}
        <div style={{ width: 36, height: 1, background: 'var(--apricot)', opacity: 0.7, marginBottom: 28 }}/>

        {/* Nav links — centred, well spaced */}
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.45rem, 5vw, 1.85rem)',
                  fontWeight: 300,
                  color: active ? 'var(--sage-dark)' : 'var(--text-dark)',
                  letterSpacing: '0.04em',
                  padding: '10px 0',
                  transition: 'color 0.2s',
                  borderBottom: active ? '1px solid var(--apricot)' : '1px solid transparent',
                  minWidth: 200,
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--sage-dark)'}
                onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--sage-dark)' : 'var(--text-dark)'}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Strapline at bottom */}
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: '0.78rem', color: 'var(--text-light)',
          marginTop: 32, textAlign: 'center',
        }}>
          Every Story Treasured with Love
        </p>
      </div>

      <style>{`
        @media(max-width:960px){
          .desktop-nav{ display:none !important; }
          .burger{ display:flex !important; }
          .nav-logo{ display:flex !important; }
        }
      `}</style>
    </>
  );
}
