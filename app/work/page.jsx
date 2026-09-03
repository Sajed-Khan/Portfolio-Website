"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrawioViewer from "@/components/DrawioViewer";
import Link from "next/link";

const aiHighlights = [
  {
    title: "Conversational product discovery",
    description:
      "Natural-language shopping queries replace rigid category and filter navigation.",
  },
  {
    title: "Hybrid retrieval",
    description:
      "Combines Qdrant semantic search with PostgreSQL constraints, then reranks results for relevance.",
  },
  {
    title: "RAG recommendations",
    description:
      "Uses top-ranked products to generate concise outfit suggestions, explanations, and styling guidance.",
  },
  {
    title: "Local-to-AWS workflow",
    description:
      "Runs locally with Docker Compose and Floci while keeping AWS-compatible service boundaries.",
  },
];

const aiStack = [
  "React",
  "FastAPI",
  "Python",
  "LangChain",
  "LangGraph",
  "Qdrant",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Floci",
];

const architectureSummary = [
  {
    title: "Client and API layers",
    description:
      "React handles storefront, AI assistant, account, cart, checkout, upload, and admin interfaces. FastAPI receives HTTPS requests and routes auth, product, cart, order, search, recommendation, AI, and admin work.",
  },
  {
    title: "AI orchestration",
    description:
      "LangGraph runs the query pipeline as a state machine: intent analysis, query planning, constraint extraction, query expansion, tool calls, reranking, and RAG response generation.",
  },
  {
    title: "Data stores",
    description:
      "PostgreSQL owns transactional data, Qdrant powers semantic and image vector search, and Redis caches queries, embeddings, RAG responses, and session state.",
  },
  {
    title: "Cloud and local parity",
    description:
      "AWS services cover S3, SQS, ECS/ECR, Lambda, EventBridge, CloudWatch, SSM, and Secrets Manager. Floci emulates those services locally through standard AWS SDK configuration.",
  },
];

const sequenceSummary = [
  {
    phase: "1",
    title: "Input and validation",
    description:
      "The user enters a natural-language request, the frontend sanitizes it and attaches context, then FastAPI validates auth, rate limits, and parameters.",
  },
  {
    phase: "2",
    title: "Cache and intent",
    description:
      "Redis checks for repeated searches. On a miss, LangGraph starts intent analysis and extracts style, color, occasion, season, budget, and outfit requirements.",
  },
  {
    phase: "3",
    title: "Hybrid retrieval",
    description:
      "The system embeds the query, searches Qdrant, applies PostgreSQL filters in parallel, merges results, and weighs semantic and SQL relevance.",
  },
  {
    phase: "4",
    title: "Rerank and recommend",
    description:
      "A BGE reranker selects the best products, an outfit tool coordinates categories and colors, and the LLM generates the final explanation and styling tips.",
  },
  {
    phase: "5",
    title: "Cache and render",
    description:
      "The response is cached for faster repeats, tracked for analytics, and rendered in with product images, prices, wishlist, and cart actions.",
  },
];

const professionalProjects = [
  {
    title: "MOHAP KPI & Portfolio Management",
    description:
      "Delivered React applications and role-based dashboards used by 300+ internal employees across 50+ UAE hospitals.",
    tags: ["React.js", ".NET", "Dashboards", "RBAC"],
  },
  {
    title: "Dubai Health Authority Services",
    description:
      "Implemented OAuth2/JWT authentication flows and rate-limited REST APIs supporting Dubai Now integrations.",
    tags: ["Node.js", "OAuth2", "JWT", "REST APIs"],
  },
  {
    title: "Quran Awards Judging Platform",
    description:
      "Led frontend delivery for a React judging platform serving 4,000+ global users with real-time scoring workflows.",
    tags: ["React.js", "Realtime UX", "Responsive UI"],
  },
  {
    title: "DHA CMS & Service Builder",
    description:
      "Built Next.js interfaces and Node.js APIs aligned with Dubai Digital Design standards.",
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "Dubai Customs KPI & Voice of Customer",
    description:
      "Developed dashboard modules and AI-assisted feedback analysis to reduce manual review effort.",
    tags: ["React.js", "Analytics", "AI Analysis"],
  },
  {
    title: "EPAA Inspection Platform",
    description:
      "Built ArcGIS-powered inspection workflows with dynamic maps, RBAC, and approval flows.",
    tags: ["React.js", "ArcGIS", "Workflow UX"],
  },
];

