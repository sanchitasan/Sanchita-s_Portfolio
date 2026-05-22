"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ROLES = ["Full-Stack Developer", "AI/ML Engineer", "Data Analyst", "Research Innovator"];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1400);
      return () => clearTimeout(t);
    }
    const role = ROLES[roleIdx];
    if (!deleting && displayed.length < role.length) {
      const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === role.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
      setPause(true);
    }
  }, [displayed, deleting, pause, roleIdx]);

  return (
      <span className="typewriter-role">
      {displayed}
        <span className="cursor-blink">|</span>
    </span>
  );
}

type MagneticCardProps = {
  children: React.ReactNode;
};

function MagneticCard({ children }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 180, damping: 22 });
  const rotY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 180, damping: 22 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
      <motion.div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={handleLeave}
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d", perspective: 800 }}
      >
        {children}
      </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.88, x: 60 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const SKILLS = [
  { label: "Full-Stack", sub: "Product Building", icon: "⬡" },
  { label: "AI / ML", sub: "Intelligent Systems", icon: "◈" },
  { label: "Research", sub: "Real-world Impact", icon: "◉" },
];

export default function Hero() {
  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-root {
          position: relative;
          overflow: hidden;
          padding: 7rem 2rem 6rem;
          background: linear-gradient(175deg, #02060c 0%, #091828 22%, #0f2c48 48%, #1a5070 68%, #0a1320 100%);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* ── Layered atmospheric blobs ── */
        .blob-layer { pointer-events: none; position: absolute; inset: 0; overflow: hidden; }
        .blob { position: absolute; border-radius: 50%; filter: blur(70px); }
        .blob-1 { width: 520px; height: 520px; top: -100px; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%); animation: drift1 9s ease-in-out infinite; }
        .blob-2 { width: 380px; height: 380px; top: 30%; left: -100px; background: radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 70%); animation: drift2 12s ease-in-out infinite; }
        .blob-3 { width: 440px; height: 440px; top: 10%; right: -80px; background: radial-gradient(circle, rgba(99,179,237,0.12) 0%, transparent 70%); animation: drift3 10s ease-in-out infinite; }
        .blob-4 { width: 600px; height: 300px; bottom: -80px; left: 50%; transform: translateX(-50%); background: radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%); }

        @keyframes drift1 { 0%,100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-48%) scale(1.06); } }
        @keyframes drift2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }
        @keyframes drift3 { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(20px) scale(1.04); } }

        /* ── Noise grain overlay ── */
        .grain {
          position: absolute; inset: 0; opacity: 0.032;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }

        /* ── Grid ── */
        .hero-grid {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; } .photo-col { order: -1; } }

        /* ── Left column ── */
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(125,235,255,0.75);
          padding: 6px 16px; border-radius: 100px;
          border: 1px solid rgba(125,235,255,0.18);
          background: rgba(34,211,238,0.06);
          backdrop-filter: blur(8px);
          margin-bottom: 1.5rem;
        }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; animation: pulse-dot 2s ease-in-out infinite; }
        @keyframes pulse-dot { 0%,100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.6); } 50% { box-shadow: 0 0 0 5px rgba(34,211,238,0); } }

        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.4rem, 7vw, 6.2rem);
          font-weight: 800;
          line-height: 0.93;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 0.1em;
        }
        .hero-name-accent {
          display: block;
          background: linear-gradient(100deg, #e0f7ff 0%, #7de8ff 35%, #38bdf8 65%, #bae6fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        .hero-name-accent::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(125,232,255,0.5) 40%, rgba(56,189,248,0.5) 60%, transparent);
          border-radius: 2px;
        }

        .role-line {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 300;
          color: rgba(186,230,253,0.8);
          margin: 1.4rem 0 1rem;
          min-height: 2rem;
          letter-spacing: 0.01em;
        }
        .typewriter-role { color: #7de8ff; font-weight: 500; }
        .cursor-blink { display: inline-block; animation: blink 1s steps(1) infinite; color: #22d3ee; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

        .hero-bio {
          font-size: clamp(0.88rem, 1.5vw, 1.02rem);
          line-height: 1.8;
          color: rgba(186,230,253,0.65);
          max-width: 520px;
          margin: 0.8rem 0 2rem;
          font-weight: 300;
        }

        /* ── CTA Buttons ── */
        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 2.4rem; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 100px;
          background: linear-gradient(135deg, rgba(34,211,238,0.22) 0%, rgba(56,189,248,0.15) 100%);
          border: 1px solid rgba(125,235,255,0.3);
          color: #e0f7ff;
          font-size: 0.9rem; font-weight: 600; letter-spacing: 0.02em;
          backdrop-filter: blur(12px);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .btn-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(34,211,238,0.18), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .btn-primary:hover { transform: translateY(-3px); border-color: rgba(125,235,255,0.55); box-shadow: 0 12px 40px rgba(34,211,238,0.2); }
        .btn-primary:hover::before { opacity: 1; }
        .btn-arrow { font-size: 1rem; transition: transform 0.3s; }
        .btn-primary:hover .btn-arrow { transform: translateX(4px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem; font-weight: 500;
          backdrop-filter: blur(8px);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-ghost:hover { transform: translateY(-3px); background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.22); }

        /* ── Skill badges ── */
        .skill-row { display: flex; gap: 12px; flex-wrap: wrap; }

        .skill-badge {
          display: flex; flex-direction: column; gap: 2px;
          padding: 14px 20px; border-radius: 16px;
          background: rgba(255,255,255,0.028);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
          flex: 1; min-width: 120px;
        }
        .skill-badge:hover {
          background: rgba(34,211,238,0.07);
          border-color: rgba(125,235,255,0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(34,211,238,0.1);
        }
        .skill-icon { font-size: 1.1rem; color: rgba(125,235,255,0.7); margin-bottom: 4px; }
        .skill-title { font-size: 1rem; font-weight: 600; color: #fff; }
        .skill-sub { font-size: 0.65rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(125,235,255,0.6); margin-top: 2px; }

        /* ── Photo column ── */
        .photo-outer {
          display: flex; justify-content: flex-end; align-items: center;
          position: relative;
        }
        @media (max-width: 900px) { .photo-outer { justify-content: center; } }

        .photo-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(125,235,255,0.1);
          animation: spin-ring linear infinite;
        }
        .ring-1 { width: 420px; height: 420px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-duration: 28s; }
        .ring-2 { width: 340px; height: 340px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-duration: 20s; animation-direction: reverse; border-style: dashed; opacity: 0.5; }
        @keyframes spin-ring { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }

        .ring-dot {
          position: absolute; width: 8px; height: 8px; border-radius: 50%;
          background: #22d3ee; box-shadow: 0 0 12px rgba(34,211,238,0.9);
        }

        .photo-frame {
          position: relative; z-index: 2;
          padding: 12px;
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(34,211,238,0.12), rgba(56,189,248,0.06), rgba(0,0,0,0.2));
          border: 1px solid rgba(125,235,255,0.15);
          box-shadow: 0 40px 100px rgba(2,6,12,0.6), 0 0 60px rgba(34,211,238,0.08), inset 0 1px 0 rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
        }

        .photo-inner {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(160deg, rgba(34,211,238,0.1), rgba(0,0,0,0.3));
        }
        .photo-inner::before {
          content: ''; position: absolute; inset-x: 0; top: 0; height: 40%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
          z-index: 1; pointer-events: none;
        }
        .photo-inner::after {
          content: ''; position: absolute; inset-x: 0; bottom: 0; height: 30%;
          background: linear-gradient(to top, rgba(2,6,12,0.5), transparent);
          z-index: 1; pointer-events: none;
        }

        .hero-img {
          display: block;
          width: clamp(220px, 28vw, 360px);
          position: relative; z-index: 2;
        }

        /* Shimmer line on photo frame */
        .photo-shimmer {
          position: absolute; inset: 0; border-radius: 28px; overflow: hidden; pointer-events: none; z-index: 3;
        }
        .photo-shimmer::before {
          content: '';
          position: absolute;
          top: -60%; left: -60%;
          width: 60%; height: 220%;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%);
          animation: shimmer 4s ease-in-out infinite;
        }
        @keyframes shimmer { 0% { transform: translate(0,0); } 100% { transform: translate(300%, 0); } }

        /* Floating stat chips */
        .stat-chip {
          position: absolute;
          display: flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 100px;
          background: rgba(9,24,40,0.85);
          border: 1px solid rgba(125,235,255,0.18);
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          font-size: 0.78rem; font-weight: 600; color: #e0f7ff;
          white-space: nowrap;
          z-index: 5;
        }
        .stat-chip-dot { width: 7px; height: 7px; border-radius: 50%; background: #22d3ee; flex-shrink: 0; animation: pulse-dot 2s ease-in-out infinite; }
        .chip-tl { top: 14%; left: -22%; }
        .chip-br { bottom: 14%; right: -14%; }
        @media (max-width: 1100px) { .chip-tl { left: -8%; } .chip-br { right: 0%; } }
        @media (max-width: 900px) { .chip-tl, .chip-br { display: none; } }

        .photo-glow {
          position: absolute; inset: 30px; border-radius: 50%;
          background: rgba(34,211,238,0.18); filter: blur(50px);
          animation: glow-pulse 5s ease-in-out infinite;
        }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(0.95); } 50% { opacity: 0.9; transform: scale(1.05); } }

      
      
        /* ── Horizontal rule accent ── */
        .hr-accent {
          width: 60px; height: 2px; margin-bottom: 1.6rem;
          background: linear-gradient(90deg, #22d3ee, rgba(56,189,248,0.3), transparent);
          border-radius: 2px;
        }
      `}</style>

        <section className="hero-root" id="home">
          {/* Atmospheric layers */}
          <div className="blob-layer">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="blob blob-4" />
          </div>
          <div className="grain" />

          <div className="hero-grid">
            {/* LEFT COLUMN */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeUp}>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Available for Opportunities
                </div>
              </motion.div>

              {/* HR accent */}
              <motion.div variants={fadeUp}>
                <div className="hr-accent" />
              </motion.div>

              {/* Name */}
              <motion.h1 className="hero-name" variants={fadeUp}>
                Sanchita
                <span className="hero-name-accent">Priyadarshinee</span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.p className="role-line" variants={fadeUp}>
                <TypewriterRole />
              </motion.p>

              {/* Bio */}
              <motion.p className="hero-bio" variants={fadeUp}>
                Transforming ideas into impactful digital experiences through Full-Stack Development, AI/ML, and Data Analytics — building scalable systems and research-backed solutions that deliver real-world value.
              </motion.p>

              {/* CTAs */}
              <motion.div className="cta-row" variants={fadeUp}>
                <a href="#projects" className="btn-primary">
                  Explore My Work
                  <span className="btn-arrow">→</span>
                </a>
                <a href="#contact" className="btn-ghost">
                  Let&apos;s Connect
                </a>
              </motion.div>

              {/* Skill badges */}
              <motion.div className="skill-row" variants={fadeUp}>
                {SKILLS.map((s) => (
                    <div className="skill-badge" key={s.label}>
                      <div className="skill-icon">{s.icon}</div>
                      <div className="skill-title">{s.label}</div>
                      <div className="skill-sub">{s.sub}</div>
                    </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — Photo */}
            <motion.div
                className="photo-outer photo-col"
                variants={photoVariants}
                initial="hidden"
                animate="visible"
            >
              {/* Decorative rings */}
              <div className="photo-ring ring-1">
                <div className="ring-dot" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }} />
                <div className="ring-dot" style={{ bottom: "4%", left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />
              </div>
              <div className="photo-ring ring-2" />

              {/* Floating glow */}
              <div className="photo-glow" />

              {/* Floating chips */}
              <motion.div
                  className="stat-chip chip-tl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="stat-chip-dot" />
                Open to Work
              </motion.div>
              <motion.div
                  className="stat-chip chip-br"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="stat-chip-dot" />
                20+ Projects
              </motion.div>

              {/* Main photo frame */}
              <MagneticCard>
                <motion.div
                    className="photo-frame"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="photo-shimmer" />
                  <div className="photo-inner">
                    <img
                        className="hero-img"
                        src="/pixelcut-export.png"
                        alt="Sanchita Priyadarshinee"
                    />
                  </div>
                </motion.div>
              </MagneticCard>
            </motion.div>
          </div>
        </section>
      </>
  );
}
