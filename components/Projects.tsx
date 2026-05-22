"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";

const projects = [
  {
    title: "AlignIQ",
    tag: "Full-Stack · FastAPI · JWT",
    description:
        "A full-stack Performance Management Platform enabling role-based goal tracking, quarterly reviews, goal approvals, and audit workflows. Designed scalable REST APIs using FastAPI with secure JWT authentication, while building responsive dashboards for Admin, Manager, and Employee roles.",
    image: "/AlignIQ.png",
    link: "https://aligniq-nine.vercel.app/",
    num: "01",
    accent: "#22d3ee",
  },
  // {
  //   title: "Campus Sentinel",
  //   tag: "AI/ML · Surveillance · Analytics",
  //   description:
  //       "An AI-powered campus surveillance and analytics backend capable of tracking entity movements through WiFi logs, CCTV, card swipes, and face embeddings. Implemented predictive ML pipelines and AI-powered recommendations to enhance campus safety and crowd management.",
  //   image: "/Campus.png",
  //   link: "https://aligniq-nine.vercel.app/",
  //   num: "02",
  //   accent: "#38bdf8",
  // },
  {
    title: "Credit Card Fraud Detection",
    tag: "ML · Python · Streamlit",
    description:
        "A Credit Card Fraud Detection Model achieving 94.15% accuracy on training data and 93.90% on test data. Addressed class imbalance through strategic undersampling and deployed as an interactive Streamlit application.",
    image: "/Credit Card.png",
    link: "https://credit-card-fraud-detection-model.streamlit.app",
    num: "03",
    accent: "#7de8ff",
  },
  {
    title: "Crypto Currency Converter",
    tag: "React · CoinGecko API · Chart.js",
    description:
        "A cryptocurrency converter that fetches real-time conversion rates for multiple currencies using the CoinGecko API, with historical price trend visualization via Chart.js displaying 7-day price fluctuations.",
    image: "/crypto.png",
    link: "https://crypto-currency-converter-six.vercel.app",
    num: "04",
    accent: "#bae6fd",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };

type Project = (typeof projects)[number];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
      <motion.div
          ref={ref}
          className="proj-row"
          style={{ "--proj-accent": project.accent } as React.CSSProperties}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ghost number */}
        <span className="proj-bg-num">{project.num}</span>

        {/* Inner grid: image + content */}
        <div className={`proj-inner ${isEven ? "proj-inner-normal" : "proj-inner-reverse"}`}>

          {/* Image panel */}
          <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-img-wrap"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="proj-img-overlay" />
            <div className="proj-img-shimmer" />
            <img src={project.image} alt={project.title} className="proj-img" />
            <div className="proj-img-hover-icon">
              <LuExternalLink />
            </div>
          </motion.a>

          {/* Content panel */}
          <div className="proj-content">
            {/* Tag */}
            <div className="proj-tag">{project.tag}</div>

            {/* Title */}
            <h3 className="proj-title">{project.title}</h3>

            {/* Divider */}
            <div className="proj-divider" />

            {/* Description */}
            <p className="proj-desc">{project.description}</p>

            {/* CTA */}
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-cta"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
            >
              View Project
              <LuArrowUpRight className="proj-cta-icon" aria-hidden="true" />
            </motion.a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="proj-bottom-line" />
      </motion.div>
  );
}

