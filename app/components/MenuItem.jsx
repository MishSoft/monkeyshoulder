import React from "react";
import Image from "next/image";

export default function MenuItem({ imgSrc, name, description, price }) {
  return (
    <div className="flex items-center gap-4">
      {/* img */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          alt="Product image"
          priority
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}
