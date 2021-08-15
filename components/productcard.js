import React, { useEffect, useState } from "react";
import CardSkeleton from "./cardskeleton";
import Image from "next/image";

function ProductCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <CardSkeleton />;

  return (
    <div className="rounded-xl">
      <div className="overflow-hidden rounded-xl relative group">
        <Image
          height={600}
          width={600}
          objectFit="cover"
          loading="lazy"
          src="https://i.ibb.co/5vBY1FM/Superstar-Shoes-Black-EG4959-01-standard.jpg"
          alt=""
          className="rounded-xl"
        />
        <div className="hidden absolute h-full w-full bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 group group-hover:flex justify-center place-items-center">
          <div className="flex overflow-hidden">
            <div className="p-2 bg-white mr-1 rounded-lg ">
              <svg
                className="w-6 h-6 text-cusblack m-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="p-2 bg-white rounded-lg">
              <svg
                className="w-6 m-auto h-6 text-cusblack"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-2">
        <p className="text-sm">Adidas Superstar 20s</p>
        <p className="text-xs my-2 text-gray-400">Black/White</p>
        <p className="text-sm font-semibold">Rp 1.200.000</p>
      </div>
    </div>
  );
}

export default ProductCard;
