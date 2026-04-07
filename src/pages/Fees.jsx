const feeGroups = [
  {
    category: 'Funeral Services',
    color: 'var(--sage)',
    items: [
      { type: 'Funeral Ceremony', price: 'From £265', note: 'Full tribute and ceremony writing and delivery' },
      { type: 'Memorial Ceremony', price: 'From £250', note: 'For those who prefer a later service' },
      { type: 'Interring of Ashes', price: 'From £80', note: 'Graveside ceremony for ashes interment' },
      { type: 'Scattering of Ashes', price: 'From £80', note: 'Ceremony for scattering in a meaningful place' },
    ],
  },
  {
    category: 'Celebrations of Love',
    color: 'var(--apricot)',
    items: [
      { type: 'Wedding Ceremony', price: 'From £700', note: 'Fully personalised ceremony writing and delivery' },
      { type: 'Vow Renewal', price: 'From £600', note: 'Renew your commitment in style' },
      { type: 'Baby Naming', price: 'From £250', note: 'A beautiful welcome ceremony for your little one' },
    ],
  },
  {
    category: 'Special Ceremonies',
    color: 'var(--sage-dark)',
    items: [
      { type: 'Pet Committal or Memorial', price: 'From £150', note: 'Compassionate farewell for beloved companions' },
      { type: 'Bespoke Ceremonies', price: 'By Discussion', note: 'Have something unique in mind? Let\'s talk' },
    ],
  },
];

export default function Fees() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(212,149,106,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag">Transparent Pricing</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15 }}>
            Ceremony <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Fees</em>
          </h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', maxWidth: 540, marginTop: 16, lineHeight: 1.9 }}>
            All fees are discussed openly during your initial enquiry. There is no obligation and no pressure. Travel costs may apply depending on your location.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          {feeGroups.map((group, gi) => (
            <div key={group.category} style={{ marginBottom: 70 }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: group.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '1.1rem' }}>{['🕊', '💍', '✨'][gi]}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text-dark)' }}>{group.category}</h2>
                <div style={{ flex: 1, height: 1, background: 'var(--cream)' }}/>
              </div>

              {/* Fee cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {group.items.map((fee, fi) => (
                  <div key={fee.type} style={{
                    background: 'var(--off-white)',
                    padding: '32px 30px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    borderBottom: `3px solid transparent`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderBottomColor = group.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderBottomColor = 'transparent';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    {/* Number watermark */}
                    <div style={{
                      position: 'absolute', top: 10, right: 16,
                      fontFamily: 'var(--serif)', fontSize: '4rem', fontWeight: 600,
                      color: 'rgba(0,0,0,0.04)', lineHeight: 1, userSelect: 'none',
                    }}>{String(fi + 1).padStart(2, '0')}</div>

                    <div style={{
                      width: 32, height: 3,
                      background: group.color,
                      marginBottom: 20,
                    }}/>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-dark)', marginBottom: 8, lineHeight: 1.3 }}>
                      {fee.type}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: 20 }}>{fee.note}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <span style={{
                        fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 500,
                        color: group.color,
                      }}>{fee.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div style={{
            marginTop: 20, padding: '60px', background: '#1e2b1a',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 30,
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: '#fff', fontWeight: 300, marginBottom: 10 }}>
                Not sure which service you need?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 480 }}>
                I am always happy to have an initial conversation with no obligation. Just get in touch and we can talk through what feels right for you.
              </p>
            </div>
            <a href="/#contact" className="btn-primary" style={{ flexShrink: 0 }}>Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  );
}
