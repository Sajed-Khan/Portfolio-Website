import React from "react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative content-entrance">
      <div className="relative w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] rounded-[48px] overflow-hidden border border-white/10">
        <div className="absolute inset-0 from-accent/20 via-transparent to-gold/20" />
        <Image
          src="/me.png"
          priority
          quality={100}
          width={480}
          height={480}
          alt="Portrait of Sajed Khan"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Photo;
