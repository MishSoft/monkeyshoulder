import Image from "next/image";
import React from "react";

export default function Badge({ containerStyle }) {
  return (
    <div className={`relative ${containerStyle}`}>
      <Image
        fill
        alt="monkey shoulder logo"
        className="object-cover rounded-full"
        src="/badge/monkeyshoulder-logo.jpg"
      />
    </div>
  );
}
