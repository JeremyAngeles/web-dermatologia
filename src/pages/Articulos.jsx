import React, { useState } from 'react';
import Footer from '../components/Footer';

const articulos = [
  {
    id: 1,
    categoria: "Skincare 101",
    titulo: "El orden correcto de tu rutina",
    extracto: "¿Va primero el sérum o la crema? Aprende a aplicar tus productos para maximizar su efectividad.",
    imagen: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=900",
    size: "main"
  },
  {
    id: 2,
    categoria: "Mitos vs Realidad",
    titulo: "¿El chocolate realmente causa acné?",
    extracto: "Desmentimos uno de los mitos más grandes de la dermatología.",
    imagen: "https://images.unsplash.com/photo-1548919973-5cdf5916ad7a?q=80&w=600",
    size: "small"
  },
  {
    id: 3,
    categoria: "Prevención",
    titulo: "El sol no descansa en invierno",
    extracto: "En Lima, la radiación atraviesa las nubes todo el año.",
    imagen: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=600",
    size: "small"
  }
];

const facts = [
  { icon: "✦", label: "Dato curioso", text: "La piel se renueva completamente cada 28 días." },
  { icon: "◎", label: "Prevención", text: "El protector solar evita hasta el 80% de las arrugas prematuras." },
  { icon: "◇", label: "Mito común", text: "Beber agua ayuda, pero la crema hidrata más directamente." },
  { icon: "◐", label: "Anatomía", text: "La piel es el órgano más grande del cuerpo humano." },
];

const strips = [
  { num: "01", cat: "Ingredientes activos", title: "Retinol: guía completa para principiantes" },
  { num: "02", cat: "Pieles sensibles", title: "Cómo calmar la piel reactiva en verano" },
  { num: "03", cat: "Antimanchas", title: "Vitamina C: ¿de día o de noche?" },
];

const categories = ["Todo", "Skincare 101", "Mitos vs Realidad", "Prevención", "Ingredientes"];

