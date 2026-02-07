"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <style jsx global>{`
        @keyframes delayedAppear {
          0% { opacity: 0; visibility: hidden; }
          99% { opacity: 0; visibility: hidden; }
          100% { opacity: 1; visibility: visible; }
        }
        
        .delayed-image-frame {
          opacity: 0;
          visibility: hidden;
          animation: delayedAppear 2s ease forwards;
        }
      `}</style>
      
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] items-center gap-12 xl:gap-16 xl:pt-10 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="eyebrow">Full Stack Developer</span>
            <h1 className="h1 mb-6 mt-4">
              Building secure, scalable
              <br /> <span className="text-accent">products</span>
            </h1>
            <p className="max-w-[580px] mb-8 text-white/80">
              I&apos;m Sajed Khan, a UAE-based full stack developer specializing in
              React, Vue, Next.js, TypeScript, and Node.js. I build secure, scalable
              products end-to-end—from UI libraries to mission-critical systems
              for startups, enterprises, and public-sector teams.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Sajed_Khan_Resume.pdf`}
                download
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <DownloadIcon className="text-xl"/>
                </Button>
              </a>
              <Link href="/work">
                <Button size="lg" className="uppercase">View Projects</Button>
              </Link>
              <div className="mb-6 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none">
            <div className="relative delayed-image-frame">
              <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-br from-accent/20 via-transparent to-gold/20 blur-2xl" />
              <div className="card p-6">
                <Photo />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-semibold text-accent">2+</p>
                    <p className="text-xs uppercase tracking-widest text-white/60">Years</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-accent">2</p>
                    <p className="text-xs uppercase tracking-widest text-white/60">Certifications</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-accent">AWS</p>
                    <p className="text-xs uppercase tracking-widest text-white/60">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <p className="eyebrow">Product Delivery</p>
            <h3 className="h3 mt-4 mb-3">End-to-end platforms</h3>
            <p className="text-white/70">
              Delivered KPI management, partnerships, CMS, and ecommerce solutions
              from discovery to production deployment.
            </p>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Security & Reliability</p>
            <h3 className="h3 mt-4 mb-3">Trusted data integrations</h3>
            <p className="text-white/70">
              Built secure server-side APIS and wrappers for third-party APIs with
              and OpenID flows to protect data access.
            </p>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Performance</p>
            <h3 className="h3 mt-4 mb-3">Modern full-stack delivery</h3>
            <p className="text-white/70">
              Shipped web products using Next.js server rendering, lazy loading,
              Stripe payments, and AI workflows.
            </p>
          </div>
        </div>
      </div>

      <Stats />
      <TechStack />
    </section>
  );
}
