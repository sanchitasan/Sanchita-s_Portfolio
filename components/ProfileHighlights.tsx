"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LuArrowUpRight, LuAward, LuBadgeCheck,
  LuBrainCircuit, LuCode2, LuGraduationCap, LuTrophy,
} from "react-icons/lu";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiFastapi, SiScikitlearn, SiPandas, SiNumpy,
  SiPowerbi, SiMongodb, SiPostgresql, SiGit,
  SiPostman, SiStreamlit,
} from "react-icons/si";

/* ─────────── DATA ─────────── */
const experiences = [
  { role: "Placement Coordinator", organization: "NIT Rourkela", timeline: "Apr 2026 – Present", current: true },
  { role: "Product & Engineering Intern", organization: "Saptang Labs", timeline: "Dec 2025 – Present", current: true },
  { role: "Lead Organizer", organization: "HackOdisha 5.0", timeline: "May – Oct 2025", current: false },
  { role: "Machine Learning Intern", organization: "Future Interns", timeline: "Jun – Jul 2025", current: false },
];

const skills = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "FastAPI", icon: SiFastapi },
  ],
  "Data Science": [
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
  ],
  Analytics: [{ name: "Power BI", icon: SiPowerbi }],
  Databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
  Tools: [
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
    { name: "Streamlit", icon: SiStreamlit },
  ],
};

const certifications = [
  {
    title: "Ethos Hackathon 1st Runner-Up",
    issuer: "IIT Guwahati",
    label: "Award",
    gradFrom: "#c084fc",
    gradTo: "#60a5fa",
    link: "https://drive.google.com/file/d/1bUDBSUggLOhgfy9RLnvlyt1e-uas231d/view?usp=drive_link",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Regression and Classification",
    label: "Certification",
    gradFrom: "#22d3ee",
    gradTo: "#34d399",
    link: "https://drive.google.com/file/d/1-hQlFIqqm-YuVUmomSCKt2FW5GmpLfzg/view?usp=drive_link",
  },
  {
    title: "Navonmesh 25 Hackathon Finalist",
    issuer: "Hackathon Recognition",
    label: "Finalist",
    gradFrom: "#fbbf24",
    gradTo: "#f472b6",
    link: "https://drive.google.com/file/d/1zRvlY4SC5w1HgKuSpJxXqlbwEHJ1BYI6/view?usp=sharing",
  },
];

const achievements = [
  { title: "1st Runner-Up", icon: LuTrophy, description: "Secured a podium finish at IIT Guwahati Ethos Hackathon through fast product execution and problem-solving under pressure.", num: "01" },
  { title: "Finalist", icon: LuAward, description: "Reached the finalist stage at Navonmesh 25, reflecting strong solution quality and competitive hackathon performance.", num: "02" },
  { title: "Research Contribution", icon: LuBrainCircuit, description: "Contributed to IEEE INDISCON 2025 accepted work on attention-enhanced CNN models for human activity recognition.", num: "03" },
  { title: "Production Builder", icon: LuCode2, description: "Built research-backed dashboards, ML applications, and backend systems designed for real-world usability and scale.", num: "04" },
];

/* ─────────── ANIMATION VARIANTS ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };
const cardIn = (i) => ({
  hidden: { opacity: 0, y: 52, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } },
});

/* ─────────── SUB-COMPONENTS ─────────── */
function SectionEyebrow({ label }) {
  return (
      <div className="ph-eyebrow">
        <span className="ph-eyebrow-dot" />
        {label}
      </div>
  );
}

function SectionHeading({ line1, line2 }) {
  return (
      <h2 className="ph-heading">
        {line1}
        <span className="ph-heading-accent"> {line2}</span>
      </h2>
  );
}

function TimelineCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
      <motion.div
          ref={ref}
          className={`tl-row ${isLeft ? "tl-row-left" : "tl-row-right"}`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardIn(index)}
      >
        {/* spacer for alternating side */}
        <div className="tl-spacer" />

        {/* dot */}
        <div className="tl-dot-wrap">
          <div className="tl-dot">
            <span className="tl-dot-inner" />
            <span className="tl-dot-glow" />
          </div>
        </div>

        {/* card */}
        <div className="tl-card-wrap">
          <motion.div className="tl-card" whileHover={{ y: -5 }} transition={{ duration: 0.28, ease: "easeOut" }}>
            <div className="tl-card-shimmer" />
            {exp.current && <span className="tl-current-badge">● Active</span>}
            <p className="tl-timeline">{exp.timeline}</p>
            <h3 className="tl-role">{exp.role}</h3>
            <p className="tl-org">{exp.organization}</p>
          </motion.div>
        </div>
      </motion.div>
  );
}

