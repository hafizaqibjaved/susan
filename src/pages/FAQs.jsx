import { Link } from 'react-router-dom';
import { useState } from 'react';

const faqs = [
  { category: 'About Celebrants', q: 'What is a celebrant?', a: 'A celebrant is a professional who creates and delivers personalised ceremonies for life\'s significant moments, including funerals, weddings, naming ceremonies, and more. Unlike religious officiants, a celebrant creates ceremonies entirely tailored to you, your beliefs, and your story.' },
  { category: 'About Celebrants', q: 'What is the difference between a celebrant and a registrar?', a: 'A registrar handles the legal side of a marriage or civil partnership. A celebrant creates and delivers a personal, meaningful ceremony. Many couples choose to have a short legal ceremony at a registry office and then hold their main celebrant-led ceremony in the venue and style of their choosing.' },
  { category: 'About Celebrants', q: 'Are celebrant-led ceremonies legal?', a: 'For funerals, yes. For weddings in England and Wales, a celebrant ceremony is not currently legally binding on its own, though legislation is expected to change in the future. Many couples have a registry office signing alongside a celebrant ceremony. I will guide you through the options.' },
  { category: 'Booking', q: 'How far in advance should I book?', a: 'For weddings and planned celebrations, I recommend getting in touch as early as possible to check availability. For funerals, I understand that notice is often short and will do everything I can to accommodate your needs quickly and with great care.' },
  { category: 'Booking', q: 'Do you offer a free initial consultation?', a: 'Yes, always. I offer a no-obligation conversation so we can get to know each other and you can ask any questions. There is absolutely no pressure.' },
  { category: 'Booking', q: 'What areas do you cover?', a: 'Please get in touch to discuss your location. I am happy to travel and will always be transparent about any travel costs involved.' },
  { category: 'The Ceremony', q: 'How long does a ceremony last?', a: 'This varies entirely based on your wishes. A typical funeral ceremony might last 20 to 45 minutes, whilst a wedding ceremony can be as short or as long as you like. We will discuss what feels right for you.' },
  { category: 'The Ceremony', q: 'Can I include readings, music, or rituals?', a: 'Absolutely. Ceremonies can include readings from family or friends, any music you choose, candle lighting, unity rituals, sand ceremonies, and much more. Your ceremony is entirely yours to shape.' },
  { category: 'The Ceremony', q: 'What happens if you are ill on the day?', a: 'I take my professional commitment to you extremely seriously and have contingency plans in place. In the very unlikely event of an emergency, I have trusted professional contacts I can call upon to ensure your ceremony is not affected.' },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);
  const categories = [...new Set(faqs.map(f => f.category))];

  return (
    <>
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--off-white) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(212,149,106,0.1)' }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-tag" style={{ }}>Common Questions</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginTop: 12, lineHeight: 1.15, color: 'var(--text-dark)' }}>
            Frequently <em style={{ color: 'var(--sage-dark)', fontStyle: 'italic' }}>Asked Questions</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: 60 }}>
              <h2 style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--apricot)', fontWeight: 500, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 30, height: 1, background: 'var(--apricot)', display: 'block' }}/>
                {cat}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {faqs.filter(f => f.category === cat).map((faq, i) => {
                  const key = `${cat}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} style={{ background: isOpen ? 'var(--sage)' : 'var(--off-white)', transition: 'background 0.3s ease', overflow: 'hidden' }}>
                      <button onClick={() => setOpen(isOpen ? null : key)} style={{
                        width: '100%', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                      }}>
                        <span style={{ fontFamily: 'var(--serif)', fontSize: '1.08rem', color: isOpen ? '#fff' : 'var(--text-dark)', fontWeight: 400 }}>{faq.q}</span>
                        <span style={{ fontSize: '1.2rem', color: isOpen ? '#fff' : 'var(--sage)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0, marginLeft: 20 }}>+</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 28px 24px' }}>
                          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.9 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 40, padding: '40px', background: 'var(--off-white)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: 20 }}>
              Still have questions? I would love to hear from you.
            </p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
