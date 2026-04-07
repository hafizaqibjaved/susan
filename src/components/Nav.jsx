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
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Nav is always solid white when menu is open
  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      {/* Main nav bar - always on top */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1001,
        background: menuOpen ? '#1e2b1a' : (isTransparent ? 'transparent' : 'rgba(255,255,255,0.98)'),
        backdropFilter: isTransparent && !menuOpen ? 'none' : 'blur(12px)',
        boxShadow: isTransparent && !menuOpen ? 'none' : '0 1px 24px rgba(0,0,0,0.07)',
        transition: 'background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease',
        padding: scrolled ? '8px 0' : '14px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo - hidden when mobile menu is open */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s ease', pointerEvents: menuOpen ? 'none' : 'auto' }}>
            <Logo size={scrolled ? 64 : 80} light={isTransparent} />
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => {
              const active = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link to={link.to} style={{
                    fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: active ? 500 : 400,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: isTransparent
                      ? (active ? '#fff' : 'rgba(255,255,255,0.78)')
                      : (active ? 'var(--sage-dark)' : 'var(--text-mid)'),
                    transition: 'color 0.2s',
                    borderBottom: active ? `1.5px solid ${isTransparent ? '#fff' : 'var(--sage)'}` : '1.5px solid transparent',
                    paddingBottom: 2,
                  }}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/contact" className="btn-primary" style={{ padding: '11px 26px', fontSize: '0.68rem' }}>
                Enquire
              </Link>
            </li>
          </ul>

          {/* Burger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              flexDirection: 'column', gap: 6, padding: 6,
              zIndex: 1002,
            }}
            className="burger"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2, borderRadius: 2,
                background: isTransparent && !menuOpen ? '#fff' : 'var(--sage-dark)',
                transition: 'all 0.3s ease',
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 8px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -8px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        // Solid dark sage background - no cream, more elegant and no bleed-through
        background: '#1e2b1a',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 100,
        paddingBottom: 'max(40px, env(safe-area-inset-bottom))',
        paddingLeft: 24,
        paddingRight: 24,
        pointerEvents: menuOpen ? 'all' : 'none',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        overflowY: 'auto',
      }}>
        {/* Logo at top of menu - light version on dark bg */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, marginTop: 20 }}>
          <Logo size={80} light={true} />
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1, justifyContent: 'center' }}>
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.6rem, 5vw, 2rem)',
                  fontWeight: 300,
                  color: active ? 'var(--apricot-light)' : 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.04em',
                  padding: '10px 0',
                  transition: 'color 0.2s',
                  borderBottom: active ? '1px solid rgba(212,149,106,0.4)' : '1px solid transparent',
                  minWidth: 180,
                  textAlign: 'center',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Enquire button - always fully visible at bottom */}
        <div style={{ width: '100%', maxWidth: 280, paddingBottom: 8 }}>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              padding: '16px 24px',
              background: 'var(--sage)',
              color: '#fff',
              fontFamily: 'var(--sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--sage-dark)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--sage)'}
          >
            Enquire Now
          </Link>
          <p style={{
            textAlign: 'center',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.3)',
            marginTop: 16,
          }}>
            Every Story Treasured with Love
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .desktop-nav{ display:none !important; }
          .burger{ display:flex !important; }
        }
      `}</style>
    </>
  );
}
