"use client";
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuGithub, LuMail, LuSend, LuCheck, LuAlertCircle } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sanchitasan",
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanchitasan",
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/123NITR/",
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sanchita_priyadarshinee/",
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
    ),
  },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", number: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const scriptURL = "https://script.google.com/macros/s/AKfycbxGmI8ZssYAdA47VytcBuSHS6A-S4djKNMhJT8MIfMqDuaPjBpGM2T_egQXtUxvwrjm/exec";

  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: false, margin: "-60px" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(scriptURL, { method: "POST", body: new FormData(e.currentTarget) });
      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", number: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ft-root {
          position: relative; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #fff;
          background: linear-gradient(175deg,
            #02060c 0%, #091828 15%, #0d2340 35%,
            #112d50 52%, #184061 65%,
            #2d7aa0 78%, #0f1d30 90%, #02060c 100%
          );
          padding: 7rem 2rem 0;
        }

        /* blobs */
        .ft-blobs { pointer-events:none; position:absolute; inset:0; overflow:hidden; }
        .ftblob { position:absolute; border-radius:50%; filter:blur(80px); }
        .ftblob-1 { width:520px;height:520px;top:-60px;left:50%;transform:translateX(-50%);
          background:radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 70%);
          animation:ftbd1 11s ease-in-out infinite; }
        .ftblob-2 { width:360px;height:360px;top:30%;left:-80px;
          background:radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 70%);
          animation:ftbd2 14s ease-in-out infinite; }
        .ftblob-3 { width:440px;height:440px;bottom:10%;right:-60px;
          background:radial-gradient(circle,rgba(99,179,237,0.09) 0%,transparent 70%);
          animation:ftbd3 9s ease-in-out infinite; }
        @keyframes ftbd1{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-48%) scale(1.06)}}
        @keyframes ftbd2{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes ftbd3{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(18px) scale(1.04)}}

        /* grain */
        .ft-grain{position:absolute;inset:0;opacity:0.028;pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px;}

        .ft-inner { position:relative; z-index:2; max-width:1000px; margin:0 auto; }

        /* header */
        .ft-header { display:flex; flex-direction:column; align-items:center; text-align:center; margin-bottom:3.5rem; }

        .ft-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:10.5px; font-weight:600; letter-spacing:0.24em; text-transform:uppercase;
          color:rgba(125,232,255,0.7); padding:5px 16px; border-radius:100px;
          border:1px solid rgba(125,232,255,0.15); background:rgba(34,211,238,0.05);
          backdrop-filter:blur(8px); margin-bottom:1.4rem;
        }
        .ft-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#22d3ee;
          animation:ftdot 2s ease-in-out infinite; }
        @keyframes ftdot{0%,100%{box-shadow:0 0 0 0 rgba(34,211,238,0.6)}50%{box-shadow:0 0 0 5px rgba(34,211,238,0)}}

        .ft-heading {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(3rem,7vw,5.6rem); font-weight:800; line-height:0.92;
          color:#fff; letter-spacing:-0.02em; margin:0 0 0.15em;
        }
        .ft-heading-accent {
          background:linear-gradient(100deg,#e0f7ff 0%,#7de8ff 40%,#38bdf8 70%,#bae6fd 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .ft-hr {
          width:56px; height:2px; margin:1.6rem auto 1.4rem;
          background:linear-gradient(90deg,#22d3ee,rgba(56,189,248,0.3),transparent); border-radius:2px;
        }
        .ft-sub {
          font-size:clamp(0.9rem,1.5vw,1.02rem); line-height:1.8;
          color:rgba(186,230,253,0.58); font-weight:300; max-width:500px;
        }

        /* form card */
        .ft-card {
          border-radius:24px; border:1px solid rgba(125,235,255,0.12);
          background:rgba(255,255,255,0.025); backdrop-filter:blur(18px);
          padding:2.6rem; margin-bottom:2rem;
          position:relative; overflow:hidden;
        }
        .ft-card::before {
          content:''; position:absolute; inset-x:0; top:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(34,211,238,0.45),transparent);
        }

        /* form grid */
        .ft-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
        @media(max-width:600px){ .ft-grid { grid-template-columns:1fr; } }

        /* inputs */
        .ft-input, .ft-textarea {
          width:100%; padding:13px 16px;
          border-radius:14px;
          border:1px solid rgba(125,235,255,0.12);
          background:rgba(255,255,255,0.04);
          color:#e0f7ff; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:300;
          backdrop-filter:blur(8px);
          outline:none;
          transition:border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          box-sizing:border-box;
        }
        .ft-input::placeholder, .ft-textarea::placeholder { color:rgba(186,230,253,0.35); }
        .ft-input:focus, .ft-textarea:focus {
          border-color:rgba(34,211,238,0.45);
          background:rgba(34,211,238,0.04);
          box-shadow:0 0 0 3px rgba(34,211,238,0.08);
        }
        .ft-textarea { resize:vertical; min-height:130px; margin-bottom:14px; }

        /* submit btn */
        .ft-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:9px;
          width:100%; padding:14px 28px; border-radius:14px;
          background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(56,189,248,0.12));
          border:1px solid rgba(125,235,255,0.28); color:#e0f7ff;
          font-family:'DM Sans',sans-serif; font-size:0.95rem; font-weight:600; letter-spacing:0.04em;
          cursor:pointer; backdrop-filter:blur(10px);
          transition:all 0.3s cubic-bezier(0.22,1,0.36,1);
          position:relative; overflow:hidden;
        }
        .ft-btn:hover:not(:disabled) {
          background:linear-gradient(135deg,rgba(34,211,238,0.28),rgba(56,189,248,0.2));
          border-color:rgba(125,235,255,0.5);
          box-shadow:0 10px 36px rgba(34,211,238,0.18);
          transform:translateY(-2px);
        }
        .ft-btn:disabled { opacity:0.65; cursor:not-allowed; }
        .ft-btn-icon { width:17px; height:17px; flex-shrink:0; }

        /* response states */
        .ft-response {
          display:flex; align-items:center; justify-content:center; gap:8px;
          margin-top:1rem; padding:12px 20px; border-radius:12px;
          font-size:0.9rem; font-weight:500;
        }
        .ft-response-success {
          background:rgba(34,211,130,0.08); border:1px solid rgba(34,211,130,0.2);
          color:rgba(110,231,183,0.9);
        }
        .ft-response-error {
          background:rgba(248,113,113,0.08); border:1px solid rgba(248,113,113,0.2);
          color:rgba(252,165,165,0.9);
        }

        /* loading spinner */
        .ft-spinner {
          width:16px; height:16px; border:2px solid rgba(125,235,255,0.3);
          border-top-color:#22d3ee; border-radius:50%;
          animation:ftspin 0.7s linear infinite;
        }
        @keyframes ftspin{to{transform:rotate(360deg)}}

        /* divider */
        .ft-section-divider {
          height:1px; margin:3rem 0 2.6rem;
          background:linear-gradient(90deg,transparent,rgba(125,235,255,0.18),transparent);
        }

        /* social row */
        .ft-socials-wrap { display:flex; flex-direction:column; align-items:center; gap:1.4rem; }
        .ft-email-link {
          display:inline-flex; align-items:center; gap:8px;
          font-size:0.92rem; color:rgba(125,235,255,0.75); text-decoration:none;
          transition:color 0.3s ease;
        }
        .ft-email-link:hover { color:#7de8ff; }
        .ft-email-icon { width:15px; height:15px; flex-shrink:0; }

        .ft-socials { display:flex; align-items:center; gap:12px; }
        .ft-social-btn {
          display:flex; align-items:center; justify-content:center;
          width:44px; height:44px; border-radius:50%;
          border:1px solid rgba(125,235,255,0.15); background:rgba(255,255,255,0.04);
          color:rgba(186,230,253,0.7); text-decoration:none;
          backdrop-filter:blur(8px);
          transition:all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-social-btn:hover {
          border-color:rgba(34,211,238,0.4); background:rgba(34,211,238,0.1);
          color:#7de8ff; transform:translateY(-4px);
          box-shadow:0 8px 24px rgba(34,211,238,0.15);
        }

        /* bottom bar */
        .ft-bottom {
          margin-top:3rem; padding:1.5rem 2rem;
          border-top:1px solid rgba(125,235,255,0.08);
          display:flex; align-items:center; justify-content:center;
          font-size:0.78rem; color:rgba(186,230,253,0.3);
          font-weight:300; letter-spacing:0.04em;
          text-align:center;
        }
      `}</style>

        <footer className="ft-root" id="contact">
          <div className="ft-blobs">
            <div className="ftblob ftblob-1" />
            <div className="ftblob ftblob-2" />
            <div className="ftblob ftblob-3" />
          </div>
          <div className="ft-grain" />

          <div className="ft-inner">
            {/* Header */}
            <motion.div
                className="ft-header"
                ref={headRef}
                variants={stagger}
                initial="hidden"
                animate={headInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeUp}>
                <div className="ft-eyebrow">
                  <span className="ft-eyebrow-dot" />
                  Let&apos;s Work Together
                </div>
              </motion.div>
              <motion.h2 className="ft-heading" variants={fadeUp}>
                Get in <span className="ft-heading-accent">Touch</span>
              </motion.h2>
              <motion.div variants={fadeUp}><div className="ft-hr" /></motion.div>
              <motion.p className="ft-sub" variants={fadeUp}>
                Have a project in mind or just want to connect? Drop a message and I&apos;ll get back to you.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, margin: "-60px" }}
            >
              <div className="ft-card">
                <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                  <div className="ft-grid">
                    <input className="ft-input" type="text" name="firstName" placeholder="First Name"
                           value={formData.firstName} onChange={handleChange} required />
                    <input className="ft-input" type="text" name="lastName" placeholder="Last Name"
                           value={formData.lastName} onChange={handleChange} required />
                    <input className="ft-input" type="email" name="email" placeholder="Email Address"
                           value={formData.email} onChange={handleChange} required />
                    <input className="ft-input" type="tel" name="number" placeholder="Phone Number"
                           value={formData.number} onChange={handleChange} required />
                  </div>
                  <textarea className="ft-textarea" name="message" placeholder="Your Message"
                            value={formData.message} onChange={handleChange} required />

                  <button className="ft-btn" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? (
                        <><div className="ft-spinner" /> Sending…</>
                    ) : status === "success" ? (
                        <><LuCheck className="ft-btn-icon" /> Sent!</>
                    ) : (
                        <><LuSend className="ft-btn-icon" /> Send Message</>
                    )}
                  </button>

                  {status === "success" && (
                      <div className="ft-response ft-response-success">
                        <LuCheck style={{ width: 16, height: 16, flexShrink: 0 }} />
                        Your message has been sent successfully!
                      </div>
                  )}
                  {status === "error" && (
                      <div className="ft-response ft-response-error">
                        <LuAlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                        Something went wrong. Please try again.
                      </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, margin: "-40px" }}
            >
              <div className="ft-section-divider" />
              <div className="ft-socials-wrap">
                <a href="mailto:sanchitapriyadarshinee@gmail.com" className="ft-email-link">
                  <LuMail className="ft-email-icon" />
                  sanchitapriyadarshinee@gmail.com
                </a>
                <div className="ft-socials">
                  {socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                         className="ft-social-btn" aria-label={s.label}>
                        {s.icon}
                      </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="ft-bottom">
            © 2025 Sanchita Priyadarshinee. All rights reserved.
          </div>
        </footer>
      </>
  );
}
