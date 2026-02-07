import React from "react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative content-entrance">
      <div className="relative mx-auto w-full max-w-[92vw] sm:max-w-[420px] md:max-w-[480px] aspect-square rounded-[48px] overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-gold/20" />
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/me.png`}
          priority
          quality={100}
          fill
          alt="Portrait of Sajed Khan"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Photo;
