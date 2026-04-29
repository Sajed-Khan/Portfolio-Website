import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const workGroups = [
  {
    company: "Datacell Solutions",
    period: "Aug 2024 – Present",
    summary:
      "Public-sector digital platforms and design systems across UAE government entities.",
    items: [
      {
        title: "Dubai Development Authority UI Library",
        description:
          "Built a unified component library with Storybook and Stencil.js to standardize design across UAE government entities.",
        tags: ["Storybook", "Stencil.js", "Typescript"],
      },
      {
        title: "MOHAP KPI & Partnerships Systems",
        description:
          "Delivered core business systems for MOHAP, including KPI Management and Partnerships platforms used across multiple departments.",
        tags: ["React", "Node.js", "SQL Server", "API Integration"],
      },
      {
        title: "Dubai Health Authority API Gateways",
        description:
          "Developed secure API integrations and authentication flows (OAuth2, rate limiting) for Dubai Health Authority services used in the Dubai Now application.",
        tags: ["Node.js", "SQL", "Security", "OAuth2"],
      },
      {
        title: "Dubai Customs KPI & feedback Modules",
        description:
          "Developed core business systems for Dubai Customs, including Voice of Customer and KPI modules, implementing AI-based feedback analysis to support data-driven decision making.",
        tags: ["React.js", "Node.js", "AI Analysis", "KPI Management"],
      },
      {
        title: "Quran Awards Platform",
        description:
          "Engineered production systems including the Quran Awards judging platform for the Islamic Affairs Charitable Activities Department.",
        tags: ["React.js", "SQL Server", "Scalability"],
      },
      {
        title: "Dubai Police Weather Forecast App",
        description:
          "Implemented a weather application integrating National Center of Meteorology APIs with Dubai Police systems.",
        tags: ["Vue.js", "Java Springboot", "OAuth2", "API Integration"],
      },
      {
        title: "DHA CMS & Dynamic Page Builder",
        description:
          "Contributed to the Dubai Health Authority CMS and Service Builder, aligning with Dubai Development Authority (DDA) standards.",
        tags: ["Next.js", "TypeScript", "React.js", "Express.js", "Node.js", "Sequelize"],
      },
    ],
  },
  {
    company: "LaBamba Fashion (Freelance)",
    period: "Apr 2024 – July 2024",
    summary: "B2C ecommerce build with performance and payments focus.",
    items: [
      {
        title: "LaBamba Fashion Ecommerce",
        description:
          "Designed and built a multi-tenant B2C e-commerce platform with modular admin dashboard for managing products, orders, and inventory.",
        tags: ["Next.js", "Stripe", "TypeScript", "Vercel"],
      },
    ],
  },
  {
    company: "Trustline Digital",
    period: "May 2023 – Aug 2023",
    summary: "Frontend delivery and secure deployment on GCP.",
    items: [
      {
        title: "Trustline Digital Platform",
        description:
          "Built OTP-based authentication and deployed secure infrastructure on Google Cloud with SSL and Nginx.",
        tags: ["MongoDB", "Express", "React", "Node.js", "GCP", "Security"],
      },
    ],
  },
  {
    company: "Academic Project",
    summary: "AI-driven research and experimentation.",
    items: [
      {
        title: "Location Inference from Tweets using AI",
        description:
          "Comparative research evaluating clustering models against OpenAI to infer location from tweets. Used Flair NLP, BERTopic, and STDBSCAN with geotagging and timestamp analysis.",
        tags: ["Python", "Flair NLP", "BERT", "BERTopic", "STDBSCAN", "OpenAI"],
      },
    ],
  },
];

const Work = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-12 xl:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h1 className="h2 mt-4">Projects by company</h1>
          <p className="text-white/70 mt-4">
            A snapshot of the government and commercial platforms I&apos;ve delivered
            as a full stack developer, spanning design systems, secure APIs,
            ecommerce, and large-scale public services.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {workGroups.map((group) => (
            <div key={group.company} className="card p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                <div>
                  <p className="eyebrow">{group.company}</p>
                  <h2 className="h3 mt-3">{group.summary}</h2>
                </div>
                <span className="text-sm text-accent">{group.period}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {group.items.map((item) => (
                  <div key={item.title} className="bg-black/20 border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <div>
                      <h3 className="h3">{item.title}</h3>
                      <p className="text-white/70 mt-3">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-widest">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-accent font-semibold shadow-[0_0_16px_rgba(46,230,166,0.2)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg" className="uppercase">Collaborate with me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
