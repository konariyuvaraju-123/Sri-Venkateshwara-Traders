//import React from 'react';
import { Target, Users, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide the highest quality construction and agricultural materials to our valued customers.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We prioritize customer satisfaction through excellent service and support.'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'All our products meet the highest industry standards and quality benchmarks.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We ensure prompt delivery and reliable service for all our customers.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Since 2023, Sri Venkateswara Traders has been at the forefront of providing quality materials for construction and agriculture. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}