export default function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: false, margin: "-60px" });

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .proj-root {
          position: relative; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #fff;
          background: linear-gradient(175deg,
            #02060c 0%, #091828 15%, #0d2340 35%,
            #112d50 52%, #184061 65%,
            #2d7aa0 78%, #0f1d30 90%, #02060c 100%
          );
          padding: 7rem 2rem 8rem;
        }

        /* blobs */
        .proj-blobs { pointer-events:none; position:absolute; inset:0; overflow:hidden; }
        .pblob { position:absolute; border-radius:50%; filter:blur(80px); }
        .pblob-1 { width:540px;height:540px;top:-60px;left:50%;transform:translateX(-50%);
          background:radial-gradient(circle,rgba(34,211,238,0.09) 0%,transparent 70%);
          animation:pbd1 12s ease-in-out infinite; }
        .pblob-2 { width:380px;height:380px;top:40%;left:-80px;
          background:radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%);
          animation:pbd2 15s ease-in-out infinite; }
        .pblob-3 { width:460px;height:460px;bottom:5%;right:-70px;
          background:radial-gradient(circle,rgba(99,179,237,0.09) 0%,transparent 70%);
          animation:pbd3 10s ease-in-out infinite; }
        @keyframes pbd1{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-48%) scale(1.06)}}
        @keyframes pbd2{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
        @keyframes pbd3{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(20px) scale(1.04)}}

        /* grain */
        .proj-grain{position:absolute;inset:0;opacity:0.028;pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px;}

        /* inner */
        .proj-inner-wrap { position:relative; z-index:2; max-width:1200px; margin:0 auto; }

        /* header */
        .proj-header { display:flex; flex-direction:column; align-items:center; text-align:center; margin-bottom:4.5rem; }

        .proj-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:10.5px; font-weight:600; letter-spacing:0.24em; text-transform:uppercase;
          color:rgba(125,232,255,0.7); padding:5px 16px; border-radius:100px;
          border:1px solid rgba(125,232,255,0.15); background:rgba(34,211,238,0.05);
          backdrop-filter:blur(8px); margin-bottom:1.4rem;
        }
        .proj-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#22d3ee;
          animation:pedot 2s ease-in-out infinite; }
        @keyframes pedot{0%,100%{box-shadow:0 0 0 0 rgba(34,211,238,0.6)}50%{box-shadow:0 0 0 5px rgba(34,211,238,0)}}

        .proj-section-heading {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(3rem,7vw,5.6rem); font-weight:800; line-height:0.92;
          color:#fff; letter-spacing:-0.02em; margin:0 0 0.15em;
        }
        .proj-section-heading-accent {
          background:linear-gradient(100deg,#e0f7ff 0%,#7de8ff 40%,#38bdf8 70%,#bae6fd 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .proj-hr {
          width:56px; height:2px; margin:1.6rem auto 0;
          background:linear-gradient(90deg,#22d3ee,rgba(56,189,248,0.3),transparent); border-radius:2px;
        }

        /* project cards */
        .proj-list { display:flex; flex-direction:column; gap:28px; }

        .proj-row {
          position:relative; overflow:hidden;
          border-radius:24px;
          border:1px solid rgba(125,235,255,0.1);
          background:rgba(255,255,255,0.025);
          backdrop-filter:blur(16px);
          padding:2.4rem;
          transition:border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
          cursor:default;
          --proj-accent: #22d3ee;
        }
        .proj-row:hover {
          border-color:rgba(125,235,255,0.24);
          background:rgba(34,211,238,0.035);
          box-shadow:0 24px 70px rgba(0,0,0,0.4), 0 0 50px rgba(34,211,238,0.06);
        }

        /* ghost number */
        .proj-bg-num {
          position:absolute; top:-20px; right:20px;
          font-family:'Cormorant Garamond',serif; font-size:9rem; font-weight:800;
          color:rgba(125,235,255,0.038); line-height:1; pointer-events:none; user-select:none;
          transition:color 0.35s;
        }
        .proj-row:hover .proj-bg-num { color:rgba(125,235,255,0.075); }

        /* inner grid */
        .proj-inner {
          display:grid; grid-template-columns:1fr 1fr; gap:2.4rem; align-items:center;
        }
        .proj-inner-reverse { direction:rtl; }
        .proj-inner-reverse > * { direction:ltr; }
        @media(max-width:780px){
          .proj-inner, .proj-inner-reverse { grid-template-columns:1fr; direction:ltr; }
        }

        /* image */
        .proj-img-wrap {
          position:relative; overflow:hidden; border-radius:16px;
          border:1px solid rgba(125,235,255,0.12);
          aspect-ratio:16/10; display:block;
          background:#040d18;
        }
        .proj-img { width:100%; height:100%; object-fit:cover; display:block;
          transition:transform 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease; }
        .proj-img-wrap:hover .proj-img { transform:scale(1.05); filter:brightness(0.72); }

        .proj-img-overlay {
          position:absolute; inset:0; z-index:1; pointer-events:none;
          background:linear-gradient(to top, rgba(2,6,12,0.55) 0%, transparent 55%);
        }
        .proj-img-shimmer {
          position:absolute; inset-x:0; top:0; height:1px; z-index:2;
          background:linear-gradient(90deg,transparent,rgba(125,235,255,0.4),transparent);
        }
        .proj-img-hover-icon {
          position:absolute; inset:0; z-index:3;
          display:flex; align-items:center; justify-content:center;
          font-size:2rem; color:rgba(125,235,255,0.9);
          opacity:0; transition:opacity 0.3s ease;
        }
        .proj-img-wrap:hover .proj-img-hover-icon { opacity:1; }

        /* content */
        .proj-content { display:flex; flex-direction:column; gap:0; position:relative; z-index:1; }

        .proj-tag {
          display:inline-flex; align-self:flex-start;
          font-size:0.64rem; font-weight:600; letter-spacing:0.2em; text-transform:uppercase;
          color:var(--proj-accent); opacity:0.8;
          padding:4px 12px; border-radius:100px;
          border:1px solid rgba(125,235,255,0.15); background:rgba(34,211,238,0.05);
          margin-bottom:1rem;
        }

        .proj-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.7rem,3vw,2.4rem); font-weight:800;
          color:#fff; margin:0; line-height:1.05; letter-spacing:-0.02em;
        }

        .proj-divider {
          width:36px; height:1.5px; margin:1rem 0 1.2rem;
          background:linear-gradient(90deg,var(--proj-accent),transparent); border-radius:2px;
          transition:width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-row:hover .proj-divider { width:60px; }

        .proj-desc {
          font-size:clamp(0.88rem,1.4vw,0.98rem);
          line-height:1.82; color:rgba(186,230,253,0.58);
          font-weight:300; margin:0 0 1.6rem;
        }

        .proj-cta {
          display:inline-flex; align-items:center; gap:6px;
          font-size:0.88rem; font-weight:600; letter-spacing:0.04em;
          color:var(--proj-accent); text-decoration:none;
          border-bottom:1px solid transparent;
          transition:border-color 0.3s ease, gap 0.3s ease;
          align-self:flex-start;
        }
        .proj-cta:hover { border-color:var(--proj-accent); gap:10px; }
        .proj-cta-icon { width:16px; height:16px; flex-shrink:0; }

        /* bottom accent */
        .proj-bottom-line {
          position:absolute; left:0; bottom:0; right:0; height:1.5px;
          background:linear-gradient(90deg,transparent,var(--proj-accent),transparent);
          opacity:0; transition:opacity 0.35s;
        }
        .proj-row:hover .proj-bottom-line { opacity:0.5; }
      `}</style>

        <section className="proj-root" id="projects">
          <div className="proj-blobs">
            <div className="pblob pblob-1" />
            <div className="pblob pblob-2" />
            <div className="pblob pblob-3" />
          </div>
          <div className="proj-grain" />

          <div className="proj-inner-wrap">
            {/* Header */}
            <motion.div
                className="proj-header"
                ref={headRef}
                variants={stagger}
                initial="hidden"
                animate={headInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeUp}>
                <div className="proj-eyebrow">
                  <span className="proj-eyebrow-dot" />
                  What I&apos;ve Built
                </div>
              </motion.div>
              <motion.h2 className="proj-section-heading" variants={fadeUp}>
                My <span className="proj-section-heading-accent">Projects</span>
              </motion.h2>
              <motion.div variants={fadeUp}>
                <div className="proj-hr" />
              </motion.div>
            </motion.div>

            {/* Project rows */}
            <div className="proj-list">
              {projects.map((project, i) => (
                  <ProjectRow key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      </>
  );
}
