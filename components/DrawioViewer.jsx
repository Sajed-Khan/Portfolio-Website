"use client";

import React from "react";

const DrawioViewer = ({ file, title }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const filePath = `${basePath}${file}`;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-black px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-semibold text-white">{title}</h3>
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent/80"
        >
          Open full view
        </a>
      </div>
      <iframe
        title={title}
        src={filePath}
        className="h-[560px] w-full bg-black"
        loading="lazy"
      />
    </div>
  );
};

export default DrawioViewer;
