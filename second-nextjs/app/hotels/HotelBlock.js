"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpg`;
  };

  return (
    <div>
      <h1>
        {name}:{capacity}
      </h1>
      <Image src={id} width={299} height={300} loader={imageLoader} />
    </div>
  );
}
