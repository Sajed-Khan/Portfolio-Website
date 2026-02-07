"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Datacell Solutions",
    date: "Aug 2024 – Present",
    stack: "React.js, Vue.js, Next.js, TypeScript, Node.js",
    points: [
      "Built a unified UI component library for Dubai Development Authority using Storybook and Stencil.js to standardize design across teams.",
      "Delivered KPI Management and Partnerships modules for MOHAP, aligning requirements with ministry workflows.",
      "Implemented secure server-side APIs and wrappers powering Dubai Now and DHA integrations with strong data governance.",
      "Developed the globally scaled Quran Awards platform and Dubai Police Weather Forecast application.",
      "Contributed to the DHA CMS and dynamic page builder aligned with DDA design guidelines.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "LaBamba Fashion",
    date: "Apr 2024 – May 2024",
    stack: "Next.js, TypeScript, MongoDB, React.js",
    points: [
      "Delivered a customizable B2C ecommerce site with an admin dashboard and production-ready storefront.",
      "Optimized performance with server rendering, lazy image loading, and caching strategies.",
      "Integrated Stripe payments for secure and reliable online transactions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Trustline Digital",
    date: "May 2023 – Aug 2023",
    stack: "MongoDB, Express.js, React.js, Node.js",
    points: [
      "Collaborated on client and server delivery for production web platforms.",
      "Implemented OTP-based SMS authentication to secure admin access.",
      "Deployed the platform with SSL and Nginx configuration on Google Cloud.",
    ],
  },
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
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="h2 mt-4">Experience</h1>
            <p className="text-white/70 mt-4 max-w-2xl">
              Full stack developer with proven delivery across public-sector platforms,
              secure integrations, and scalable web applications. Focused on dependable
              engineering, clear UX, and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {experience.map((item) => (
                <div key={item.role} className="card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h3 className="h3">{item.role}</h3>
                      <p className="text-white/70 mt-1">{item.company}</p>
                    </div>
                    <span className="text-sm text-accent">{item.date}</span>
                  </div>
                  <p className="text-white/60 mt-2">{item.stack}</p>
                  <ul className="mt-4 flex flex-col gap-2 text-white/70 list-disc list-inside">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col delayed-image-frame gap-6">
            <div className="card p-6 relative content-entrance">
              <div className="absolute -inset-2 rounded-2xl bg-gold/30 blur-2xl opacity-70 pointer-events-none glow-pulse" />
              <p className="eyebrow">Education</p>
              <h3 className="h3 mt-4">University of Sharjah</h3>
              <p className="text-white/70 mt-2">BSc. Computer Science</p>
              <p className="text-white/60 mt-1">Sharjah, UAE</p>
              <p className="text-white/60">Jan 2020 – Jul 2024</p>
            </div>

            <div className="card p-6 delayed-image-frame relative content-entrance">
              <div className="absolute -inset-2 rounded-2xl bg-gold/30 blur-2xl opacity-70 pointer-events-none glow-pulse" />
              <p className="eyebrow">Certifications</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="h3">AWS Developer Associate (DVA-C02)</h3>
                  <p className="text-white/70 mt-2">Passed June 2025</p>
                  <a
                    href="https://www.credly.com/badges/290feeb9-4ef1-4f52-9266-9c5ef3010e4d/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button
                    type="button"
                    className="text-sm uppercase tracking-widest text-accent hover:text-accent/80 mt-3"
                  >
                    View certificate
                  </button>
                  </a>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="h3">Cybersecurity Certification</h3>
                  <p className="text-white/70 mt-2">Passed July 2024</p>
                  <button
                    type="button"
                    className="text-sm uppercase tracking-widest text-accent hover:text-accent/80 mt-3"
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
                <span>Languages: HTML, CSS, JavaScript, TypeScript, C++, Python</span>
                <span>Frameworks: React.js, Vue.js, Next.js, Node.js</span>
                <span>Tools: Git Bash, Google Cloud Platform, AWS</span>
                <span>Databases: MongoDB, Prisma ORM, SQL, Sequelize</span>
              </div>
            </div>

            <div className="card p-6">
              <p className="eyebrow">Download</p>
              <p className="text-white/70 mt-4">
                Get the full resume PDF with detailed project notes and references.
              </p>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Sajed_Khan_Resume.pdf`}
                download
              >
                <Button size="lg" className="uppercase mt-6 w-full">Download PDF</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isCertOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 modal-backdrop"
          onClick={() => setIsCertOpen(false)}
          role="presentation"
        >
          <div className="relative w-full max-w-3xl bg-surface border border-white/10 rounded-2xl p-6 modal-panel">
            <div className="flex items-center justify-between gap-4 mb-4">
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
              className="relative w-full max-h-[70vh] aspect-[4/3]"
              onClick={(event) => event.stopPropagation()}
              role="presentation"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cybersecurity-cert.jpg`}
                alt="Cybersecurity certification"
                fill
                className="object-contain rounded-xl"
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
