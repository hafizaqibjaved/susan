import { logo } from '../assets';

export default function Footer() {
  return (
    <footer style={{ background: '#1e2b1a', color: 'rgba(255,255,255,0.75)', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 50 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={logo} alt="Logo" style={{ height: 44, width: 44, objectFit: 'contain', filter: 'brightness(1.2)' }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: '#fff', lineHeight: 1.1 }}>Susan Stevens</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-light)' }}>Celebrant</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--apricot-light)', lineHeight: 1.5 }}>
              Every Story Treasured with Love
            </p>
            <p style={{ fontSize: '0.78rem', marginTop: 12, lineHeight: 1.8 }}>
              <a href="mailto:hello@susanstevenscelebrant.co.uk" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}>
                hello@susanstevenscelebrant.co.uk
              </a><br/>
              <a href="tel:07493204657" style={{ color: 'rgba(255,255,255,0.6)' }}>07493 204657</a>
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 16 }}>Services</p>
            {['Funerals', 'Weddings', 'Vow Renewals', 'Life Celebrations', 'Pet Funerals'].map(s => (
              <a key={s} href="#services" style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='var(--apricot-light)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.6)'}>
                {s}
              </a>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 16 }}>Our Promise</p>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)' }}>
              Funerals: Honouring your story, held with love.<br/>
              Weddings: Celebrating your love, held with joy.<br/>
              Vow Renewals: Honouring your moments, cherished with warmth.<br/>
              Pet Funerals: Remembering your companion, treasured with heart.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            &copy; {new Date().getFullYear()} Susan Stevens Celebrant. All rights reserved.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            Website made by the{' '}
            <a href="https://www.funeralcelebrantacademy.co.uk" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--sage-light)', textDecoration: 'underline' }}>
              Academy of Professional Celebrants
            </a>
          </p>
        </div>
      </div>
      <style>{`@media(max-width:768px){footer .container > div:first-child > div{grid-template-columns:1fr !important;}}`}</style>
    </footer>
  );
}
