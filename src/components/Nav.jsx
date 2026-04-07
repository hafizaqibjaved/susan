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

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: isTransparent ? 'transparent' : 'rgba(255,255,255,0.97)',
      backdropFilter: isTransparent ? 'none' : 'blur(12px)',
      boxShadow: isTransparent ? 'none' : '0 1px 24px rgba(0,0,0,0.07)',
      transition: 'all 0.4s ease',
      padding: scrolled ? '8px 0' : '14px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo size={scrolled ? 64 : 80} light={isTransparent} />
        </Link>

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

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 6, padding: 4,
        }} className="burger">
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 1.5,
              background: isTransparent ? '#fff' : 'var(--text-dark)',
              transition: 'all 0.3s ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,6px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-6px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'var(--cream)', zIndex: -1,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.77,0,0.18,1)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30,
      }}>
        <Logo size={90} />
        <div style={{ width: 40, height: 1, background: 'var(--apricot)', margin: '4px 0 16px' }}/>
        {navLinks.map(link => (
          <Link key={link.label} to={link.to}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 300,
              color: location.pathname === link.to ? 'var(--sage-dark)' : 'var(--text-dark)',
              letterSpacing: '0.05em',
            }}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 10 }}>Enquire Now</Link>
      </div>

      <style>{`
        @media(max-width:960px){ .desktop-nav{ display:none !important; } .burger{ display:flex !important; } }
      `}</style>
    </nav>
  );
}