function SkillPill({ skill }) {
  const Icon = skill.icon;
  return (
      <div className="skill-pill">
        <Icon className="skill-pill-icon" aria-hidden="true" />
        <span className="skill-pill-name">{skill.name}</span>
      </div>
  );
}

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  return (
      <motion.a
          ref={ref}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card"
          style={{ "--grad-from": cert.gradFrom, "--grad-to": cert.gradTo }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardIn(index)}
          whileHover={{ y: -8 }}
      >
        {/* gradient border ring */}
        <div className="cert-ring" />

        <div className="cert-inner">
          <div className="cert-top-row">
            <span className="cert-label">{cert.label}</span>
            <LuArrowUpRight className="cert-arrow" aria-hidden="true" />
          </div>

          <div className="cert-body">
            <div className="cert-icon-wrap">
              <LuBadgeCheck className="cert-icon" aria-hidden="true" />
            </div>
            <div className="cert-text">
              <p className="cert-verified">Verified Credential</p>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>

          {/* gradient line at bottom */}
          <div className="cert-bottom-line" />
        </div>
      </motion.a>
  );
}

function AchievCard({ item, index }) {
  const Icon = item.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  return (
      <motion.div
          ref={ref}
          className="ach-card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardIn(index)}
      >
        <span className="ach-bg-num">{item.num}</span>
        <div className="ach-icon-wrap"><Icon className="ach-icon" aria-hidden="true" /></div>
        <h3 className="ach-title">{item.title}</h3>
        <div className="ach-divider" />
        <p className="ach-desc">{item.description}</p>
        <div className="ach-glow-line" />
      </motion.div>
  );
}