const freelanceProjects = [
  {
    title: "LaBamba Fashion Ecommerce",
    description:
      "Designed and built a production-ready multi-tenant B2C ecommerce platform with storefront, admin, inventory, orders, and Stripe checkout.",
    tags: ["Next.js", "TypeScript", "Node.js", "Stripe", "Vercel"],
  },
];

const researchProjects = [
  {
    title: "Location Inference from Tweets using AI",
    description:
      "Compared clustering and NLP approaches against OpenAI-assisted inference using geotagging and timestamp analysis.",
    tags: ["Python", "Flair NLP", "BERTopic", "STDBSCAN", "OpenAI"],
  },
];

const ProjectCard = ({ project }) => (
  <div className="rounded-lg border border-white/10 bg-black/20 p-5">
    <h3 className="h3">{project.title}</h3>
    <p className="mt-3 text-white/70">{project.description}</p>
    <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-semibold text-accent"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
);

const InfoCard = ({ title, description }) => (
  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
  </div>
);

const DiagramSection = ({ eyebrow, title, summary, children }) => (
  <div className="card p-6 lg:p-8">
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-4">{title}</h2>
    </div>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {summary.map((item) => (
        <InfoCard
          key={`${item.phase || item.title}-${item.title}`}
          title={item.phase ? `Phase ${item.phase}: ${item.title}` : item.title}
          description={item.description}
        />
      ))}
    </div>
    <div className="mt-6">{children}</div>
  </div>
);

const Work = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-12 xl:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h1 className="h2 mt-4">Selected work</h1>
          <p className="mt-4 text-white/70">
            Production platforms, ecommerce systems, and AI experiments across
            government, freelance, and personal product work.
          </p>
        </div>

        <Tabs defaultValue="ai" className="mt-10">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-lg border border-white/10 bg-surface/70 p-2 text-white/60">
            <TabsTrigger
              value="ai"
              className="rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-primary"
            >
              AI Shopping Assistant
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-primary"
            >
              Professional
            </TabsTrigger>
            <TabsTrigger
              value="freelance"
              className="rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-primary"
            >
              Freelance
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="rounded-md px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-primary"
            >
              Research
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="mt-8 space-y-8">
            <div className="card p-6 lg:p-8">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.45fr)]">
                <div>
                  <p className="eyebrow">Featured Project</p>
                  <h2 className="h2 mt-4">AI-Powered Intelligent Fashion Marketplace</h2>
                  <p className="mt-5 text-white/72">
                    A full-stack fashion marketplace that turns shopping into a
                    conversational search experience. Users describe what they need,
                    and the system retrieves, ranks, and explains product and outfit
                    recommendations using hybrid search and RAG.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/20 p-5">
                  <p className="eyebrow">Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                    {aiStack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-semibold text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {aiHighlights.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <DiagramSection
                eyebrow="Architecture"
                title="Layered, event-driven marketplace architecture"
                summary={architectureSummary}
              >
                <DrawioViewer
                  file="/Architecture.drawio.html"
                  title="AI Fashion Marketplace Architecture"
                />
              </DiagramSection>

              <DiagramSection
                eyebrow="Sequence"
                title="Natural-language search to outfit recommendation"
                summary={sequenceSummary}
              >
                <DrawioViewer
                  file="/Sequence%20Diagram.drawio.html"
                  title="AI Search Sequence Diagram"
                />
              </DiagramSection>
            </div>
          </TabsContent>

          <TabsContent value="professional" className="mt-8">
            <ProjectGrid projects={professionalProjects} />
          </TabsContent>

          <TabsContent value="freelance" className="mt-8">
            <ProjectGrid projects={freelanceProjects} />
          </TabsContent>

          <TabsContent value="research" className="mt-8">
            <ProjectGrid projects={researchProjects} />
          </TabsContent>
        </Tabs>

        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg" className="uppercase">
              Collaborate with me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
