import { Link } from 'react-router-dom';
import { logo } from '../assets';

export default function Footer() {
  return (
    <footer style={{ background: '#1e2b1a', color: 'rgba(255,255,255,0.75)', padding: '70px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 50, marginBottom: 55 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, textDecoration: 'none' }}>
              <img src={logo} alt="Susan Stevens" style={{ height: 68, width: 68, objectFit: 'contain', filter: 'brightness(1.15)' }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: '#fff', lineHeight: 1.1 }}>Susan Stevens</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginTop: 2 }}>Celebrant</div>
              </div>
            </Link>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--apricot-light)', lineHeight: 1.5, marginBottom: 18 }}>
              Every Story Treasured with Love
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="mailto:hello@susanstevenscelebrant.co.uk"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                hello@susanstevenscelebrant.co.uk
              </a>
              <a href="tel:07493204657"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                07493 204657
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 18, fontWeight: 500 }}>Services</p>
            {[
              { label: 'Funerals', to: '/services#funerals' },
              { label: 'Weddings', to: '/services#weddings' },
              { label: 'Vow Renewals', to: '/services#vow-renewals' },
              { label: 'Life Celebrations', to: '/services#vow-renewals' },
              { label: 'Pet Funerals', to: '/services#pet-funerals' },
            ].map(s => (
              <Link key={s.label} to={s.to} style={{
                display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginBottom: 10, transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--apricot-light)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Promise */}
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 18, fontWeight: 500 }}>Our Promise</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Funerals: Honouring your story, held with love.',
                'Weddings: Celebrating your love, held with joy.',
                'Vow Renewals: Honouring your moments, cherished with warmth.',
                'Pet Funerals: Remembering your companion, treasured with heart.',
              ].map(p => (
                <p key={p} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Susan Stevens Celebrant. All rights reserved.
          </p>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
            Website made by the{' '}
            <a href="https://www.funeralcelebrantacademy.co.uk" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--sage-light)', textDecoration: 'underline' }}>
              Academy of Professional Celebrants
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
