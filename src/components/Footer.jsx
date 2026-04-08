import { Link } from 'react-router-dom';
import Logo from './Logo';
import { APCLogo } from './APCComponents';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--cream)', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div className="container" style={{ padding: '60px 40px 28px' }}>
        {/* Top grid */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: 16 }}>
              <Logo size={80} light={false} />
            </Link>
            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem',
              color: 'var(--apricot-dark)', lineHeight: 1.6, marginBottom: 16,
            }}>
              Every Story Treasured with Love
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="mailto:hello@susanstevenscelebrant.co.uk"
                style={{ fontSize: '0.78rem', color: 'var(--text-mid)', transition: 'color 0.2s', wordBreak: 'break-all' }}
                onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                hello@susanstevenscelebrant.co.uk
              </a>
              <a href="tel:07493204657"
                style={{ fontSize: '0.78rem', color: 'var(--text-mid)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                07493 204657
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: 16, fontWeight: 500 }}>Services</p>
            {['Funerals', 'Weddings', 'Vow Renewals', 'Life Celebrations', 'Pet Funerals'].map(s => (
              <Link key={s} to="/services" style={{
                display: 'block', fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: 9, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                {s}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: 16, fontWeight: 500 }}>Quick Links</p>
            {[
              { label: 'About Me', to: '/about' },
              { label: 'Fees', to: '/fees' },
              { label: 'FAQs', to: '/faqs' },
              { label: 'Useful Links', to: '/links' },
              { label: 'Contact', to: '/contact' },
            ].map(l => (
              <Link key={l.label} to={l.to} style={{
                display: 'block', fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: 9, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--sage-dark)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-mid)'}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>
            &copy; {new Date().getFullYear()} Susan Stevens Celebrant. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>Website made by</span>
            <APCLogo height={32} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
