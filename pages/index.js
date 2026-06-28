S
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
 
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({ rating: 0, reviews: 0, years: 0, clients: 0 });
  const statsRef = useRef(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounter("rating", 0, 48, 10, 1);
          animateCounter("reviews", 0, 154, 20, 1);
          animateCounter("years", 0, 3, 1000, 1);
          animateCounter("clients", 0, 500, 5, 1);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);
 
  const animateCounter = (key, start, end, duration, step) => {
    let current = start;
    const increment = Math.ceil((end - start) / (duration / 16));
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCounts((prev) => ({ ...prev, [key]: current }));
    }, 16);
  };
 
  const services = [
    {
      icon: "✦",
      title: "Bridal Makeup",
      subtitle: "Look flawless on your biggest day",
      desc: "Full bridal packages for Nikkah, Barat & Walima. We craft your dream look with precision — from airbrush foundation to jewellery styling.",
      tags: ["Nikkah", "Barat", "Walima", "Party Makeup"],
    },
    {
      icon: "◈",
      title: "Hair Services",
      subtitle: "Transform your hair, transform yourself",
      desc: "Haircut, Blowdry, Keratin Treatment, Rebonding, Hair Color, Highlights, Baby Lights, Balayage — all done by expert stylists.",
      tags: ["Keratin", "Highlights", "Balayage", "Blowdry"],
    },
    {
      icon: "◇",
      title: "Skin & Facials",
      subtitle: "Glow that lasts",
      desc: "Janseen Face-Lifting, Whitening Facial, Thalgo Facial, Deep Cleansing, Skin Treatments for all skin types.",
      tags: ["Janseen", "Thalgo", "Whitening", "Cleanup"],
    },
    {
      icon: "◉",
      title: "Nails & Spa",
      subtitle: "Luxury at your fingertips",
      desc: "Manicure, Pedicure, Acrylic Nails, French Tips, Nail Art, plus the most relaxing hand & foot massage in Islamabad.",
      tags: ["Manicure", "Pedicure", "Acrylic", "Nail Art"],
    },
    {
      icon: "◌",
      title: "Lashes & Brows",
      subtitle: "Eyes that speak",
      desc: "Eyelash Extensions, Lash Lifting, Classic & Volume Lashes, Eyebrow Threading, Tinting & Precision Shaping.",
      tags: ["Extensions", "Lash Lift", "Threading", "Tinting"],
    },
    {
      icon: "◎",
      title: "Mehndi Art",
      subtitle: "Intricate beauty on your hands",
      desc: "Bridal & party mehndi with intricate designs. From Arabic to Pakistani styles, crafted to perfection for your special occasion.",
      tags: ["Bridal", "Arabic", "Pakistani", "Party"],
    },
  ];
 
  const reviews = [
    { name: "Awaisra Riaz", text: "Zunaira is truly the best. She understood exactly the haircut I wanted and did it perfectly with great attention to detail. Very professional, friendly, and talented.", stars: 5 },
    { name: "Maryam Naz", text: "I got ready from Rabia's Saloon for my barat. Irum did my makeup and Neelum did hair styling. It was literally an amazing experience.", stars: 5 },
    { name: "Shumaila Zohaib", text: "Hair protein treatment, facial, and mani-pedi — the experience was amazing! Staff is extremely humble, cooperative, and skilled. Highly recommended.", stars: 5 },
    { name: "farida khanum", text: "One of the best salons in Islamabad I have visited so far. I loved the keratin treatment results. The ambiance is simply amazing.", stars: 5 },
    { name: "Aimen Hameed", text: "The hairstylist truly understands what suits you best and pays attention to every detail. Precision, creativity, and professionalism were top-notch.", stars: 5 },
    { name: "Saba L.", text: "I was worried about my Nikkah makeup, but Irum did an amazing job. She is really skilled and considers minute details. Truly magnificent experience.", stars: 5 },
  ];
 
  const galleryImages = [
    { src: "/images/salon-interior.jpg", label: "Our Salon" },
    { src: "/images/bridal1.jpg", label: "Bridal Styling" },
    { src: "/images/bridal2.jpg", label: "Bridal Makeup" },
    { src: "/images/hair1.jpg", label: "Hair Styling" },
    { src: "/images/bridal3.jpg", label: "Wedding Ready" },
    { src: "/images/hair2.jpg", label: "Sleek Finish" },
    { src: "/images/mehndi1.jpg", label: "Mehndi Art" },
    { src: "/images/mehndi2.jpg", label: "Bridal Mehndi" },
    { src: "/images/lashes.jpg", label: "Lash Extensions" },
    { src: "/images/hair3.jpg", label: "Event Hair" },
  ];
 
  const navLinks = ["Home", "Services", "Gallery", "Reviews", "Contact"];
 
  const gold = "#C9A84C";
  const goldLight = "#E2C87A";
  const dark = "#080808";
  const darkCard = "#111111";
  const darkBorder = "rgba(201,168,76,0.18)";
 
  return (
    <>
      <Head>
        <title>Rabia's Saloon | Luxury Beauty Salon — G-13/4 Islamabad</title>
        <meta name="description" content="Rabia's Saloon — Islamabad's most trusted luxury beauty salon. Bridal makeup, hair treatments, facials, nails, lashes & mehndi in G-13/4. Rated 4.8★ by 154+ clients." />
        <meta name="keywords" content="beauty salon islamabad, bridal makeup islamabad, hair salon G13, keratin islamabad, rabia saloon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500&family=Cormorant:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { background: #080808; color: #fff; overflow-x: hidden; }
          ::selection { background: rgba(201,168,76,0.3); }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #080808; }
          ::-webkit-scrollbar-thumb { background: #C9A84C; }
          @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
          @keyframes shimmer { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
          @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
          @keyframes rotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
          @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
          @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); } 70% { box-shadow: 0 0 0 15px rgba(201,168,76,0); } }
          .nav-link { color: rgba(255,255,255,0.7); text-decoration:none; font-size:11px; letter-spacing:3px; text-transform:uppercase; transition: color 0.3s; position:relative; padding-bottom:4px; }
          .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:#C9A84C; transition:width 0.3s; }
          .nav-link:hover { color:#C9A84C; }
          .nav-link:hover::after { width:100%; }
          .service-card { background:rgba(17,17,17,0.8); border:1px solid rgba(201,168,76,0.12); padding:40px 35px; transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); cursor:pointer; position:relative; overflow:hidden; }
          .service-card::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%); opacity:0; transition:opacity 0.4s; }
          .service-card:hover { transform:translateY(-8px); border-color:rgba(201,168,76,0.5); box-shadow:0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.08); }
          .service-card:hover::before { opacity:1; }
          .gallery-item { overflow:hidden; position:relative; cursor:pointer; }
          .gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); display:block; }
          .gallery-item:hover img { transform:scale(1.08); }
          .gallery-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); opacity:0; transition:opacity 0.4s; display:flex; align-items:flex-end; padding:20px; }
          .gallery-item:hover .gallery-overlay { opacity:1; }
          .review-card { background:rgba(17,17,17,0.6); border:1px solid rgba(201,168,76,0.12); padding:35px 30px; transition: all 0.4s; }
          .review-card:hover { border-color:rgba(201,168,76,0.4); transform:translateY(-5px); box-shadow:0 20px 50px rgba(0,0,0,0.4); }
          .btn-gold { background:linear-gradient(135deg, #C9A84C 0%, #A8873A 100%); color:#000; padding:16px 40px; text-decoration:none; font-size:11px; font-weight:600; letter-spacing:3px; text-transform:uppercase; display:inline-block; transition: all 0.3s; font-family:'Inter',sans-serif; border:none; cursor:pointer; }
          .btn-gold:hover { transform:translateY(-3px); box-shadow:0 15px 40px rgba(201,168,76,0.35); }
          .btn-outline { border:1px solid #C9A84C; color:#C9A84C; padding:16px 40px; text-decoration:none; font-size:11px; font-weight:500; letter-spacing:3px; text-transform:uppercase; display:inline-block; transition: all 0.3s; font-family:'Inter',sans-serif; background:transparent; cursor:pointer; }
          .btn-outline:hover { background:#C9A84C; color:#000; transform:translateY(-3px); }
          @media (max-width:768px) {
            .hero-title { font-size: clamp(2.5rem,10vw,5rem) !important; }
            .nav-desktop { display:none !important; }
            .hero-btns { flex-direction:column; align-items:center; }
            .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            .services-grid { grid-template-columns: 1fr !important; }
            .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
            .reviews-grid { grid-template-columns: 1fr !important; }
            .contact-grid { grid-template-columns: 1fr !important; }
            .footer-inner { flex-direction:column; text-align:center; gap:20px !important; }
            .nav-inner { padding: 18px 24px !important; }
            .section-pad { padding: 70px 24px !important; }
          }
        `}</style>
      </Head>
 
      {/* LOADING SCREEN */}
      {loading && (
        <div style={{
          position: "fixed", inset: 0, background: dark, zIndex: 9999,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          transition: "opacity 0.8s ease", opacity: progress >= 100 ? 0 : 1,
        }}>
          {/* Animated ring */}
          <div style={{ position: "relative", width: 120, height: 120, marginBottom: 40 }}>
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.15)",
            }} />
            <div style={{
              position: "absolute", inset: -4, borderRadius: "50%",
              border: `2px solid transparent`,
              borderTopColor: gold,
              animation: "rotate 1.5s linear infinite",
            }} />
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center",
              fontFamily: "'Playfair Display', serif", color: gold,
              fontSize: "1.2rem", letterSpacing: "2px",
            }}>R</div>
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: gold, fontSize: "1.8rem", letterSpacing: "10px", marginBottom: 4 }}>
            RABIA'S
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "8px", marginBottom: 50 }}>
            SALOON
          </div>
          <div style={{ width: 180, height: 1, background: "rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", top: 0, left: 0, height: "100%",
              width: `${progress}%`, background: `linear-gradient(90deg, transparent, ${gold})`,
              transition: "width 0.05s linear",
            }} />
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", letterSpacing: "3px", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            {Math.floor(progress)}%
          </div>
        </div>
      )}
 
      <div style={{ fontFamily: "'Inter', sans-serif", background: dark, color: "#fff", overflowX: "hidden" }}>
 
        {/* NAVBAR */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          transition: "all 0.4s",
          background: scrollY > 50 ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom: scrollY > 50 ? `1px solid ${darkBorder}` : "1px solid transparent",
        }}>
          <div className="nav-inner" style={{
            maxWidth: 1400, margin: "0 auto", padding: "22px 60px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <a href="#home" style={{ textDecoration: "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", color: gold, fontSize: "1.4rem", letterSpacing: "4px", lineHeight: 1 }}>
                RABIA'S
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.55rem", letterSpacing: "6px" }}>
                SALOON
              </div>
            </a>
            <div className="nav-desktop" style={{ display: "flex", gap: 40, alignItems: "center" }}>
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
              ))}
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" className="btn-gold" style={{ padding: "10px 24px", fontSize: "10px" }}>
                Book Now
              </a>
            </div>
            {/* Mobile menu btn */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              display: "none", background: "none", border: "none",
              color: gold, fontSize: "1.5rem", cursor: "pointer",
            }} className="mobile-menu-btn">☰</button>
          </div>
        </nav>
 
        {/* HERO */}
        <section id="home" style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", textAlign: "center",
          position: "relative", overflow: "hidden", padding: "120px 24px 80px",
        }}>
          {/* Background layers */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: "20%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: "rgba(201,168,76,0.03)", animation: "float 8s ease-in-out infinite", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(201,168,76,0.05)", animation: "float 6s ease-in-out infinite 2s", filter: "blur(30px)" }} />
          {/* Decorative lines */}
          <div style={{ position: "absolute", top: "15%", left: "5%", width: 1, height: 200, background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <div style={{ position: "absolute", top: "15%", right: "5%", width: 1, height: 200, background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
 
          <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32,
              border: `1px solid ${darkBorder}`, padding: "8px 20px",
              animation: "fadeUp 0.8s ease both",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: gold, animation: "shimmer 2s ease infinite" }} />
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "4px", textTransform: "uppercase" }}>
                Islamabad's Premium Beauty Salon
              </span>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: gold, animation: "shimmer 2s ease infinite 1s" }} />
            </div>
 
            <h1 className="hero-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 400, lineHeight: 1.05, marginBottom: 28,
              animation: "fadeUp 0.8s ease 0.2s both",
            }}>
              <span style={{ display: "block", color: "#fff" }}>Where Beauty</span>
              <span style={{
                display: "block", fontStyle: "italic",
                background: `linear-gradient(135deg, ${goldLight} 0%, ${gold} 50%, #8B6914 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Meets Art</span>
            </h1>
 
            <p style={{
              color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", letterSpacing: "4px",
              textTransform: "uppercase", marginBottom: 50,
              animation: "fadeUp 0.8s ease 0.4s both",
            }}>
              Hair · Makeup · Bridal · Nails · Lashes · Skin
            </p>
 
            <div className="hero-btns" style={{
              display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
              animation: "fadeUp 0.8s ease 0.6s both",
            }}>
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" className="btn-gold">
                📱 Book on WhatsApp
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
 
            {/* Rating badge */}
            <div style={{
              marginTop: 60, display: "inline-flex", alignItems: "center", gap: 16,
              background: "rgba(201,168,76,0.06)", border: `1px solid ${darkBorder}`,
              padding: "14px 28px", animation: "fadeUp 0.8s ease 0.8s both",
            }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: gold, fontSize: "0.9rem" }}>★</span>
                ))}
              </div>
              <div style={{ width: 1, height: 24, background: darkBorder }} />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", letterSpacing: "1px" }}>
                <strong style={{ color: gold }}>4.8</strong> rating · <strong style={{ color: "#fff" }}>154+</strong> happy clients
              </span>
            </div>
          </div>
 
          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            animation: "float 2s ease-in-out infinite",
          }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", letterSpacing: "3px" }}>SCROLL</span>
            <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${gold}, transparent)` }} />
          </div>
        </section>
 
        {/* MARQUEE STRIP */}
        <div style={{
          borderTop: `1px solid ${darkBorder}`, borderBottom: `1px solid ${darkBorder}`,
          padding: "14px 0", overflow: "hidden", background: "rgba(201,168,76,0.02)",
        }}>
          <div style={{ display: "flex", animation: "marquee 25s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
            {[...Array(2)].map((_, di) => (
              <span key={di} style={{ display: "flex", alignItems: "center" }}>
                {["Bridal Makeup", "Hair Keratin", "Lash Extensions", "Skin Facials", "Nail Art", "Mehndi", "Hair Color", "Mani Pedi", "Rebonding", "Waxing"].map((s, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 30px" }}>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.7rem", letterSpacing: "4px", textTransform: "uppercase" }}>{s}</span>
                    <span style={{ color: gold, fontSize: "0.5rem" }}>✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
 
        {/* STATS SECTION */}
        <section ref={statsRef} style={{ padding: "100px 60px", background: darkCard }} className="section-pad">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="stats-grid">
              {[
                { num: counts.rating, suffix: "/5", label: "Google Rating", sub: "Verified reviews" },
                { num: counts.reviews, suffix: "+", label: "Happy Clients", sub: "And counting" },
                { num: counts.years, suffix: "+", label: "Years of Excellence", sub: "In Islamabad" },
                { num: counts.clients, suffix: "+", label: "Transformations", sub: "This year alone" },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: "50px 40px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${darkBorder}` : "none",
                  position: "relative",
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,4vw,4rem)",
                    color: gold, marginBottom: 8, lineHeight: 1,
                  }}>
                    {stat.num === counts.rating && countersStarted ? (counts.rating / 10).toFixed(1) : stat.num}{stat.suffix}
                  </div>
                  <div style={{ color: "#fff", fontSize: "0.85rem", letterSpacing: "2px", marginBottom: 6, textTransform: "uppercase" }}>{stat.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", letterSpacing: "1px" }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* SERVICES */}
        <section id="services" style={{ padding: "120px 60px", background: dark }} className="section-pad">
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{ marginBottom: 80 }}>
              <p style={{ color: gold, fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", marginBottom: 16 }}>
                ✦ What We Offer
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 400, lineHeight: 1.1 }}>
                  Our Premium<br /><em style={{ color: gold }}>Services</em>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", maxWidth: 320, lineHeight: 1.8 }}>
                  Every service is crafted with premium products and skilled hands — because you deserve nothing less.
                </p>
              </div>
            </div>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: darkBorder }}>
              {services.map((service, i) => (
                <div
                  key={i}
                  className="service-card"
                  onClick={() => setActiveService(activeService === i ? null : i)}
                >
                  <div style={{ fontFamily: "'Playfair Display', serif", color: gold, fontSize: "1.5rem", marginBottom: 20, opacity: 0.6 }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400, color: "#fff", marginBottom: 8 }}>
                    {service.title}
                  </h3>
                  <p style={{ color: gold, fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20 }}>
                    {service.subtitle}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: 24 }}>
                    {service.desc}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        border: `1px solid ${darkBorder}`, color: "rgba(255,255,255,0.4)",
                        fontSize: "0.6rem", letterSpacing: "2px", padding: "4px 10px", textTransform: "uppercase",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* ABOUT / STORY */}
        <section style={{ padding: "120px 60px", background: darkCard }} className="section-pad">
          <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <p style={{ color: gold, fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", marginBottom: 20 }}>✦ Our Story</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: 30 }}>
                Where Every Woman Feels Like a <em style={{ color: gold }}>Queen</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 2, fontSize: "0.9rem", marginBottom: 24 }}>
                Rabia's Saloon was born from a single belief — that every woman deserves to look and feel extraordinary. Nestled in the heart of G-13/4, Islamabad, we've built a sanctuary where beauty meets artistry.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 2, fontSize: "0.9rem", marginBottom: 40 }}>
                Our team of expert stylists and beauticians are passionate about their craft, continuously updating their skills with the latest global trends and techniques. From bridal transformations to everyday glam, we treat every client like royalty.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" className="btn-gold">
                  Book Appointment
                </a>
                <a href="https://www.instagram.com/rabiassaloon" target="_blank" rel="noreferrer" className="btn-outline">
                  Follow Us
                </a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: -20, left: -20, right: 20, bottom: 20,
                border: `1px solid ${darkBorder}`, zIndex: 0,
              }} />
              <img
                src="/images/bridal1.jpg"
                alt="Rabia's Saloon"
                style={{ width: "100%", height: 500, objectFit: "cover", position: "relative", zIndex: 1, display: "block" }}
              />
              <div style={{
                position: "absolute", bottom: -20, right: -20, zIndex: 2,
                background: dark, border: `1px solid ${darkBorder}`, padding: "20px 30px",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", color: gold, fontSize: "2rem" }}>4.8★</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "2px" }}>GOOGLE RATING</div>
              </div>
            </div>
          </div>
        </section>
 
        {/* GALLERY */}
        <section id="gallery" style={{ padding: "120px 60px", background: dark }} className="section-pad">
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 70 }}>
              <p style={{ color: gold, fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", marginBottom: 16 }}>✦ Our Work</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400 }}>
                The <em style={{ color: gold }}>Gallery</em>
              </h2>
            </div>
            <div className="gallery-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "auto",
              gap: 6,
            }}>
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  style={{
                    gridColumn: i === 0 ? "span 2" : "span 1",
                    gridRow: i === 0 ? "span 2" : "span 1",
                    height: i === 0 ? 520 : 250,
                  }}
                >
                  <img src={img.src} alt={img.label} />
                  <div className="gallery-overlay">
                    <span style={{ color: "#fff", fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase" }}>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* REVIEWS */}
        <section id="reviews" style={{ padding: "120px 60px", background: darkCard }} className="section-pad">
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 70 }}>
              <p style={{ color: gold, fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", marginBottom: 16 }}>✦ Client Love</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, marginBottom: 16 }}>
                What They <em style={{ color: gold }}>Say</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "2px" }}>
                ★★★★★ 4.8 out of 5 · 154 verified Google reviews
              </p>
            </div>
            <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {reviews.map((review, i) => (
                <div key={i} className="review-card">
                  <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                    {[...Array(review.stars)].map((_, si) => (
                      <span key={si} style={{ color: gold, fontSize: "0.8rem" }}>★</span>
                    ))}
                  </div>
                  <p style={{
                    color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.9,
                    marginBottom: 24, fontFamily: "'Cormorant', serif", fontSize: "1.05rem", fontStyle: "italic",
                  }}>
                    "{review.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${gold}, #8B6914)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#000", fontSize: "0.75rem", fontWeight: 600,
                    }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div style={{ color: "#fff", fontSize: "0.8rem", letterSpacing: "1px" }}>{review.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "1px" }}>Google Review</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
            {/* CTA after reviews */}
            <div style={{
              marginTop: 60, textAlign: "center", padding: "50px",
              border: `1px solid ${darkBorder}`,
              background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 100%)",
            }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "4px", textTransform: "uppercase", marginBottom: 16 }}>
                Ready for your transformation?
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 400, marginBottom: 30, color: "#fff" }}>
                Book Your Appointment <em style={{ color: gold }}>Today</em>
              </h3>
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" className="btn-gold" style={{ animation: "pulse 2s infinite" }}>
                💬 WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
 
        {/* CONTACT */}
        <section id="contact" style={{ padding: "120px 60px", background: dark }} className="section-pad">
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 70 }}>
              <p style={{ color: gold, fontSize: "0.65rem", letterSpacing: "6px", textTransform: "uppercase", marginBottom: 16 }}>✦ Visit Us</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400 }}>
                Find <em style={{ color: gold }}>Us</em>
              </h2>
            </div>
 
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: darkBorder, marginBottom: 2 }}>
              {[
                { icon: "📍", title: "Location", info: "Shop 1, Street 149, Punjab Market\nG-13/4, Islamabad", link: "https://maps.google.com" },
                { icon: "📞", title: "Phone", info: "0305 8882040\n051-8777719", link: "tel:+923058882040" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noreferrer" style={{
                  background: darkCard, padding: "60px 50px", textDecoration: "none",
                  display: "block", transition: "background 0.3s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
                  onMouseLeave={e => e.currentTarget.style.background = darkCard}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>{item.icon}</div>
                  <div style={{ color: gold, fontSize: "0.65rem", letterSpacing: "4px", textTransform: "uppercase", marginBottom: 12 }}>{item.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, whiteSpace: "pre-line" }}>{item.info}</div>
                </a>
              ))}
            </div>
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: darkBorder }}>
              {[
                { icon: "🕐", title: "Hours", info: "Monday — Sunday\n10:00 AM — 9:00 PM", link: "#" },
                { icon: "👩", title: "For Ladies Only", info: "A safe, welcoming, and\nprivate space just for you", link: "#" },
              ].map((item, i) => (
                <div key={i} style={{ background: darkCard, padding: "60px 50px" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>{item.icon}</div>
                  <div style={{ color: gold, fontSize: "0.65rem", letterSpacing: "4px", textTransform: "uppercase", marginBottom: 12 }}>{item.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, whiteSpace: "pre-line" }}>{item.info}</div>
                </div>
              ))}
            </div>
 
            {/* Social Links */}
            <div style={{ marginTop: 60, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "💬 WhatsApp", href: "https://wa.me/923058882040", bg: "#128C7E" },
                { label: "📸 Instagram", href: "https://www.instagram.com/rabiassaloon", bg: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366)" },
                { label: "👍 Facebook", href: "https://www.facebook.com/p/Rabias-salon-61573416532990", bg: "#1877F2" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" style={{
                  background: social.bg, color: "#fff", padding: "14px 32px",
                  textDecoration: "none", fontSize: "0.75rem", letterSpacing: "2px",
                  textTransform: "uppercase", fontWeight: 500, transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.opacity = "0.9"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = "1"; }}
                >
                  {social.label}
                </a>
              ))}
            </div>
 
            {/* Google Map Embed */}
            <div style={{ marginTop: 60, border: `1px solid ${darkBorder}`, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.!2d72.97!3d33.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df970049d0319f%3A0xc649e6a4e45de15d!2sRabia&#39;s%20Saloon!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rabia's Saloon Location"
              />
            </div>
          </div>
        </section>
 
        {/* FOOTER */}
        <footer style={{
          background: "#050505",
          borderTop: `1px solid ${darkBorder}`,
          padding: "60px",
        }}>
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, gap: 20 }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: gold, fontSize: "1.6rem", letterSpacing: "6px" }}>RABIA'S</div>
                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.55rem", letterSpacing: "8px" }}>SALOON</div>
              </div>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {navLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", transition: "color 0.3s" }}
                    onMouseEnter={e => e.target.style.color = gold}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
                  >{link}</a>
                ))}
              </div>
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" className="btn-gold" style={{ fontSize: "0.7rem", padding: "12px 24px" }}>
                Book Now
              </a>
            </div>
            <div style={{ borderTop: `1px solid ${darkBorder}`, paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "1px" }}>
                © 2026 Rabia's Saloon · G-13/4, Islamabad · All rights reserved
              </p>
              <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "1px" }}>
                Only For Ladies 👩 · Open 10am – 9pm Daily
              </p>
            </div>
          </div>
        </footer>
 
      </div>
    </>
  );
}git