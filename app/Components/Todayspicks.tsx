"use client"
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function TodaysPicks() {
  // Sample product data (same as before)
  const products = [
    {
      id: 1,
      name: 'Grass-roots local flexibility-39',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=300&auto=format&fit=crop',
      price: 8337,
      originalPrice: 8387,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 2,
      name: 'Exclusive 6thgeneration protocol-35',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=300&auto=format&fit=crop',
      price: 7449,
      originalPrice: 7499,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 3,
      name: 'Inverse zeroadministration parallelism-34',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=300&auto=format&fit=crop',
      price: 9533,
      originalPrice: null,
      discount: null,
      rating: 2.5,
    },
    {
      id: 4,
      name: 'Innovative maximized strategy-33',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=300&auto=format&fit=crop',
      price: 9810,
      originalPrice: 9860,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 5,
      name: 'Integrated client-driven throughput-32',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=300&auto=format&fit=crop',
      price: 5036,
      originalPrice: null,
      discount: null,
      rating: 1.5,
    },
    {
      id: 6,
      name: 'Facetoface multi-state functionalities-31',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqW7uwvmoz9ZMf5ADl-wXlWK2pIdJ0UkP5yAax-T14fw&s',
      price: 4407,
      originalPrice: 4457,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 7,
      name: 'Sharable content-based parallelism-29',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9N_2c0okWxrWLFLDxqtWBNLRQsXviaDrMr_H-hzNjg&s',
      price: 9619,
      originalPrice: 9669,
      discount: '1%',
      rating: 0.0,
    },
    {
      id: 8,
      name: 'Networked actuating extranet-28',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEM_dI_aKyArNK10bBirPxuAe61eUkT9och8CREZlwQ&s',
      price: 95,
      originalPrice: null,
      discount: null,
      rating: 3.0,
    },
  ];

  return (

<section className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-5 sm:py-6 md:py-8 lg:py-10">
  {/* Header */}
  <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-5 md:mb-6 border-b border-gray-100">
    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 border-b-2 border-emerald-600 -mb-[13px] sm:-mb-[17px] pb-3 sm:pb-4">
      Todays picks
    </h2>

    <a href="#" className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-xs font-bold text-emerald-600 hover:underline tracking-wide sm:tracking-wider uppercase">
      <span>View All Items</span>
      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
    </a>
  </div>

  {/* Main Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5">

    {/* Left Banner */}
    <div className="lg:col-span-3 w-full h-40 sm:h-48 md:h-56 lg:h-full min-h-0 lg:min-h-[400px] rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <img
        src="https://plain-apac-prod-public.komododecks.com/202609/06/7M69EvpxamIWwQ5pNjCt/image.jpg"
        alt="Organic Vegetables Banner"
        className="w-full h-full "
      />
    </div>

    {/* Products Grid */}
    <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">

      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-100 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition group min-w-0"
        >

          {/* Product Image */}
          <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center overflow-hidden mb-2 sm:mb-3">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full  group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-1 justify-end">

            {/* Price */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-1">
              <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
                ৳{item.price.toLocaleString()}
              </span>

              {item.originalPrice && (
                <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 line-through">
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
            <h4 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-gray-700 line-clamp-2 mb-1.5 sm:mb-2 min-h-[28px] sm:min-h-[32px] group-hover:text-emerald-600 transition">
              {item.name}
            </h4>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(item.rating) ? "fill-current text-amber-400" : "text-gray-200"}`}
                  />
                ))}
              </div>

              <span className="text-[8px] sm:text-[10px] md:text-[11px] text-gray-400 font-semibold">
                {item.rating.toFixed(1)}
              </span>
            </div>

            {/* Add to Cart */}
            <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition rounded-full py-1 sm:py-1.5 md:py-2 text-[9px] sm:text-[10px] md:text-xs font-semibold flex items-center justify-center gap-1">
              <span>+ Add to Cart</span>
            </button>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>


  );
}