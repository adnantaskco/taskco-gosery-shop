
"use client"
import React, { useState } from 'react';

export default function SEOContentSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Title */}
      <div className="mb-4">
        <h2 className="inline-block bg-gray-100 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-sm">
          Know More GetMart Online Groceries Shop
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="text-xs text-gray-500 leading-relaxed space-y-4">
        <p>
          Experience the convenience of shopping for groceries online at our top-rated store. Enjoy fresh produce, a vast selection of products, and fast delivery to your doorstep. Say goodbye to long lines and crowded aisles as you browse our easy-to-navigate website. Save time and energy with just a few clicks, and have your household essentials and pantry items delivered hassle-free. Discover the joy of online grocery shopping today!
        </p>

        <p>
          Shopping for groceries has never been easier, thanks to our top-rated online grocery store. We are dedicated to providing you with a seamless and convenient shopping experience that caters to all your household needs. Our extensive selection of products ranges from fresh produce to pantry staples, ensuring you'll find everything you need in one place.
        </p>

        <p>
          Enjoy the benefits of shopping from the comfort of your home, without the hassle of navigating crowded aisles or waiting in long lines. Our easy-to-use website allows you to browse through our vast inventory, compare products, and make informed choices. We pride ourselves on providing accurate product descriptions and high-quality images to help you find exactly what you're looking for.
        </p>

        <p>
          We understand that time is valuable, which is why we offer flexible delivery options to fit your busy schedule. Our fast and reliable delivery service brings your groceries straight to your doorstep, so you can focus on the things that matter most. Shopping for groceries online not only saves you time but also helps you stay organized and make smarter choices for your family.
        </p>

        {/* Expandable Extra Content */}
        {isExpanded && (
          <>
            <p>
              Our commitment to customer satisfaction is reflected in our exceptional customer service and user-friendly platform. Our dedicated team is always ready to assist you with any questions or concerns you may have. Join the growing number of satisfied customers who have discovered the convenience and joy of online grocery shopping. Shop with us today and experience the difference!
            </p>

            <p>
              Our online grocery store is not just about convenience; it's also about making a positive impact on the environment. By choosing to shop online, you're contributing to a reduction in carbon emissions and traffic congestion, as our delivery vehicles follow optimized routes to ensure efficient delivery. Plus, we offer eco-friendly packaging options to minimize waste and help protect the planet.
            </p>

            <p>
              Moreover, our online grocery store provides access to exclusive deals, discounts, and promotions that you won't find in physical stores. We work closely with suppliers to offer competitive prices and ensure you get the best value for your money. With our easy-to-use search and filter functions, you can quickly find products that fit your budget and dietary preferences, such as organic, gluten-free, or vegan options.
            </p>
          </>
        )}
      </div>

      {/* Read More / Read Less Toggle */}
      <div className="mt-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-emerald-600 font-semibold text-xs hover:underline focus:outline-none"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
}