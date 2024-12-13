
//import React from 'react';
import { Package, Hammer, Zap, Droplet, Leaf } from 'lucide-react';

const products = [
  {
    icon: Package,
    name: 'Cement',
    description: 'High-quality cement for construction needs',
    image: 'https://5.imimg.com/data5/LH/TI/NA/SELLER-54700472/nagarjuna-bags.jpg'
  },
  {
    icon: Hammer,
    name: 'Iron',
    description: 'Strong and reliable iron products',
    image: 'https://s.alicdn.com/@sc04/kf/Hfcad96929d5a410cbc8c6d57d1db9ad0J.jpg'
  },
  {
    icon: Zap,
    name: 'Electricals',
    description: 'Complete electrical supplies',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTx_leLnVjIvFHi3bGa8kid_VAIdCsMs6dg&s'
  },
  {
    icon: Droplet,
    name: 'Plumbing',
    description: 'Essential plumbing materials',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80'
  },
  {
    icon: Leaf,
    name: 'Agriculture',
    description: 'Quality agricultural products',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80'
  }
];

export function ProductSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.name} 
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <product.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}