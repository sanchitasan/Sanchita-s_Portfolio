"use client";
import React, { useRef } from "react";
import type { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";
import { LuBrainCircuit, LuCode2, LuGraduationCap, LuTrophy } from "react-icons/lu";

type HighlightItem = {
  title: string;
  icon: IconType;
  tag: string;
  description: string;
  accent: string;
  number: string;
};

const highlights: HighlightItem[] = [
  {
    title: "Education",
    icon: LuGraduationCap,
    tag: "NIT Rourkela · 2027",
    description:
        "Pursuing B.Tech in Electronics and Communication Engineering at National Institute of Technology Rourkela, graduating in 2027.",
    accent: "#22d3ee",
    number: "01",
  },
  {
    title: "Full-Stack Engineering",
    icon: LuCode2,
    tag: "React · Next.js · Node · FastAPI",
    description:
        "Builds responsive, production-ready applications with React, Next.js, Node.js, FastAPI — from dashboards and authentication to scalable API systems.",
    accent: "#38bdf8",
    number: "02",
  },
  {
    title: "AI / ML & Research",
    icon: LuBrainCircuit,
    tag: "IEEE INDISCON 2025 Accepted",
    description:
        "Develops ML models for fraud detection, healthcare intelligence, campus safety, and human activity recognition, including IEEE INDISCON 2025 accepted research.",
    accent: "#7de8ff",
    number: "03",
  },
  {
    title: "Leadership",
    icon: LuTrophy,
    tag: "HackOdisha 5.0 · IIT Guwahati",
    description:
        "Lead Organizer for HackOdisha 5.0, WebWiz technical team member, and 1st runner-up at IIT Guwahati Ethos Hackathon.",
    accent: "#bae6fd",
    number: "04",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      delay: i * 0.11,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function HighlightCard({ item, index }: { item: HighlightItem; index: number }) {
  const Icon = item.icon;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
      <motion.div
          ref={ref}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-card"
          style={{ ["--card-accent" as any]: item.accent } as React.CSSProperties}
      >
        {/* Big background number */}
        <span className="card-bg-num">{item.number}</span>

        {/* Top row */}
        <div className="card-top">
          <div className="card-icon-wrap">
            <Icon className="card-icon" aria-hidden="true" />
          </div>
          <span className="card-tag">{item.tag}</span>
        </div>

        {/* Title */}
        <h3 className="card-title">{item.title}</h3>

        {/* Divider */}
        <div className="card-divider" />

        {/* Description */}
        <p className="card-desc">{item.description}</p>

        {/* Bottom glow line */}
        <div className="card-glow-line" />
      </motion.div>
  );
}

export default function About() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: false, margin: "-60px" });

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .about-root {
          position: relative;
          overflow: hidden;
          padding: 7rem 2rem 8rem;
          background: linear-gradient(175deg,
            #0a1320 0%,
            #091828 18%,
            #0d2340 38%,
            #112d50 55%,
            #1a4a6e 72%,
            #0f2030 88%,
            #07111d 100%
          );
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Atmospheric blobs (matching Hero palette) ── */
        .about-blobs { pointer-events: none; position: absolute; inset: 0; overflow: hidden; }
        .ab { position: absolute; border-radius: 50%; filter: blur(80px); }
        .ab-1 { width: 500px; height: 500px; top: -60px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%);
          animation: ab-drift1 11s ease-in-out infinite; }
        .ab-2 { width: 340px; height: 340px; top: 40%; left: -60px;
          background: radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 70%);
          animation: ab-drift2 14s ease-in-out infinite; }
        .ab-3 { width: 420px; height: 420px; bottom: 5%; right: -80px;
          background: radial-gradient(circle, rgba(99,179,237,0.1) 0%, transparent 70%);
          animation: ab-drift3 9s ease-in-out infinite; }
        @keyframes ab-drift1 { 0%,100%{transform:translateX(-50%) scale(1)} 50%{transform:translateX(-48%) scale(1.07)} }
        @keyframes ab-drift2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
        @keyframes ab-drift3 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(18px) scale(1.04)} }

        /* Grain */
        .about-grain {
          position: absolute; inset: 0; opacity: 0.028; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        /* ── Section header ── */
        .about-inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }

        .about-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(125,232,255,0.7);
          padding: 5px 16px; border-radius: 100px;
          border: 1px solid rgba(125,232,255,0.15);
          background: rgba(34,211,238,0.05);
          backdrop-filter: blur(8px);
          margin-bottom: 1.4rem;
        }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #22d3ee; flex-shrink: 0;
          animation: dot-pulse 2s ease-in-out infinite; }
        @keyframes dot-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(34,211,238,0.6)} 50%{box-shadow:0 0 0 5px rgba(34,211,238,0)} }

        .about-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 5.8rem);
          font-weight: 800;
          line-height: 0.92;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 0.15em;
        }
        .about-heading-accent {
          display: block;
          background: linear-gradient(100deg, #e0f7ff 0%, #7de8ff 40%, #38bdf8 70%, #bae6fd 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .about-hr {
          width: 56px; height: 2px; margin: 1.6rem 0 1.8rem;
          background: linear-gradient(90deg, #22d3ee, rgba(56,189,248,0.3), transparent);
          border-radius: 2px;
        }

        .about-bio {
          max-width: 1000px;
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          line-height: 1.85;
          color: rgba(186,230,253,0.62);
          font-weight: 300;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 4rem;
        }

        /* ── Cards grid ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 720px) { .cards-grid { grid-template-columns: 1fr; } }

        .about-card {
          position: relative;
          padding: 2rem 2rem 2.2rem;
          border-radius: 20px;
          border: 1px solid rgba(125,235,255,0.1);
          background: rgba(255,255,255,0.026);
          backdrop-filter: blur(14px);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .about-card:hover {
          border-color: rgba(125,235,255,0.28);
          background: rgba(34,211,238,0.045);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(34,211,238,0.07);
        }

        /* Big ghost number */
        .card-bg-num {
          position: absolute; top: -14px; right: 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 7rem; font-weight: 800;
          color: rgba(125,235,255,0.045);
          line-height: 1; pointer-events: none; user-select: none;
          transition: color 0.35s ease;
        }
        .about-card:hover .card-bg-num { color: rgba(125,235,255,0.08); }

        /* Top row */
        .card-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .card-icon-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; border-radius: 14px;
          background: rgba(34,211,238,0.1);
          border: 1px solid rgba(125,235,255,0.18);
          color: var(--card-accent, #22d3ee);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .about-card:hover .card-icon-wrap {
          background: rgba(34,211,238,0.16);
          box-shadow: 0 0 20px rgba(34,211,238,0.2);
        }
        .card-icon { width: 22px; height: 22px; }

        .card-tag {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--card-accent, #22d3ee);
          opacity: 0.7;
          text-align: right;
          max-width: 160px; line-height: 1.4;
        }

        /* Title */
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.4rem, 2.5vw, 1.75rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* Divider */
        .card-divider {
          width: 36px; height: 1.5px; margin: 1rem 0;
          background: linear-gradient(90deg, var(--card-accent, #22d3ee), transparent);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .about-card:hover .card-divider { width: 60px; }

        /* Description */
        .card-desc {
          font-size: clamp(0.84rem, 1.4vw, 0.96rem);
          line-height: 1.78;
          color: rgba(186,230,253,0.58);
          font-weight: 300;
          margin: 0;
          position: relative; z-index: 1;
        }

        /* Bottom glow accent line */
        .card-glow-line {
          position: absolute; left: 0; bottom: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-accent, #22d3ee), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .about-card:hover .card-glow-line { opacity: 0.6; }

        /* ── Decorative side line ── */
        .about-side-line {
          position: absolute; left: 0; top: 15%; bottom: 15%;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, rgba(34,211,238,0.25) 30%, rgba(56,189,248,0.2) 70%, transparent);
          border-radius: 2px;
        }
      `}</style>

        <section className="about-root" id="about">
          {/* Atmosphere */}
          <div className="about-blobs">
            <div className="ab ab-1" />
            <div className="ab ab-2" />
            <div className="ab ab-3" />
          </div>
          <div className="about-grain" />
          <div className="about-side-line" />

          <div className="about-inner" ref={headRef}>
            {/* Header block */}
            <motion.div
                className="about-header"
                variants={containerVariants}
                initial="hidden"
                animate={headInView ? "visible" : "hidden"}
            >

              <motion.h2 className="about-heading" variants={fadeUp}>
                About Me
              </motion.h2>

              <motion.div variants={fadeUp}>
                <div className="about-hr" />
              </motion.div>

              <motion.p className="about-bio" variants={fadeUp}>
                I bring together web engineering, data analytics, and applied machine learning to create efficient, research-backed technology solutions. My work spans high-performance interfaces, real-time dashboards, intelligent recommendation systems, healthcare tools, and ML models designed for practical deployment.
              </motion.p>
            </motion.div>

            {/* Cards */}
            <div className="cards-grid">
              {highlights.map((item, i) => (
                  <HighlightCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      </>
  );
}
