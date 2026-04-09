import { Link } from 'react-router-dom';

const feeGroups = [
  {
    category: 'Funeral Services',
    icon: '🕊',
    accent: 'var(--sage)',
    items: [
      { title: 'Funeral Ceremony', price: '265', desc: 'A calm, compassionate presence to guide you through this tender moment. A personal, sincere tribute to a life lived and loved.', dark: true },
      { title: 'Memorial Ceremony', price: '250', desc: 'For those who prefer to hold a service at a later date. A meaningful gathering to celebrate and remember.', dark: false },
      { title: 'Interring of Ashes', price: '80', desc: 'A gentle, personal ceremony for the interment of ashes in a meaningful place.', dark: false },
      { title: 'Scattering of Ashes', price: '80', desc: 'A deeply personal ceremony for scattering ashes in a place that held meaning for your loved one.', dark: false },
    ],
  },
  {
    category: 'Celebrations of Love',
    icon: '💍',
    accent: 'var(--apricot)',
    items: [
      { title: 'Wedding Ceremony', price: '700', desc: 'Fully personalised ceremony writing and delivery. A ceremony shaped entirely by your love story and your day.', dark: true },
      { title: 'Vow Renewal', price: '600', desc: 'Celebrate your love and recommit in a ceremony that is warm, personal and entirely yours.', dark: false },
      { title: 'Baby Naming', price: '250', desc: 'A beautiful, heartfelt welcome ceremony for your new arrival, held with joy and warmth.', dark: false },
    ],
  },
  {
    category: 'Special Ceremonies',
    icon: '✨',
    accent: 'var(--sage-dark)',
    items: [
      { title: 'Pet Committal or Memorial', price: '150', desc: 'Pets are family. A compassionate ceremony celebrating the love and bond you shared.', dark: true },
      { title: 'Bespoke Ceremonies', price: null, desc: 'Have something unique in mind? All bespoke ceremonies are tailored to you and priced by prior discussion.', dark: false },
    ],
  },
];

function FeeCard({ item, accent }) {
  return (
    <div style={{
      background: item.dark ? accent : 'var(--white)',
      padding: '36px 34px 30px',
      display: 'flex', flexDirection: 'column',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.13)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'; }}>

      {/* Top accent bar */}
      <div style={{ width: 32, height: 3, background: item.dark ? 'rgba(255,255,255,0.4)' : accent, marginBottom: 22 }}/>

      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: '1.55rem', fontWeight: 400,
        color: item.dark ? '#fff' : 'var(--text-dark)',
        lineHeight: 1.2, marginBottom: 14,
      }}>{item.title}</h3>

      {item.price ? (
        <p style={{ marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: item.dark ? 'rgba(255,255,255,0.6)' : 'var(--text-light)', marginRight: 5 }}>from</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: '2.1rem', fontWeight: 500, color: item.dark ? '#fff' : accent }}>£{item.price}</span>
        </p>
      ) : (
        <p style={{ marginBottom: 14, fontFamily: 'var(--serif)', fontSize: '1.1rem', fontStyle: 'italic', color: item.dark ? 'rgba(255,255,255,0.85)' : accent }}>
          Tailored to your requirements
        </p>
      )}

      <p style={{
        fontSize: '0.82rem', lineHeight: 1.85,
        color: item.dark ? 'rgba(255,255,255,0.75)' : 'var(--text-mid)',
        marginBottom: 28, flex: 1,
      }}>{item.desc}</p>

      <Link to="/contact" style={{
        display: 'block', textAlign: 'center', padding: '13px 20px',
        background: item.dark ? 'rgba(255,255,255,0.15)' : accent,
        color: '#fff',
        fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 500,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        border: item.dark ? '1px solid rgba(255,255,255,0.3)' : 'none',
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
        Enquire Now
      </Link>
    </div>
  );
}

export default function Fees() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, #1a2a1c 0%, #141a14 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(212,149,106,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>Transparent Pricing</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Ceremony <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Fees</em>
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', maxWidth: 540, marginTop: 16, lineHeight: 1.9 }}>
            All fees are discussed openly during your initial enquiry. There is no obligation and no pressure. Travel costs may apply depending on your location.
          </p>
        </div>
      </section>

      {/* Fee groups */}
      <section style={{ padding: '80px 0 100px', background: '#243228' }}>
        <div className="container">
          {feeGroups.map((group, gi) => (
            <div key={group.category} style={{ marginBottom: gi < feeGroups.length - 1 ? 80 : 0 }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: '50%',
                  background: group.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.9rem', fontWeight: 400, color: '#f5f2ee', lineHeight: 1.1 }}>
                    {group.category}
                  </h2>
                </div>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }}/>
              </div>

              {/* Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 18 }} className="fee-cards-grid">
                {group.items.map(item => (
                  <FeeCard key={item.title} item={item} accent={group.accent} />
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div style={{
            marginTop: 60, padding: '60px 50px', background: 'var(--sage)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 30,
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: '#fff', fontWeight: 300, marginBottom: 10 }}>
                Not sure which service you need?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 480 }}>
                I am always happy to have an initial conversation with no obligation. Just get in touch and we can talk through what feels right for you.
              </p>
            </div>
            <Link to="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Get in Touch</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:600px) { .fee-grid { grid-template-columns: 1fr !important; } }
      `}</style>
      <style>{`
        @media(max-width:900px){
          .fee-cards-grid{grid-template-columns:1fr 1fr !important;}
        }
        @media(max-width:500px){
          .fee-cards-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </>
  );
}