"use client"
import React from 'react';

export default function PromoBannersGrid() {
  const banners = [
    {
      id: 1,
      title: "Super Market Live Webinar Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/GKesL1758634012.png",
      link: "#"
    },
    {
      id: 2,
      title: "Fresh Meat Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/42PNG1758634005.png",
      link: "#"
    },
    {
      id: 3,
      title: "Fresh Juice Banner",
      image: "https://grocery-admin1.getcommerce.xyz/banner/i9pPo1758633996.png",
      link: "#"
    }
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="rounded-2xl overflow-hidden transition duration-300 "
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