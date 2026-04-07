import { useState } from 'react';
import { photo1, photo2, photo3, photo4, photo5 } from '../assets';

const services = [
  { title: 'Funerals', icon: '🕊', text: 'A calm, compassionate presence to guide you through this tender moment. Personal, sincere and a gentle tribute to a life lived and loved.' },
  { title: 'Weddings', icon: '💍', text: 'Your love story is unique. Together we craft a ceremony that is personal, heartfelt, and entirely yours.' },
  { title: 'Vow Renewals', icon: '🌿', text: 'Every milestone deserves recognition. Ceremonies designed to be deeply personal, heartfelt and entirely yours.' },
  { title: 'Life Celebrations', icon: '✨', text: 'Celebrating every meaningful moment that deserves to be honoured with warmth and connection.' },
  { title: 'Pet Funerals', icon: '🐾', text: 'Pets are family. I create ceremonies that honour your companion\'s life and celebrate the love you shared.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${photo1})`,
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          filter: 'brightness(0.45)',
          zIndex: 0,
        }}/>
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(26,43,20,0.6) 0%, rgba(138,158,122,0.25) 100%)',
        }}/>
        {/* Decorative leaf shapes */}
        <div style={{
          position: 'absolute', top: '15%', right: '8%', width: 280, height: 280,
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          border: '1px solid rgba(138,158,122,0.3)',
          animation: 'floatLeaf 6s ease-in-out infinite', zIndex: 2,
        }}/>
        <div style={{
          position: 'absolute', bottom: '20%', right: '12%', width: 160, height: 160,
          borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%',
          background: 'rgba(212,149,106,0.12)',
          animation: 'floatLeaf 8s ease-in-out infinite reverse', zIndex: 2,
        }}/>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: 100 }}>
          <div style={{ maxWidth: 700 }}>
            <p className="anim-fade-up anim-delay-1" style={{
              fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 400,
              letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--apricot-light)',
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24,
            }}>
              <span style={{ display: 'block', width: 30, height: 1, background: 'var(--apricot-light)' }}/>
              APC Certified Celebrant
            </p>

            <h1 className="anim-fade-up anim-delay-2" style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 300, color: '#fff', lineHeight: 1.05, marginBottom: 24,
            }}>
              Susan Stevens<br/>
              <em style={{ color: 'var(--apricot-light)', fontStyle: 'italic' }}>Celebrant</em>
            </h1>

            <p className="anim-fade-up anim-delay-3" style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', marginBottom: 14, fontWeight: 300,
            }}>
              Every Story Treasured with Love
            </p>

            <p className="anim-fade-up anim-delay-4" style={{
              fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', maxWidth: 520, lineHeight: 1.9, marginBottom: 40,
            }}>
              Life is made of moments that touch the heart moments of love, moments of loss and moments that quietly change us forever. I am here to hold space for all of them, with warmth, care and deep respect for your story.
            </p>

            <div className="anim-fade-up anim-delay-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Get in Touch</a>
              <a href="#services" className="btn-ghost" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.4)' }}>View Services</a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 3,
        }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}/>
        </div>
      </section>

      {/* Trust band */}
      <section style={{ background: 'var(--sage)', padding: '18px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>
          {['Warm & Compassionate', 'Fully Personalised', 'APC Certified', 'Serving Families with Care'].map(t => (
            <span key={t} style={{
              fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', fontWeight: 400,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--apricot-light)', display: 'block' }}/>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section id="about" style={{ padding: '120px 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        {/* BG decorative circle */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 400, height: 400,
          borderRadius: '50%', background: 'rgba(138,158,122,0.08)', zIndex: 0,
        }}/>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Image collage */}
            <div style={{ position: 'relative', height: 580 }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, width: '70%', height: '65%',
                backgroundImage: `url(${photo5})`,
                backgroundSize: 'cover', backgroundPosition: 'center top',
                borderRadius: '2px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}/>
              <div style={{
                position: 'absolute', right: 0, bottom: 60, width: '60%', height: '55%',
                backgroundImage: `url(${photo3})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: '2px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}/>
              {/* Quote card */}
              <div style={{
                position: 'absolute', left: '15%', bottom: 0,
                background: 'var(--sage)', padding: '24px 28px', maxWidth: 240,
                boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem', color: '#fff', lineHeight: 1.6 }}>
                  "Every life, every love, every story deserves to be honoured."
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-tag">Meet Susan</p>
              <h2 className="section-heading" style={{ marginBottom: 28 }}>
                Holding Space for <em>Life's Most</em><br/>Meaningful Moments
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 20 }}>
                Hello, my name is Susan and I work with people at some of the most meaningful points in life whether saying goodbye to someone deeply cherished, marking a commitment or celebrating a love story.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: 36 }}>
                Every ceremony I create is personal, heartfelt and thoughtful. I take time to listen, understand and reflect on what is meaningful to you, so that every moment feels authentic, memorable, and deeply respectful.
              </p>
              <a href="#contact" className="btn-primary">Enquire About Your Ceremony</a>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){#about .container > div{grid-template-columns:1fr !important;} #about .container > div > div:first-child{height:300px !important;}}`}</style>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '120px 0', background: 'var(--white)', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '40%',
          background: 'var(--cream)', zIndex: 0,
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
        }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>What I Offer</p>
            <h2 className="section-heading" style={{ marginTop: 12 }}>Ceremonies Shaped <em>By Your Story</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {services.map((s, i) => (
              <div key={s.title} style={{
                background: i % 2 === 0 ? 'var(--white)' : 'var(--cream)',
                padding: '50px 40px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{
                  position: 'absolute', bottom: -20, right: -10, fontSize: '6rem', opacity: 0.05,
                  fontFamily: 'var(--serif)', color: 'var(--sage-dark)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '1.6rem', marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: 14, color: 'var(--text-dark)' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>{s.text}</p>
                <div style={{ width: 28, height: 1.5, background: 'var(--apricot)', marginTop: 24 }}/>
              </div>
            ))}
            {/* Photo card */}
            <div style={{
              backgroundImage: `url(${photo2})`, backgroundSize: 'cover', backgroundPosition: 'center',
              minHeight: 300, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,43,20,0.45)' }}/>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '36px 40px' }}>
                <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.25rem', color: '#fff', lineHeight: 1.5, marginBottom: 20 }}>
                  "Because every life, every love, every story deserves to be honoured."
                </p>
                <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.68rem' }}>Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){#services .container > div:last-child{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Photo break */}
      <section style={{ height: 420, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${photo4})`,
          backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center 40%',
          filter: 'brightness(0.5)',
        }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,43,20,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 28, padding: '0 20px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', maxWidth: 700, lineHeight: 1.4 }}>
            "I am here to hold space for your moments, all of them, with warmth, care and deep respect for your story."
          </p>
          <a href="#contact" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>Begin Your Enquiry</a>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Transparent Pricing</p>
            <h2 className="section-heading">Ceremony <em>Fees</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { type: 'Funeral', price: 'From £265' },
              { type: 'Memorial Ceremony', price: 'From £250' },
              { type: 'Interring of Ashes', price: 'From £80' },
              { type: 'Scattering of Ashes', price: 'From £80' },
              { type: 'Wedding Ceremony', price: 'From £700' },
              { type: 'Vow Renewal', price: 'From £600' },
              { type: 'Baby Naming', price: 'From £250' },
              { type: 'Pet Committal / Memorial', price: 'From £150' },
              { type: 'Bespoke Ceremonies', price: 'By Discussion' },
            ].map(fee => (
              <div key={fee.type} style={{
                background: 'var(--white)', padding: '32px 30px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderBottomColor = 'var(--apricot)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-dark)' }}>{fee.type}</span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--sage-dark)', letterSpacing: '0.05em' }}>{fee.price}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 50, fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
            All fees are discussed during your initial enquiry. Travel costs may apply.
          </p>
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <a href="#contact" className="btn-primary">Check Availability</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '120px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>The Journey</p>
            <h2 className="section-heading">How We <em>Work Together</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, position: 'relative' }}>
            <div style={{
              position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 1,
              background: 'linear-gradient(to right, var(--sage-light), var(--apricot-light), var(--sage-light))',
            }}/>
            {[
              { num: '01', title: 'Get in Touch', text: 'Reach out by phone, email or contact form. I will respond warmly and without pressure.' },
              { num: '02', title: 'Initial Chat', text: 'We have a relaxed conversation to understand what you need and how I can help.' },
              { num: '03', title: 'Craft Together', text: 'I write your ceremony, guided entirely by your story, wishes, and what matters most.' },
              { num: '04', title: 'Your Day', text: 'I deliver your ceremony with care, warmth, and complete professionalism.' },
            ].map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: 70, height: 70, borderRadius: '50%',
                  background: i % 2 === 0 ? 'var(--sage)' : 'var(--apricot)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px', position: 'relative', zIndex: 1,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: '#fff', fontWeight: 500 }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: 12, fontWeight: 400 }}>{step.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){#services + section + section + section .container > div:last-child{grid-template-columns:1fr 1fr !important;}}`}</style>
      </section>

      {/* FAQs */}
      <section id="faqs" style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>Questions</p>
            <h2 className="section-heading">Frequently <em>Asked Questions</em></h2>
          </div>
          <FaqList/>
          <p style={{ textAlign: 'center', marginTop: 50, fontSize: '0.85rem', color: 'var(--text-mid)' }}>
            Have more questions? <a href="#contact" style={{ color: 'var(--sage-dark)', textDecoration: 'underline' }}>Contact Susan directly</a>
          </p>
        </div>
      </section>

      {/* Links */}
      <section id="links" style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <p className="section-tag" style={{ justifyContent: 'center' }}>Helpful Resources</p>
          <h2 className="section-heading" style={{ marginBottom: 40 }}>Useful <em>Links</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { name: 'The Good Funeral Guide', url: 'https://www.goodfuneralguide.co.uk', desc: 'Guidance and support for funeral planning' },
              { name: 'Cruse Bereavement Care', url: 'https://www.cruse.org.uk', desc: 'Bereavement support and counselling' },
              { name: 'Academy of Professional Celebrants', url: 'https://www.funeralcelebrantacademy.co.uk', desc: 'Professional celebrant training and standards' },
            ].map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                padding: '28px 24px', background: 'var(--cream)',
                display: 'block', textAlign: 'left',
                transition: 'all 0.3s ease', borderLeft: '3px solid transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--sage)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: 6 }}>{link.name}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{link.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '120px 0', background: '#1e2b1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 500, height: 500,
          borderRadius: '50%', background: 'rgba(138,158,122,0.08)',
        }}/>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p className="section-tag" style={{ '--apricot': 'var(--apricot-light)' }}>Get in Touch</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 300, marginTop: 12, marginBottom: 24, lineHeight: 1.2 }}>
                Let's Start a<br/><em style={{ color: 'var(--apricot-light)', fontStyle: 'italic' }}>Conversation</em>
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
                I would love to hear your story. Please get in touch and I will respond warmly and promptly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Email', value: 'hello@susanstevenscelebrant.co.uk', href: 'mailto:hello@susanstevenscelebrant.co.uk' },
                  { label: 'Mobile', value: '07493 204657', href: 'tel:07493204657' },
                  { label: 'Website', value: 'susanstevenscelebrant.co.uk', href: 'https://www.susanstevenscelebrant.co.uk' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)' }}>{c.label}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color='var(--apricot-light)'}
                      onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.85)'}>
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm/>
          </div>
        </div>
        <style>{`@media(max-width:768px){#contact .container > div{grid-template-columns:1fr !important;}}`}</style>
      </section>
    </>
  );
}

