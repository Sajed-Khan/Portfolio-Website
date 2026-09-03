"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Datacell Solutions",
    date: "Aug 2024 - Jul 2026",
    stack: "React.js, Next.js, Vue.js, Node.js, .NET, TypeScript, SQL",
    points: [
      "Built MOHAP KPI and Portfolio Management platforms, including role-based dashboards used by 300+ employees across 50+ UAE hospitals.",
      "Implemented OAuth2, JWT, and rate-limited REST APIs for Dubai Health Authority services supporting the Dubai Now mobile application.",
      "Led frontend development for the Quran Awards judging platform, serving 4,000+ global users with real-time scoring workflows.",
      "Built Next.js interfaces and Node.js APIs for DHA CMS and Service Builder, aligned with Dubai Digital Design standards.",
      "Delivered Dubai Customs Voice of Customer and KPI modules with dashboard visualizations and AI-assisted feedback analysis.",
      "Developed EPAA ArcGIS-powered inspection workflows with dynamic maps, RBAC, and streamlined approval flows.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "LaBamba Fashion",
    date: "Apr 2024 - Jul 2024",
    stack: "Next.js, TypeScript, MongoDB, Node.js",
    points: [
      "Designed and built a production-ready multi-tenant B2C ecommerce platform with storefront, admin dashboard, inventory, and order management.",
      "Integrated Stripe checkout flows, payment intents, and transaction validation.",
      "Owned delivery from requirements gathering and architecture through Vercel deployment.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Trustline Digital",
    date: "May 2023 - Aug 2023",
    stack: "MongoDB, Express.js, React.js, Node.js",
    points: [
      "Collaborated on client and server delivery for production web platforms.",
      "Implemented OTP-based SMS authentication to secure admin access.",
      "Deployed the platform with SSL and Nginx configuration on Google Cloud.",
    ],
  },
];

const skillGroups = [
  "Frontend: React.js, Next.js, Vue.js, TypeScript, JavaScript, HTML5, CSS3",
  "Backend: Node.js, Express.js, FastAPI, Python, .NET, REST APIs",
  "AI: LangChain, LangGraph, RAG, vector search, tool-calling workflows",
  "Databases: PostgreSQL, MongoDB, MySQL, Qdrant, Redis, Prisma, Sequelize",
  "Cloud & DevOps: AWS, Docker, Vercel, GCP, Nginx, Stripe",
];

const Resume = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  useEffect(() => {
    if (!isCertOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCertOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCertOpen]);

  return (
    <section className="min-h-screen">
      <style jsx global>{`
        @keyframes delayedAppear {
          0% { opacity: 0; visibility: hidden; }
          99% { opacity: 0; visibility: hidden; }
          100% { opacity: 1; visibility: visible; }
        }

        @keyframes modalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalPop {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .delayed-image-frame {
          opacity: 0;
          visibility: hidden;
          animation: delayedAppear 1.1s ease forwards;
        }

        .modal-backdrop {
          animation: modalFade 180ms ease-out;
        }

        .modal-panel {
          animation: modalPop 220ms ease-out;
        }
      `}</style>

      <div className="container mx-auto py-12 xl:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="h2 mt-4">Experience</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              AWS Certified full stack developer building production-grade web
              applications for UAE government and commercial teams. Focused on
              end-to-end delivery from architecture and implementation to deployment.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="card p-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="h3">{item.role}</h3>
                      <p className="mt-1 text-white/70">{item.company}</p>
                    </div>
                    <span className="text-sm text-accent">{item.date}</span>
                  </div>
                  <p className="mt-2 text-white/60">{item.stack}</p>
                  <ul className="mt-4 flex list-inside list-disc flex-col gap-2 text-white/70">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="delayed-image-frame flex flex-col gap-6">
            <div className="card relative p-6 content-entrance">
              <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gold/30 opacity-70 blur-2xl glow-pulse" />
              <p className="eyebrow">Education</p>
              <h3 className="h3 mt-4">University of Sharjah</h3>
              <p className="mt-2 text-white/70">BSc. Computer Science</p>
              <p className="mt-1 text-white/60">Sharjah, UAE</p>
              <p className="text-white/60">Jan 2020 - Jul 2024</p>
            </div>

            <div className="card relative p-6 content-entrance">
              <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gold/30 opacity-70 blur-2xl glow-pulse" />
              <p className="eyebrow">Certifications</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="h3">AWS Developer Associate (DVA-C02)</h3>
                  <p className="mt-2 text-white/70">Passed 2025</p>
                  <a
                    href="https://www.credly.com/badges/290feeb9-4ef1-4f52-9266-9c5ef3010e4d/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                      type="button"
                      className="mt-3 text-sm uppercase tracking-widest text-accent hover:text-accent/80"
                    >
                      View certificate
                    </button>
                  </a>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="h3">AWS Solutions Architect Associate (SAA-C03)</h3>
                  <p className="mt-2 text-white/70">In Progress</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="h3">Cisco AI Business Practitioner</h3>
                  <p className="mt-2 text-white/70">Passed March 2026</p>
                  <a
                    href="https://www.credly.com/badges/34bf02e2-ea22-4cb9-8b28-81dfd0dfe22e/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                      type="button"
                      className="mt-3 text-sm uppercase tracking-widest text-accent hover:text-accent/80"
                    >
                      View certificate
                    </button>
                  </a>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="h3">Cisco AI Technical Practitioner</h3>
                  <p className="mt-2 text-white/70">Passed March 2026</p>
                  <a
                    href="https://www.credly.com/badges/69f5e098-d8b6-46a9-b979-57da8a89a713/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                      type="button"
                      className="mt-3 text-sm uppercase tracking-widest text-accent hover:text-accent/80"
                    >
                      View certificate
                    </button>
                  </a>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="h3">Cybersecurity Certification</h3>
                  <p className="mt-2 text-white/70">Passed July 2024</p>
                  <button
                    type="button"
                    className="mt-3 text-sm uppercase tracking-widest text-accent hover:text-accent/80"
                    onClick={() => setIsCertOpen(true)}
                  >
                    View certificate
                  </button>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <p className="eyebrow">Skills</p>
              <div className="mt-4 flex flex-col gap-3 text-white/70">
                {skillGroups.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <p className="eyebrow">Download</p>
              <p className="mt-4 text-white/70">
                Get the full resume PDF with detailed project notes and references.
              </p>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Sajed_Khan_Resume.pdf`}
                download
              >
                <Button size="lg" className="mt-6 w-full uppercase">
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isCertOpen && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsCertOpen(false)}
          role="presentation"
        >
          <div className="modal-panel relative w-full max-w-3xl rounded-2xl border border-white/10 bg-surface p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h4 className="text-lg font-semibold">Cybersecurity Certificate</h4>
              <button
                type="button"
                className="text-sm uppercase tracking-widest text-white/70 hover:text-white"
                onClick={() => setIsCertOpen(false)}
                aria-label="Close certificate modal"
              >
                Close
              </button>
            </div>
            <div
              className="relative max-h-[70vh] w-full aspect-[4/3]"
              onClick={(event) => event.stopPropagation()}
              role="presentation"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cybersecurity-cert.jpg`}
                alt="Cybersecurity certification"
                fill
                className="rounded-xl object-contain"
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 768px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
