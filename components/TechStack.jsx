"use client";

import React from "react";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiStorybook,
  SiStencil,
  SiAmazonaws,
  SiMongodb,
  SiPrisma,
  SiGooglecloud,
  SiStripe,
  SiPython,
  SiMysql,
  SiSequelize,
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Storybook", icon: SiStorybook },
      { name: "Stencil.js", icon: SiStencil },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Cloud & Integrations",
    items: [
      { name: "AWS", icon: SiAmazonaws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Stripe", icon: SiStripe },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", icon: SiMysql },
      { name: "Sequelize", icon: SiSequelize },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="container mx-auto pt-8 pb-14">
      <div className="card p-6">
        <p className="eyebrow">Technologies</p>
        <h3 className="h3 mt-4">Core stack</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {techGroups.map((group) => (
            <div key={group.title}>
              <p className="text-base uppercase tracking-[0.3em] text-white/50">{group.title}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 text-base text-white/85 border border-white/10 rounded-full px-4 py-2 bg-black/20"
                    >
                      <Icon className="text-accent text-xl" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
