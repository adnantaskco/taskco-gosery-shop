import React from 'react';

export default function MiddleBanner() {
  return (
    <section className=" px-4 py-6">
      <div className="max-w-7xl mx-auto w-full rounded-2xl overflow-hidden transition duration-300">
        <a href="#">
          <img 
            src="https://grocery-admin1.getcommerce.xyz/banner/QeNwA1758633944.png" 
            alt="Fresh & Healthy Vegetable Banner" 
            className="w-full h-full min-h-[120px] sm:min-h-[80px] md:min-h-[220px]  "
          />
        </a>
      </div>
    </section>
  );
}