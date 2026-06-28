import { useEffect, useRef, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Rabia's Saloon | Premium Beauty Salon Islamabad</title>
        <meta name="description" content="Rabia's Saloon - Premium beauty salon in G-13/4 Islamabad. Hair, Makeup, Bridal, Nails, Lashes & More. Rated 4.8/5 by 154 clients." />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* LOADING SCREEN */}
      {loading && (
        <div style={{
          position: "fixed", inset: 0, background: "#0a0a0a",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          zIndex: 9999, transition: "opacity 0.5s",
        }}>
          <div style={{ color: "#c9a84c", fontSize: "3rem", fontFamily: "Cormorant Garamond, serif", letterSpacing: "8px", marginBottom: "10px" }}>
            RABIA'S
          </div>
          <div style={{ color: "#fff", fontSize: "1rem", fontFamily: "Montserrat, sans-serif", letterSpacing: "6px", marginBottom: "40px" }}>
            SALOON
          </div>
          <div style={{ width: "200px", height: "1px", background: "#333", position: "relative" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: "#c9a84c", transition: "width 0.1s" }} />
          </div>
          <div style={{ color: "#c9a84c", marginTop: "10px", fontFamily: "Montserrat", fontSize: "0.8rem" }}>
            {progress}%
          </div>
        </div>
      )}

      <div style={{ fontFamily: "Montserrat, sans-serif", background: "#0a0a0a", color: "#fff", overflowX: "hidden" }}>

        {/* NAVBAR */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0,
          padding: "20px 50px", display: "flex",
          justifyContent: "space-between", alignItems: "center",
          zIndex: 1000, background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(201,168,76,0.2)"
        }}>
          <div style={{ color: "#c9a84c", fontSize: "1.5rem", fontFamily: "Cormorant Garamond, serif", letterSpacing: "4px" }}>
            RABIA'S SALOON
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            {["Home", "Services", "Gallery", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: "#fff", textDecoration: "none", fontSize: "0.8rem",
                letterSpacing: "2px", transition: "color 0.3s",
              }}
                onMouseEnter={e => e.target.style.color = "#c9a84c"}
                onMouseLeave={e => e.target.style.color = "#fff"}
              >{item}</a>
            ))}
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" style={{
          height: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center", flexDirection: "column", textAlign: "center",
          position: "relative", overflow: "hidden",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)"
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "#c9a84c", letterSpacing: "6px", fontSize: "0.8rem", marginBottom: "20px" }}>
              ✦ ISLAMABAD'S PREMIUM BEAUTY DESTINATION ✦
            </p>
            <h1 style={{
              fontSize: "clamp(3rem, 8vw, 7rem)", fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300, lineHeight: 1.1, marginBottom: "20px",
              background: "linear-gradient(135deg, #fff 0%, #c9a84c 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Where Beauty<br />Meets Art
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", letterSpacing: "2px", marginBottom: "40px" }}>
              Hair • Makeup • Bridal • Nails • Lashes • Skin
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" style={{
                background: "linear-gradient(135deg, #c9a84c, #a8873a)",
                color: "#000", padding: "15px 40px", textDecoration: "none",
                letterSpacing: "2px", fontSize: "0.8rem", fontWeight: 600,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 10px 30px rgba(201,168,76,0.4)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
              >
                📱 BOOK ON WHATSAPP
              </a>
              <a href="#services" style={{
                border: "1px solid #c9a84c", color: "#c9a84c",
                padding: "15px 40px", textDecoration: "none",
                letterSpacing: "2px", fontSize: "0.8rem",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.target.style.background = "#c9a84c"; e.target.style.color = "#000"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c9a84c"; }}
              >
                OUR SERVICES
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            display: "flex", justifyContent: "center", gap: "60px",
            padding: "30px", background: "rgba(201,168,76,0.05)",
            borderTop: "1px solid rgba(201,168,76,0.2)", flexWrap: "wrap"
          }}>
            {[["4.8★", "Google Rating"], ["154+", "Happy Clients"], ["10am-9pm", "Open Daily"], ["G-13/4", "Islamabad"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ color: "#c9a84c", fontSize: "1.5rem", fontFamily: "Cormorant Garamond, serif" }}>{num}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "2px" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" style={{ padding: "100px 50px", background: "#0f0f0f" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#c9a84c", letterSpacing: "6px", fontSize: "0.8rem", marginBottom: "15px" }}>WHAT WE OFFER</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              Our Services
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            {[
              { icon: "💇‍♀️", title: "Hair Services", desc: "Haircut, Blowdry, Keratin, Rebonding, Hair Color, Highlights, Baby Lights, Balayage" },
              { icon: "👰", title: "Bridal Makeup", desc: "Complete bridal packages for Nikkah, Barat & Walima. Look stunning on your special day." },
              { icon: "✨", title: "Skin & Facials", desc: "Janseen Face-Lifting, Whitening Facial, Thalgo Facial, Cleanup & more premium treatments." },
              { icon: "💅", title: "Nails", desc: "Manicure, Pedicure, Acrylic Nails, French Tips, Nail Art & relaxing hand/foot massage." },
              { icon: "👁️", title: "Lashes & Brows", desc: "Eyelash Extensions, Lash Lifting, Eyebrow Threading, Tinting & Shaping." },
              { icon: "🌿", title: "Mehndi", desc: "Bridal & party mehndi designs. Intricate patterns for all occasions." },
            ].map((service) => (
              <div key={service.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)",
                padding: "40px 30px", transition: "all 0.3s", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{service.icon}</div>
                <h3 style={{ color: "#c9a84c", fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", marginBottom: "10px" }}>{service.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9rem" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" style={{ padding: "100px 50px", background: "#0a0a0a" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#c9a84c", letterSpacing: "6px", fontSize: "0.8rem", marginBottom: "15px" }}>OUR WORK</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>Gallery</h2>
          </div>
          <div style={{ columns: "3 280px", gap: "15px", maxWidth: "1200px", margin: "0 auto" }}>
            {[
              "/images/salon-interior.jpg",
              "/images/bridal1.jpg",
              "/images/bridal2.jpg",
              "/images/bridal3.jpg",
              "/images/hair1.jpg",
              "/images/hair2.jpg",
              "/images/hair3.jpg",
              "/images/mehndi1.jpg",
              "/images/mehndi2.jpg",
              "/images/lashes.jpg",
            ].map((src, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "15px", overflow: "hidden" }}>
                <img src={src} alt={`Gallery ${i + 1}`} style={{
                  width: "100%", display: "block",
                  transition: "transform 0.5s",
                }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews" style={{ padding: "100px 50px", background: "#0f0f0f" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#c9a84c", letterSpacing: "6px", fontSize: "0.8rem", marginBottom: "15px" }}>WHAT CLIENTS SAY</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              Client Reviews
            </h2>
            <p style={{ color: "#c9a84c", fontSize: "1.2rem", marginTop: "10px" }}>⭐⭐⭐⭐⭐ 4.8/5 — 154 Reviews on Google</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            {[
              { name: "Awaisra Riaz", review: "Had an amazing experience at Rabia Salon! Zunaira is truly the best. She understood exactly the haircut I wanted and did it perfectly with great attention to detail. Very professional, friendly, and talented. Highly recommended!" },
              { name: "Shumaila Zohaib", review: "Had a hair protein treatment, facial, and mani-pedi at Rabia Salon, and the experience was amazing! The staff is extremely humble, cooperative, and skilled. The environment is clean, comfortable, and welcoming." },
              { name: "Maryam Naz", review: "I got ready from Rabia's Saloon for my barat. Irum did my makeup and Neelum did hair styling. It was literally an amazing experience. Do visit them and make your special events more beautiful!" },
              { name: "farida khanum", review: "This is one of the best salons in Islamabad I have visited so far. I loved the keratin treatment results of my hair. Also the ambiance is simply amazing. Hundred percent recommend." },
              { name: "Esha", review: "I took services from Rabia Salon for my brother's wedding and it was amazing! The salon is really good, and their staff deals very well. Very professional people." },
              { name: "Aimen Hameed", review: "Absolutely loved the experience! The hairstylist truly understands what suits you best and pays attention to every detail. The precision, creativity, and professionalism were top-notch." },
            ].map((review) => (
              <div key={review.name} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)",
                padding: "30px", transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ color: "#c9a84c", fontSize: "1.2rem", marginBottom: "15px" }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "20px", fontStyle: "italic" }}>
                  "{review.review}"
                </p>
                <p style={{ color: "#c9a84c", fontSize: "0.8rem", letterSpacing: "2px" }}>— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{ padding: "100px 50px", background: "#0a0a0a" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ color: "#c9a84c", letterSpacing: "6px", fontSize: "0.8rem", marginBottom: "15px" }}>GET IN TOUCH</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>Contact Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
            {[
              { icon: "📍", title: "Location", info: "Shop 1, Street 149, Punjab Market, G-13/4, Islamabad" },
              { icon: "📞", title: "Phone", info: "0305 8882040" },
              { icon: "🕐", title: "Hours", info: "Monday - Sunday\n10:00 AM - 9:00 PM" },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "40px 20px", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "15px" }}>{item.icon}</div>
                <h3 style={{ color: "#c9a84c", marginBottom: "10px", letterSpacing: "2px", fontSize: "0.9rem" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.info}</p>
              </div>
            ))}
          </div>

          {/* Social + CTA */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "30px", letterSpacing: "2px", fontSize: "0.8rem" }}>FOLLOW US</p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/923058882040" target="_blank" rel="noreferrer" style={{
                background: "#25D366", color: "#fff", padding: "15px 30px",
                textDecoration: "none", letterSpacing: "2px", fontSize: "0.8rem", fontWeight: 600,
              }}>💬 WHATSAPP</a>
              <a href="https://www.instagram.com/rabiassaloon" target="_blank" rel="noreferrer" style={{
                background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "#fff", padding: "15px 30px", textDecoration: "none",
                letterSpacing: "2px", fontSize: "0.8rem", fontWeight: 600,
              }}>📸 INSTAGRAM</a>
              <a href="https://www.facebook.com/p/Rabias-salon-61573416532990" target="_blank" rel="noreferrer" style={{
                background: "#1877F2", color: "#fff", padding: "15px 30px",
                textDecoration: "none", letterSpacing: "2px", fontSize: "0.8rem", fontWeight: 600,
              }}>👍 FACEBOOK</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          padding: "40px 50px", background: "#050505",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "20px"
        }}>
          <div style={{ color: "#c9a84c", fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", letterSpacing: "4px" }}>
            RABIA'S SALOON
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © 2026 Rabia's Saloon. All rights reserved. | G-13/4, Islamabad
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            Only For Ladies 👩
          </div>
        </footer>

      </div>
    </>
  );
}