const ArrowIcon = ({ size = 12, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M7 3l3 3-3 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Articulos() {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const mainArticle = articulos.find(a => a.size === "main");
  const sideArticles = articulos.filter(a => a.size === "small");

  return (
    <>
      {/* Fuentes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .articulos-page * { box-sizing: border-box; }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        .card-img-zoom img { transition: transform 0.7s ease; }
        .card-img-zoom:hover img { transform: scale(1.04); }

        .pill-btn { transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .pill-btn:hover { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }

        .strip-item-hover { transition: background 0.2s; }
        .strip-item-hover:hover { background: #f5f3ef; }

        .fact-hover { transition: background 0.2s; }
        .fact-hover:hover { background: #f5f3ef; }

        .read-link-arrow { transition: transform 0.2s; }
        .card-img-zoom:hover .read-link-arrow { transform: translateX(4px); }

        .cta-btn-main { transition: opacity 0.2s; }
        .cta-btn-main:hover { opacity: 0.75; }
      `}</style>

      <div
        className="articulos-page font-body"
        style={{ background: '#f7f5f1', minHeight: '100vh', padding: '180px 34px 90px' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* ── HERO ── */}
          <header style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: 16 }}>
              Blog Dermocosmético
            </span>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)', fontWeight: 300, fontStyle: 'italic', color: '#2a2a2a', lineHeight: 1.0, margin: '0 0 20px', letterSpacing: '-0.02em' }}
            >
              Ciencia<br />& Belleza
            </h1>
            <div style={{ width: 40, height: 1, background: '#ccc', margin: '20px auto' }} />
            <p style={{ fontSize: 15, fontWeight: 300, color: '#666', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Aprende a cuidar tu piel con información respaldada por especialistas. Sin mitos, solo resultados reales.
            </p>
          </header>

          {/* ── PILLS ── */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className="pill-btn"
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '8px 20px', border: '0.5px solid #ccc', borderRadius: 100,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  background: activeCategory === cat ? '#1a1a1a' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#666',
                  borderColor: activeCategory === cat ? '#1a1a1a' : '#ccc',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── FACTS ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 1, background: '#e0ddd8', border: '0.5px solid #e0ddd8',
            borderRadius: 16, overflow: 'hidden', marginBottom: 64
          }}>
            {facts.map((f, i) => (
              <div key={i} className="fact-hover" style={{ background: '#fff', padding: '28px 24px' }}>
                <span style={{ fontSize: 18, display: 'block', marginBottom: 12 }}>{f.icon}</span>
                <span style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 8 }}>{f.label}</span>
                <p style={{ fontSize: 13, color: '#333', lineHeight: 1.5, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>

          {/* ── SECTION LABEL ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <span style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', whiteSpace: 'nowrap' }}>
              Artículos destacados
            </span>
            <div style={{ flex: 1, height: '0.5px', background: '#e0ddd8' }} />
          </div>

          {/* ── FEATURED GRID ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 2, background: '#e0ddd8', borderRadius: '16px 16px 0 0', overflow: 'hidden'
          }}>
            {/* Main article */}
            <div className="card-img-zoom" style={{ position: 'relative', minHeight: 460, cursor: 'pointer', overflow: 'hidden' }}>
              <img src={mainArticle.imagen} alt={mainArticle.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, color: 'white' }}>
                <span style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.8, display: 'block', marginBottom: 10 }}>{mainArticle.categoria}</span>
                <h2 className="font-display" style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.2, margin: '0 0 10px' }}>{mainArticle.titulo}</h2>
                <p style={{ fontSize: 12, opacity: 0.75, fontWeight: 300, lineHeight: 1.5, margin: 0 }}>{mainArticle.extracto}</p>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'white', marginTop: 14, textDecoration: 'none' }}>
                  Leer artículo <span className="read-link-arrow"><ArrowIcon /></span>
                </a>
              </div>
            </div>

            {/* Side articles */}
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 2 }}>
              {sideArticles.map(art => (
                <div key={art.id} className="card-img-zoom" style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}>
                  <img src={art.imagen} alt={art.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, color: 'white' }}>
                    <span style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.8, display: 'block', marginBottom: 8 }}>{art.categoria}</span>
                    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.2, margin: '0 0 8px' }}>{art.titulo}</h3>
                    <p style={{ fontSize: 11, opacity: 0.7, fontWeight: 300, lineHeight: 1.4, margin: 0 }}>{art.extracto}</p>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'white', marginTop: 12, textDecoration: 'none' }}>
                      Leer <span className="read-link-arrow"><ArrowIcon size={10} /></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM STRIP ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2, background: '#e0ddd8',
            borderRadius: '0 0 16px 16px', overflow: 'hidden', marginBottom: 64
          }}>
            {strips.map((s, i) => (
              <div key={i} className="strip-item-hover" style={{ background: '#fff', padding: 28, cursor: 'pointer' }}>
                <span className="font-display" style={{ fontSize: 36, fontWeight: 300, color: '#ddd', lineHeight: 1, display: 'block', marginBottom: 12 }}>{s.num}</span>
                <span style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 8 }}>{s.cat}</span>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#333', lineHeight: 1.4, margin: 0 }}>{s.title}</p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            background: '#fff', border: '0.5px solid #e0ddd8', borderRadius: 20,
            padding: '52px 56px', display: 'grid', gridTemplateColumns: '1fr auto',
            alignItems: 'center', gap: 40
          }}>
            <div>
              <span style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#aaa', display: 'block', marginBottom: 14 }}>¿Tienes dudas?</span>
              <h2 className="font-display" style={{ fontSize: 44, fontWeight: 300, fontStyle: 'italic', color: '#2a2a2a', margin: '0 0 12px', lineHeight: 1.1 }}>
                Consulta con una experta
              </h2>
              <p style={{ fontSize: 14, color: '#888', fontWeight: 300, lineHeight: 1.6, margin: 0, maxWidth: 480 }}>
                No dejes tu salud en manos de tendencias. Tu piel merece un diagnóstico profesional y personalizado.
              </p>
            </div>
            <button
              className="cta-btn-main font-body"
              style={{
                whiteSpace: 'nowrap', padding: '14px 32px', background: '#1a1a1a',
                color: '#fff', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
                borderRadius: 100, border: 'none', cursor: 'pointer'
              }}
            >
              Agendar cita
            </button>
          </div>
        
        
        </div>
        
       
      </div>
       <Footer />
    </>
  );
}