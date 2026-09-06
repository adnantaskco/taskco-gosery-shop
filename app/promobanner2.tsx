"use client"
import React from 'react';

export default function PromoBannersGrid2() {
  const banners = [
    {
      id: 1,
      title: "Super Market milk Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/CVDYm1758634558.png",
      link: "#"
    },
    {
      id: 2,
      title: "kid toy Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/vZrQh1758634548.png",
      link: "#"
    },
    {
      id: 3,
      title: "Doctor Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/cFEzz1758634536.png",
      link: "#"
    }
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 h-44 sm:h-52 md:h-48 lg:h-56"
          >
            <a href={banner.link} className="block w-full h-full">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full  hover:scale-105 transition duration-500"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}