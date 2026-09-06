
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 1, name: "Drinks", image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 2, name: "Masala", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 3, name: "Meat", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 4, name: "Nuts", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 5, name: "Toys", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 6, name: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 7, name: "Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 8, name: "Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 9, name: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 10, name: "Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3-ef46400b?q=80&w=200&auto=format&fit=crop", link: "#" },
    { id: 11, name: "Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=200&auto=format&fit=crop", link: "#" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>("[data-category-card]");

    const cardWidth = card?.offsetWidth || 100;
    const gap = 16;
    const scrollAmount = (cardWidth + gap) * 3;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 py-5 sm:py-7 md:py-9 lg:py-10">
      
      {/* Header */}
      <div className="flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
          Featured Categories
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full">

        {/* Left Button */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          aria-label="Previous categories"
          className="absolute left-0 sm:-left-2 md:-left-3 lg:-left-4 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm sm:shadow-md hover:bg-emerald-600 hover:text-white transition-all duration-200"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
        </button>

        {/* Categories */}
        <div
          ref={scrollRef}
          className="flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 overflow-x-auto scroll-smooth scrollbar-hide px-8 sm:px-9 md:px-10 lg:px-11 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((item) => (
            <a
              key={item.id}
              href={item.link}
              data-category-card
              className="flex-shrink-0 w-[72px] sm:w-[88px] md:w-[100px] lg:w-[112px] xl:w-[120px] flex flex-col items-center group/card"
            >
              {/* Category Image */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full overflow-hidden border border-gray-200 bg-white p-0.5 sm:p-1 shadow-sm group-hover/card:border-emerald-500 group-hover/card:shadow-md group-hover/card:-translate-y-1 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Category Name */}
              <span className="mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base font-semibold text-gray-700 text-center truncate max-w-full group-hover/card:text-emerald-600 transition-colors duration-200">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Right Button */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          aria-label="Next categories"
          className="absolute right-0 sm:-right-2 md:-right-3 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm sm:shadow-md hover:bg-emerald-600 hover:text-white transition-all duration-200"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
        </button>
      </div>
    </section>
  );
}

