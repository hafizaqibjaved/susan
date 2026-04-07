import { Link } from 'react-router-dom';

const feeCards = [
  {
    category: 'Funerals, Memorials & Ashes',
    title: 'Funeral Ceremony',
    price: '265',
    desc: 'A calm, compassionate presence to guide you through this tender moment. A personal, sincere tribute to a life lived and loved.',
    dark: true,
  },
  {
    category: 'Funerals, Memorials & Ashes',
    title: 'Memorial Ceremony',
    price: '250',
    desc: 'For those who prefer to hold a service at a later date. A meaningful gathering to celebrate and remember.',
    dark: false,
  },
  {
    category: 'Ashes Ceremonies',
    title: 'Interring of Ashes',
    price: '80',
    desc: 'A gentle, personal ceremony for the interment of ashes in a meaningful place.',
    dark: false,
  },
  {
    category: 'Ashes Ceremonies',
    title: 'Scattering of Ashes',
    price: '80',
    desc: 'A deeply personal ceremony for scattering ashes in a place that held meaning for your loved one.',
    dark: false,
  },
  {
    category: 'Traditional, Civil, Symbolic or Vow Renewals',
    title: 'Weddings',
    price: '700',
    desc: 'Fully personalised ceremony writing and delivery. A ceremony shaped entirely by your love story.',
    dark: true,
  },
  {
    category: 'Renew Your Commitment',
    title: 'Vow Renewal',
    price: '600',
    desc: 'Celebrate your love and recommit in a ceremony that is warm, personal and entirely yours.',
    dark: false,
  },
  {
    category: 'Family & Children Ceremonies',
    title: 'Baby Naming',
    price: '250',
    desc: 'A beautiful welcome ceremony for your little one, held with joy and warmth.',
    dark: false,
  },
  {
    category: 'Beloved Companions',
    title: 'Pet Committal or Memorial',
    price: '150',
    desc: 'Pets are family. A compassionate ceremony celebrating the love and bond you shared.',
    dark: true,
  },
  {
    category: 'Funerals, Memorials, Celebrations of Life & Pet Memorials',
    title: 'Bespoke Ceremonies',
    price: null,
    desc: 'Have something unique in mind? All bespoke ceremonies are priced by prior discussion.',
    dark: false,
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

      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 20 }}>
            {feeCards.map(fee => (
              <div key={fee.title} style={{
                background: fee.dark ? 'var(--sage)' : 'var(--white)',
                padding: '36px 34px 30px',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'; }}>
                <p style={{
                  fontFamily: 'var(--sans)', fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: fee.dark ? 'rgba(255,255,255,0.65)' : 'var(--text-light)',
                  marginBottom: 14, lineHeight: 1.6,
                }}>{fee.category}</p>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: '1.65rem', fontWeight: 400,
                  color: fee.dark ? '#fff' : 'var(--text-dark)',
                  lineHeight: 1.2, marginBottom: 16,
                }}>{fee.title}</h3>
                {fee.price ? (
                  <p style={{ marginBottom: 14 }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: fee.dark ? 'rgba(255,255,255,0.65)' : 'var(--text-light)', marginRight: 5 }}>from</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 500, color: fee.dark ? '#fff' : 'var(--sage-dark)' }}>£{fee.price}</span>
                  </p>
                ) : (
                  <p style={{ marginBottom: 14, fontFamily: 'var(--serif)', fontSize: '1.2rem', color: fee.dark ? 'rgba(255,255,255,0.8)' : 'var(--sage-dark)', fontStyle: 'italic' }}>
                    Tailored to individual requirements
                  </p>
                )}
                <p style={{
                  fontSize: '0.82rem', lineHeight: 1.8,
                  color: fee.dark ? 'rgba(255,255,255,0.75)' : 'var(--text-mid)',
                  marginBottom: 28, flex: 1,
                }}>{fee.desc}</p>
                <Link to="/contact" style={{
                  display: 'block', textAlign: 'center', padding: '13px 20px',
                  background: fee.dark ? 'rgba(255,255,255,0.15)' : 'var(--sage)',
                  color: '#fff',
                  fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 500,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  border: fee.dark ? '1px solid rgba(255,255,255,0.3)' : 'none',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = fee.dark ? 'rgba(255,255,255,0.25)' : 'var(--sage-dark)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = fee.dark ? 'rgba(255,255,255,0.15)' : 'var(--sage)'; }}>
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: 20, padding: '60px', background: '#1e2b1a',
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
        <style>{`@media(max-width:900px){.fees-grid{grid-template-columns:1fr 1fr !important;} } @media(max-width:600px){.fees-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}
