//import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white py-20">
          <h2 className="text-5xl font-bold mb-4">Welcome to Sri Venkateswara Traders</h2>
          <p className="text-xl mb-8">Your trusted partner in building dreams and nurturing growth since 2023.</p>
          <a 
            href="#products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
             Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}