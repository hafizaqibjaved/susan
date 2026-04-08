import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#1e2b1a', color: 'rgba(255,255,255,0.75)' }}>
      <div className="container" style={{ padding: '60px 40px 30px' }}>
        {/* Top grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'inline-block', marginBottom: 16 }}>
              <Logo size={90} light={true} />
            </Link>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--apricot-light)', lineHeight: 1.6, marginBottom: 16 }}>
              Every Story Treasured with Love
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="mailto:hello@susanstevenscelebrant.co.uk"
                style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', wordBreak: 'break-all' }}
                onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                hello@susanstevenscelebrant.co.uk
              </a>
              <a href="tel:07493204657"
                style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                07493 204657
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 16, fontWeight: 500 }}>Services</p>
            {['Funerals', 'Weddings', 'Vow Renewals', 'Life Celebrations', 'Pet Funerals'].map(s => (
              <Link key={s} to="/services" style={{
                display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 9, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                {s}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 16, fontWeight: 500 }}>Quick Links</p>
            {[
              { label: 'About Me', to: '/about' },
              { label: 'Fees', to: '/fees' },
              { label: 'FAQs', to: '/faqs' },
              { label: 'Useful Links', to: '/links' },
              { label: 'Contact', to: '/contact' },
            ].map(l => (
              <Link key={l.label} to={l.to} style={{
                display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 9, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)' }}>
            &copy; {new Date().getFullYear()} Susan Stevens Celebrant. All rights reserved.
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)' }}>
            Website made by the{' '}
            <a href="https://www.funeralcelebrantacademy.co.uk" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--sage-light)', textDecoration: 'underline' }}>
              Academy of Professional Celebrants
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-brand { text-align: center; }
          .footer-brand a:first-child { display: flex; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}
