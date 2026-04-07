import { Link } from 'react-router-dom';
const links = [
  {
    category: 'Bereavement Support',
    items: [
      { name: 'The Good Funeral Guide', url: 'https://www.goodfuneralguide.co.uk', desc: 'Independent, compassionate guidance for those planning a funeral. A trusted resource for families.' },
      { name: 'Cruse Bereavement Care', url: 'https://www.cruse.org.uk', desc: 'National charity offering free bereavement support, counselling and information to help people through grief.' },
    ],
  },
  {
    category: 'Professional Bodies',
    items: [
      { name: 'Academy of Professional Celebrants', url: 'https://www.funeralcelebrantacademy.co.uk', desc: 'The professional body that trains and certifies celebrants to the highest standards across the UK.' },
    ],
  },
];

export default function Links() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(138,158,122,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag">Helpful Resources</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15 }}>
            Useful <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Links</em>
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', maxWidth: 520, marginTop: 16, lineHeight: 1.9 }}>
            A collection of trusted organisations and resources that I recommend to the families and individuals I work with.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {links.map(group => (
            <div key={group.category} style={{ marginBottom: 60 }}>
              <h2 style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--apricot)', fontWeight: 500, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 30, height: 1, background: 'var(--apricot)', display: 'block' }}/>
                {group.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.items.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'grid', gridTemplateColumns: '1fr auto',
                    alignItems: 'center', gap: 20,
                    padding: '32px 36px', background: 'var(--off-white)',
                    borderLeft: '3px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--sage)'; e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.transform = 'none'; }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-dark)', marginBottom: 8 }}>{link.name}</h3>
                      <p style={{ fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{link.desc}</p>
                    </div>
                    <span style={{ fontSize: '1.2rem', color: 'var(--sage)', flexShrink: 0 }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
