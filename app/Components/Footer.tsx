"use client"
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send 
} from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { GiFruitBowl } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 text-xs font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-4">
           <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                       <GiFruitBowl />
                     </div>
                     <span className="text-xl font-bold text-gray-800">
                       Taskco<span className="text-emerald-600">Mart</span>
                     </span>
                   </div>
            
            <p className="text-gray-500 leading-relaxed">
              Islamic Lifestyle and Needs Solution in BD
            </p>

            <ul className="space-y-2.5 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Level 9, Manama M S Toren, Gulshan Badda Link Rd, Dhaka 1212</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+88 01896 263647</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:sample@example.com" className="hover:text-emerald-600">
                  hello@taskco.io
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition">
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {['Contact us', 'The blog', 'Terms and Conditions', 'Privacy Policy', 'Shipping Policy', 'Return & Refund Policy', 'Warranty Policy', 'FAQ'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-emerald-600 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Accounts */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">Accounts</h3>
            <ul className="space-y-2.5">
              {['My account', 'My orders', 'My wishlist', 'Payment history', 'Support ticket', 'Order Tracking', 'Update Pricelist', 'Vendor Registration'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-emerald-600 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Showroom Location */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-4">Showroom Location</h3>
            <ul className="space-y-2.5">
              {['Customer Care', 'Track my order', 'Return & Refund', 'Shipping & Delivery'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-emerald-600 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter & Mobile Apps */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Sign Up Newsletter</h3>
            <p className="text-gray-500">Don't worry, we won't spam you!</p>

            {/* Subscribe Input */}
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Type Your E-mail" 
                className="w-full py-2 px-3 text-xs border border-gray-200 rounded-l-md focus:outline-none focus:border-emerald-600 bg-white"
              />
              <button className="bg-emerald-600 text-white px-3 py-2 rounded-r-md hover:bg-emerald-700 transition">
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* App Downloads */}
            <div className="pt-2">
              <h4 className="font-bold text-gray-700 mb-1">Download App on Mobile :</h4>
              <p className="text-emerald-600 text-[11px] mb-2 font-medium">15% discount on your first purchase</p>
              
              <div className="flex items-center gap-2">
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-9"
                  />
                </a>
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-9"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Icons */}
      <div className="border-t border-gray-200 bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            Copyright © 2026 GetCommerce Powered by <a href="#" className="text-emerald-600 font-semibold hover:underline">Getcommerce</a>
          </div>

          {/* Payment Badges Placeholder */}
          <div className="flex items-center gap-2">
            <span className="border border-gray-200 px-2 py-0.5 rounded text-[10px] font-bold text-gray-400">VISA</span>
            <span className="border border-gray-200 px-2 py-0.5 rounded text-[10px] font-bold text-gray-400">MasterCard</span>
            <span className="border border-gray-200 px-2 py-0.5 rounded text-[10px] font-bold text-gray-400">PayPal</span>
            <span className="border border-gray-200 px-2 py-0.5 rounded text-[10px] font-bold text-gray-400">Bkash</span>
          </div>
        </div>
      </div>
    </footer>
  );
}