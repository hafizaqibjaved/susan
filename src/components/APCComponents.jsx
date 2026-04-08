import { apcBadge, apcLogo } from '../assets';

// Official APC Badge (circular seal) - use on dark backgrounds
export function APCBadge({ size = 56, showLabel = true, dark = true }) {
  return (
    <a
      href="https://www.funeralcelebrantacademy.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      title="Academy of Professional Celebrants - Certified Member"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        textDecoration: 'none',
        padding: showLabel ? '8px 16px 8px 8px' : '0',
        background: showLabel ? (dark ? 'rgba(255,255,255,0.1)' : 'rgba(138,158,122,0.1)') : 'transparent',
        border: showLabel ? (dark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(138,158,122,0.25)') : 'none',
        borderRadius: 2,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <img
        src={apcBadge}
        alt="APC Certified"
        style={{ width: size, height: size, objectFit: 'contain', borderRadius: '50%', flexShrink: 0 }}
      />
      {showLabel && (
        <div>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '0.58rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: 2,
            color: dark ? 'rgba(255,255,255,0.65)' : 'var(--sage-dark)',
          }}>
            Fully Accredited Member
          </p>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '0.74rem', fontWeight: 400,
            color: dark ? 'rgba(255,255,255,0.9)' : 'var(--text-dark)',
          }}>
            Academy of Professional Celebrants
          </p>
        </div>
      )}
    </a>
  );
}

// Official APC Logo (horizontal banner) - use on light backgrounds
export function APCLogo({ height = 44 }) {
  return (
    <a
      href="https://www.funeralcelebrantacademy.co.uk"
      target="_blank"
      rel="noopener noreferrer"
      title="Academy of Professional Celebrants"
      style={{ display: 'inline-block', textDecoration: 'none', transition: 'opacity 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.78'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <img
        src={apcLogo}
        alt="The Academy of Professional Celebrants"
        style={{ height: height, width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </a>
  );
}