/* ─────────── MAIN COMPONENT ─────────── */
export default function ProfileHighlights() {
  const expRef = useRef(null);
  const expInView = useInView(expRef, { once: false, margin: "-80px" });
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: false, margin: "-80px" });

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ─── SHARED FOUNDATIONS ─── */
        .ph-root { position:relative; overflow:hidden; font-family:'DM Sans',sans-serif; color:#fff; }

        /* blobs */
        .ph-blobs { pointer-events:none; position:absolute; inset:0; overflow:hidden; }
        .ph-blob { position:absolute; border-radius:50%; filter:blur(80px); }
        .ph-blob-1 { width:520px;height:520px;top:-80px;left:50%;transform:translateX(-50%);
          background:radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 70%);
          animation:pbdrift1 11s ease-in-out infinite; }
        .ph-blob-2 { width:360px;height:360px;top:35%;left:-80px;
          background:radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 70%);
          animation:pbdrift2 14s ease-in-out infinite; }
        .ph-blob-3 { width:440px;height:440px;bottom:5%;right:-60px;
          background:radial-gradient(circle,rgba(99,179,237,0.1) 0%,transparent 70%);
          animation:pbdrift3 9s ease-in-out infinite; }
        @keyframes pbdrift1{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-48%) scale(1.06)}}
        @keyframes pbdrift2{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes pbdrift3{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(18px) scale(1.04)}}

        /* grain */
        .ph-grain{position:absolute;inset:0;opacity:0.028;pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px;}

        /* inner container */
        .ph-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:7rem 2rem 7rem;}
        .ph-header-center{display:flex;flex-direction:column;align-items:center;text-align:center;}

        /* eyebrow */
        .ph-eyebrow{display:inline-flex;align-items:center;gap:8px;
          font-size:10.5px;font-weight:600;letter-spacing:0.24em;text-transform:uppercase;
          color:rgba(125,232,255,0.7);padding:5px 16px;border-radius:100px;
          border:1px solid rgba(125,232,255,0.15);background:rgba(34,211,238,0.05);
          backdrop-filter:blur(8px);margin-bottom:1.4rem;}
        .ph-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:#22d3ee;flex-shrink:0;
          animation:phdot 2s ease-in-out infinite;}
        @keyframes phdot{0%,100%{box-shadow:0 0 0 0 rgba(34,211,238,0.6)}50%{box-shadow:0 0 0 5px rgba(34,211,238,0)}}

        /* section heading */
        .ph-heading{font-family:'Cormorant Garamond',serif;
          font-size:clamp(3rem,7vw,5.6rem);font-weight:800;line-height:0.92;
          color:#fff;letter-spacing:-0.02em;margin:0 0 0.15em;}
        .ph-heading-accent{
          background:linear-gradient(100deg,#e0f7ff 0%,#7de8ff 40%,#38bdf8 70%,#bae6fd 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

        /* hr accent */
        .ph-hr{width:56px;height:2px;margin:1.6rem 0 2rem;
          background:linear-gradient(90deg,#22d3ee,rgba(56,189,248,0.3),transparent);border-radius:2px;}

        /* lead text */
        .ph-lead{max-width:660px;font-size:clamp(0.9rem,1.6vw,1.05rem);
          line-height:1.85;color:rgba(186,230,253,0.6);font-weight:300;margin:0 auto 3.5rem;}

        /* ─── EXPERIENCE SECTION ─── */
        .exp-section{
          background:linear-gradient(175deg,#02060c 0%,#091828 15%,#0d2340 35%,#112d50 52%,#184061 65%,#2d7aa0 78%,#0f1d30 90%,#02060c 100%);}

        /* main two-col layout */
        .exp-cols{display:grid;grid-template-columns:1.3fr 1fr;gap:28px;align-items:start;}
        @media(max-width:900px){.exp-cols{grid-template-columns:1fr;}}

        /* left panel */
        .exp-panel{border-radius:22px;border:1px solid rgba(125,235,255,0.1);
          background:rgba(255,255,255,0.025);backdrop-filter:blur(16px);
          padding:2rem;position:relative;overflow:hidden;}
        .exp-panel-title{font-family:'Cormorant Garamond',serif;font-size:1.9rem;font-weight:700;color:#fff;margin:0 0 2rem;}

        /* timeline */
        .tl-track{position:relative;}
        .tl-line{position:absolute;left:50%;top:0;bottom:0;width:1px;transform:translateX(-50%);
          background:linear-gradient(to bottom,rgba(34,211,238,0.5),rgba(56,189,248,0.3),transparent);
          transform-origin:top;}
        @media(max-width:640px){.tl-line{left:12px;}}

        .tl-row{display:grid;grid-template-columns:1fr 28px 1fr;gap:0 16px;align-items:center;margin-bottom:28px;}
        .tl-row-left .tl-spacer{order:0}
        .tl-row-left .tl-dot-wrap{order:1}
        .tl-row-left .tl-card-wrap{order:2}
        .tl-row-right .tl-card-wrap{order:0}
        .tl-row-right .tl-dot-wrap{order:1}
        .tl-row-right .tl-spacer{order:2}
        @media(max-width:640px){
          .tl-row{grid-template-columns:28px 1fr;gap:0 12px;}
          .tl-row-left .tl-spacer,.tl-row-right .tl-spacer{display:none;}
          .tl-row-right .tl-card-wrap{order:2;}
          .tl-row-right .tl-dot-wrap{order:0;}
        }

        .tl-dot-wrap{display:flex;justify-content:center;align-items:flex-start;padding-top:18px;}
        .tl-dot{position:relative;width:26px;height:26px;border-radius:50%;
          border:1px solid rgba(34,211,238,0.45);background:#040d18;
          display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .tl-dot-inner{width:10px;height:10px;border-radius:50%;background:#22d3ee;}
        .tl-dot-glow{position:absolute;inset:0;border-radius:50%;background:rgba(34,211,238,0.2);filter:blur(6px);}

        .tl-card{position:relative;overflow:hidden;border-radius:18px;
          border:1px solid rgba(255,255,255,0.09);background:rgba(255,255,255,0.035);
          backdrop-filter:blur(12px);padding:1.2rem 1.4rem;cursor:default;
          transition:border-color 0.3s ease,background 0.3s ease,box-shadow 0.3s ease;}
        .tl-card:hover{border-color:rgba(34,211,238,0.28);background:rgba(34,211,238,0.05);
          box-shadow:0 12px 40px rgba(0,0,0,0.3),0 0 30px rgba(34,211,238,0.07);}
        .tl-card-shimmer{position:absolute;inset-x:0;top:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent);}
        .tl-current-badge{display:inline-flex;align-items:center;gap:5px;
          font-size:0.62rem;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;
          color:#22d3ee;margin-bottom:0.5rem;}
        .tl-timeline{font-size:0.68rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;
          color:rgba(125,235,255,0.65);margin:0 0 0.5rem;}
        .tl-role{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:700;
          color:#fff;margin:0 0 0.3rem;line-height:1.15;}
        .tl-org{font-size:0.85rem;color:rgba(186,230,253,0.55);margin:0;font-weight:300;}

        /* right panel stack */
        .exp-right{display:flex;flex-direction:column;gap:20px;}

        /* skills panel */
        .skills-panel{border-radius:22px;border:1px solid rgba(125,235,255,0.1);
          background:rgba(255,255,255,0.025);backdrop-filter:blur(16px);padding:1.8rem;}
        .skills-panel-title{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;color:#fff;margin:0 0 1.6rem;}
        .skills-category{margin-bottom:1.4rem;}
        .skills-cat-label{font-size:0.65rem;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;
          color:rgba(125,235,255,0.65);margin-bottom:0.8rem;}
        .skills-pills{display:flex;flex-wrap:wrap;gap:8px;}

        .skill-pill{display:inline-flex;align-items:center;gap:8px;
          padding:7px 14px;border-radius:100px;
          border:1px solid rgba(125,235,255,0.14);background:rgba(255,255,255,0.035);
          backdrop-filter:blur(8px);cursor:default;
          transition:all 0.3s cubic-bezier(0.22,1,0.36,1);}
        .skill-pill:hover{border-color:rgba(34,211,238,0.38);background:rgba(34,211,238,0.08);
          transform:translateY(-3px);box-shadow:0 8px 24px rgba(34,211,238,0.12);}
        .skill-pill-icon{font-size:1rem;color:#7de8ff;flex-shrink:0;transition:transform 0.3s ease;}
        .skill-pill:hover .skill-pill-icon{transform:scale(1.15);}
        .skill-pill-name{font-size:0.82rem;font-weight:500;color:rgba(224,247,255,0.88);}

        /* recognition mini-panel */
        .recog-panel{border-radius:22px;border:1px solid rgba(125,235,255,0.1);
          background:rgba(255,255,255,0.025);backdrop-filter:blur(16px);padding:1.8rem;}
        .recog-panel-title{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;color:#fff;margin:0 0 1.2rem;}
        .recog-item{padding:1rem 1.2rem;border-radius:14px;
          border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.03);
          margin-bottom:10px;transition:border-color 0.3s ease,background 0.3s ease;}
        .recog-item:hover{border-color:rgba(34,211,238,0.22);background:rgba(34,211,238,0.04);}
        .recog-item:last-child{margin-bottom:0;}
        .recog-item-title{font-size:0.95rem;font-weight:600;color:#fff;margin:0 0 0.3rem;}
        .recog-item-desc{font-size:0.82rem;line-height:1.65;color:rgba(186,230,253,0.55);margin:0;font-weight:300;}

        /* ─── CERTIFICATIONS SECTION ─── */
        .cert-section{
          background:linear-gradient(175deg,#02060c 0%,#091828 15%,#0d2340 35%,#112d50 52%,#184061 65%,#2d7aa0 78%,#0f1d30 90%,#02060c 100%);}

        /* cert cards grid */
        .cert-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:4rem;}
        @media(max-width:900px){.cert-grid{grid-template-columns:1fr;}}

        .cert-card{position:relative;border-radius:22px;overflow:hidden;
          border:1px solid rgba(125,235,255,0.1);background:rgba(255,255,255,0.025);
          backdrop-filter:blur(16px);text-decoration:none;display:flex;flex-direction:column;
          transition:border-color 0.35s ease,box-shadow 0.35s ease;}
        .cert-card:hover{border-color:rgba(125,235,255,0.24);
          box-shadow:0 24px 60px rgba(0,0,0,0.45),0 0 50px rgba(34,211,238,0.07);}

        /* gradient ring glow on hover */
        .cert-ring{position:absolute;inset:-1px;border-radius:22px;
          background:linear-gradient(135deg,var(--grad-from),var(--grad-to));
          opacity:0;transition:opacity 0.35s ease;pointer-events:none;z-index:0;}
        .cert-card:hover .cert-ring{opacity:0.18;}

        .cert-inner{position:relative;z-index:1;padding:1.6rem;display:flex;flex-direction:column;gap:1.4rem;flex:1;}

        .cert-top-row{display:flex;align-items:center;justify-content:space-between;}
        .cert-label{font-size:0.65rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;
          color:rgba(125,235,255,0.75);padding:5px 12px;border-radius:100px;
          border:1px solid rgba(125,235,255,0.18);background:rgba(34,211,238,0.06);}
        .cert-arrow{width:18px;height:18px;color:rgba(125,235,255,0.6);
          transition:transform 0.3s ease,color 0.3s ease;}
        .cert-card:hover .cert-arrow{transform:translate(3px,-3px);color:#22d3ee;}

        .cert-body{display:flex;flex-direction:column;gap:1rem;flex:1;}
        .cert-icon-wrap{width:46px;height:46px;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          background:linear-gradient(135deg,rgba(34,211,238,0.15),rgba(56,189,248,0.08));
          border:1px solid rgba(125,235,255,0.2);}
        .cert-icon{width:22px;height:22px;color:#22d3ee;}
        .cert-text{display:flex;flex-direction:column;gap:0.4rem;margin-top:auto;}
        .cert-verified{font-size:0.62rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;
          color:rgba(125,235,255,0.45);margin:0;}
        .cert-title{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700;
          color:#fff;margin:0;line-height:1.15;}
        .cert-issuer{font-size:0.85rem;color:rgba(186,230,253,0.5);margin:0;font-weight:300;}
        .cert-bottom-line{height:2px;border-radius:2px;
          background:linear-gradient(90deg,var(--grad-from),var(--grad-to));
          opacity:0;transition:opacity 0.35s ease;}
        .cert-card:hover .cert-bottom-line{opacity:0.8;}

        /* achievements grid */
        .ach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        @media(max-width:1000px){.ach-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:580px){.ach-grid{grid-template-columns:1fr;}}

        .ach-card{position:relative;overflow:hidden;border-radius:20px;padding:1.8rem 1.6rem 2rem;
          border:1px solid rgba(125,235,255,0.1);background:rgba(255,255,255,0.026);
          backdrop-filter:blur(14px);cursor:default;
          transition:border-color 0.35s ease,background 0.35s ease,transform 0.35s cubic-bezier(0.22,1,0.36,1),box-shadow 0.35s ease;}
        .ach-card:hover{border-color:rgba(125,235,255,0.26);background:rgba(34,211,238,0.04);
          transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,0,0,0.35),0 0 36px rgba(34,211,238,0.07);}

        .ach-bg-num{position:absolute;top:-14px;right:14px;
          font-family:'Cormorant Garamond',serif;font-size:6.5rem;font-weight:800;
          color:rgba(125,235,255,0.042);line-height:1;pointer-events:none;user-select:none;
          transition:color 0.35s;}
        .ach-card:hover .ach-bg-num{color:rgba(125,235,255,0.08);}

        .ach-icon-wrap{width:46px;height:46px;border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          background:rgba(34,211,238,0.1);border:1px solid rgba(125,235,255,0.18);
          color:#22d3ee;margin-bottom:1.1rem;
          transition:background 0.3s,box-shadow 0.3s;}
        .ach-card:hover .ach-icon-wrap{background:rgba(34,211,238,0.16);box-shadow:0 0 20px rgba(34,211,238,0.2);}
        .ach-icon{width:22px;height:22px;}
        .ach-title{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700;
          color:#fff;margin:0;line-height:1.1;}
        .ach-divider{width:32px;height:1.5px;margin:0.9rem 0;
          background:linear-gradient(90deg,#22d3ee,transparent);border-radius:2px;
          transition:width 0.4s cubic-bezier(0.22,1,0.36,1);}
        .ach-card:hover .ach-divider{width:54px;}
        .ach-desc{font-size:0.86rem;line-height:1.75;color:rgba(186,230,253,0.56);margin:0;font-weight:300;}
        .ach-glow-line{position:absolute;left:0;bottom:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,#22d3ee,transparent);
          opacity:0;transition:opacity 0.35s;}
        .ach-card:hover .ach-glow-line{opacity:0.55;}
      `}</style>

        {/* ══════════ EXPERIENCE SECTION ══════════ */}
        <section className="ph-root exp-section" id="experience">
          <div className="ph-blobs">
            <div className="ph-blob ph-blob-1" /><div className="ph-blob ph-blob-2" /><div className="ph-blob ph-blob-3" />
          </div>
          <div className="ph-grain" />

          <div className="ph-inner" ref={expRef}>
            {/* Header */}
            <motion.div className="ph-header-center" variants={stagger} initial="hidden" animate={expInView ? "visible" : "hidden"}>
              <motion.div variants={fadeUp}><SectionEyebrow label="Where I've Been" /></motion.div>
              <motion.div variants={fadeUp}><SectionHeading line1="Experience &" line2="Profile" /></motion.div>
              <motion.div variants={fadeUp}><div className="ph-hr" style={{ margin: "1.6rem auto 2rem" }} /></motion.div>
              <motion.p className="ph-lead" variants={fadeUp}>
                I bring together web engineering, data analytics, and applied machine learning to build products that are useful, research-backed, and ready for real users.
              </motion.p>
            </motion.div>

            {/* Two-col layout */}
            <div className="exp-cols">
              {/* Timeline */}
              <div className="exp-panel">
                <h3 className="exp-panel-title">Experience Timeline</h3>
                <div className="tl-track">
                  <motion.div
                      className="tl-line"
                      initial={{ scaleY: 0, opacity: 0.3 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: false, amount: 0.2 }}
                  />
                  {experiences.map((exp, i) => (
                      <TimelineCard key={exp.role} exp={exp} index={i} />
                  ))}
                </div>
              </div>

              {/* Right stack: Skills + Recognition */}
              <div className="exp-right">
                <div className="skills-panel">
                  <h3 className="skills-panel-title">Core Skills</h3>
                  {Object.entries(skills).map(([cat, items]) => (
                      <div key={cat} className="skills-category">
                        <div className="skills-cat-label">{cat}</div>
                        <div className="skills-pills">
                          {items.map((s) => <SkillPill key={s.name} skill={s} />)}
                        </div>
                      </div>
                  ))}
                </div>

                <div className="recog-panel">
                  <h3 className="recog-panel-title">Recognition Snapshot</h3>
                  {achievements.slice(0, 2).map((a) => (
                      <div key={a.title} className="recog-item">
                        <p className="recog-item-title">{a.title}</p>
                        <p className="recog-item-desc">{a.description}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CERTIFICATIONS SECTION ══════════ */}
        <section className="ph-root cert-section" id="certifications">
          <div className="ph-blobs">
            <div className="ph-blob ph-blob-1" style={{ background: "radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%)" }} />
            <div className="ph-blob ph-blob-3" />
          </div>
          <div className="ph-grain" />

          <div className="ph-inner" ref={certRef}>
            {/* Header */}
            <motion.div className="ph-header-center" variants={stagger} initial="hidden" animate={certInView ? "visible" : "hidden"}>
              <motion.div variants={fadeUp}><SectionEyebrow label="Awards & Credentials" /></motion.div>
              <motion.div variants={fadeUp}><SectionHeading line1="Certifications &" line2="Achievements" /></motion.div>
              <motion.div variants={fadeUp}><div className="ph-hr" style={{ margin: "1.6rem auto 3rem" }} /></motion.div>
            </motion.div>

            {/* Cert cards */}
            <div className="cert-grid">
              {certifications.map((c, i) => <CertCard key={c.title} cert={c} index={i} />)}
            </div>

            {/* Achievement cards */}
            <div className="ach-grid">
              {achievements.map((a, i) => <AchievCard key={a.title} item={a} index={i} />)}
            </div>
          </div>
        </section>
      </>
  );
}
