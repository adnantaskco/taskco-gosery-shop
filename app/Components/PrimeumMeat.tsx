"use client"
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function PremiumBeefSection() {
  const products = [
    {
      id: 1,
      name: 'Public-key 6thgeneration archive-40',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=300&auto=format&fit=crop',
      price: 2794,
      originalPrice: null,
      discount: null,
      rating: 2.0,
    },
    {
      id: 2,
      name: 'Grass-roots local flexibility-39',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=300&auto=format&fit=crop',
      price: 8337,
      originalPrice: 8387,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 3,
      name: 'Advanced background systemengine-38',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=300&auto=format&fit=crop',
      price: 3192,
      originalPrice: null,
      discount: null,
      rating: 2.0,
    },
    {
      id: 4,
      name: 'Grass-roots maximized forecast-36',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=300&auto=format&fit=crop',
      price: 3248,
      originalPrice: null,
      discount: null,
      rating: 2.8,
    },
    {
      id: 5,
      name: 'Exclusive 6thgeneration protocol-35',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=300&auto=format&fit=crop',
      price: 7449,
      originalPrice: 7499,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 6,
      name: 'De-engineered 6thgeneration attitude-30',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=300&auto=format&fit=crop',
      price: 9508,
      originalPrice: null,
      discount: null,
      rating: 3.3,
    },
    {
      id: 7,
      name: 'Networked actuating extranet-28',
      image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=300&auto=format&fit=crop',
      price: 9565,
      originalPrice: null,
      discount: null,
      rating: 3.0,
    },
    {
      id: 8,
      name: 'Extended zerodefect systemengine-27',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=300&auto=format&fit=crop',
      price: 1993,
      originalPrice: 2043,
      discount: '2%',
      rating: 0.0,
    },
    {
      id: 9,
      name: 'Upgradable dedicated core-25',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300&auto=format&fit=crop',
      price: 1313,
      originalPrice: 1363,
      discount: '4%',
      rating: 0.0,
    },
    {
      id: 10,
      name: 'Expanded asymmetric strategy-24',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=300&auto=format&fit=crop',
      price: 5001,
      originalPrice: null,
      discount: null,
      rating: 2.8,
    },
  ];

  return (

<section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-5 sm:py-6 md:py-8 lg:py-10">
  {/* Section Header */}
  <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-4 sm:mb-5 md:mb-6 border-b border-gray-100 relative">
    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 relative">
      Premium Beef
      <span className="absolute left-0 -bottom-3 sm:-bottom-3.5 w-8 sm:w-10 md:w-12 h-0.5 bg-emerald-600"></span>
    </h2>

    <a href="#" className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-[11px] font-bold text-emerald-600 hover:underline tracking-wide sm:tracking-wider uppercase ml-auto">
      <span>VIEW ALL ITEMS</span>
      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
    </a>
  </div>

  {/* Responsive Product Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
    {products.map((item) => (
      <div key={item.id} className="bg-white border border-gray-100 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition group min-w-0">

        {/* Product Image */}
        <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center overflow-hidden mb-2 sm:mb-3">
          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col flex-1 justify-end">

          {/* Pricing & Discount */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2 mb-1">
            <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
              ৳{item.price.toLocaleString()}
            </span>

            {item.originalPrice && (
              <span className="text-[8px] sm:text-[9px] md:text-xs text-gray-400 line-through">
                ৳{item.originalPrice.toLocaleString()}
              </span>
            )}

            {item.discount && (
              <span className="bg-emerald-600 text-white text-[7px] sm:text-[8px] md:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded">
                {item.discount}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 font-bold line-clamp-2 mb-1.5 sm:mb-2 min-h-[28px] sm:min-h-[32px] group-hover:text-emerald-600 transition leading-snug">
            {item.name}
          </h4>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2 sm:mb-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(item.rating) ? "fill-current text-amber-400" : "text-gray-200"}`} />
              ))}
            </div>

            <span className="text-[8px] sm:text-[9px] md:text-[11px] text-gray-400 font-semibold">
              {item.rating.toFixed(1)}
            </span>
          </div>

          {/* Add to Cart */}
          <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition rounded-full py-1 sm:py-1.5 md:py-2 text-[8px] sm:text-[10px] md:text-xs font-semibold flex items-center justify-center gap-1">
            <span>+ Add to Cart</span>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


  );
}