function FaqList() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'What is a celebrant?', a: 'A celebrant is a professional who creates and delivers personalised ceremonies for life\'s significant moments, including funerals, weddings, naming ceremonies, and more. Unlike religious officiants, a celebrant creates ceremonies entirely tailored to you, your beliefs, and your story.' },
    { q: 'Are celebrant-led ceremonies legal?', a: 'For funerals, yes. For weddings, it depends on the type of ceremony. Many couples choose to have a legal signing at a registry office alongside a fully personalised celebrant ceremony. I will guide you through what works best for you.' },
    { q: 'How far in advance should I book?', a: 'I recommend getting in touch as early as possible, particularly for weddings. For funerals, I understand that notice is often short, and I will do everything I can to accommodate your needs quickly and with care.' },
    { q: 'What areas do you cover?', a: 'Please get in touch to discuss your location. I am happy to travel and will always be transparent about any travel costs involved.' },
    { q: 'How long does a ceremony last?', a: 'This varies entirely based on your wishes. A typical funeral ceremony might last 20 to 45 minutes, whilst a wedding ceremony can be tailored to any length. We will discuss what feels right for you.' },
    { q: 'Do you offer a free initial consultation?', a: 'Yes. I always offer a no-obligation chat so we can get to know each other and you can ask any questions you might have. There is absolutely no pressure.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{
          background: open === i ? 'var(--sage)' : 'var(--white)',
          transition: 'background 0.3s ease',
          overflow: 'hidden',
        }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{
            width: '100%', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '1.08rem', color: open === i ? '#fff' : 'var(--text-dark)', fontWeight: 400 }}>
              {faq.q}
            </span>
            <span style={{ fontSize: '1.2rem', color: open === i ? '#fff' : 'var(--sage)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>+</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 28px 24px' }}>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', date: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)', color: '#fff',
    fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 300,
    outline: 'none', transition: 'border-color 0.2s',
  };

  if (sent) {
    return (
      <div style={{ padding: '60px 40px', background: 'rgba(138,158,122,0.15)', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 20 }}>🌿</div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: '#fff', marginBottom: 16 }}>Thank You</h3>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9 }}>
          Your message has been received. Susan will be in touch with you warmly and promptly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required style={inputStyle}
          onFocus={e => e.target.style.borderColor='var(--sage-light)'}
          onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required style={inputStyle}
          onFocus={e => e.target.style.borderColor='var(--sage-light)'}
          onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="phone" value={form.phone} onChange={handle} placeholder="Phone (optional)" style={inputStyle}
          onFocus={e => e.target.style.borderColor='var(--sage-light)'}
          onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
        <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, color: form.type ? '#fff' : 'rgba(255,255,255,0.4)' }}
          onFocus={e => e.target.style.borderColor='var(--sage-light)'}
          onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}>
          <option value="" style={{ background: '#1e2b1a' }}>Ceremony Type</option>
          {['Funeral', 'Memorial', 'Wedding', 'Vow Renewal', 'Baby Naming', 'Pet Funeral', 'Other'].map(o => (
            <option key={o} value={o} style={{ background: '#1e2b1a' }}>{o}</option>
          ))}
        </select>
      </div>
      <textarea name="message" value={form.message} onChange={handle} placeholder="Your message..." rows={5} required style={{ ...inputStyle, resize: 'vertical' }}
        onFocus={e => e.target.style.borderColor='var(--sage-light)'}
        onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}/>
      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
        Send Message
      </button>
    </form>
  );
}

