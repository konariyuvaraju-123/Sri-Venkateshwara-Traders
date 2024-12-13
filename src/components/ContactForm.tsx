import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import type { ContactFormData } from '../types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9581586600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'pogiri007@gmail.com'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: '9:00 AM - 7:00 PM'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Venkateswara Traders, Railway Station Road,G.Sigadam'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-4">
                  <info.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
     <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313.46513627026344!2d83.674713!3d18.3747723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c7343a3cd97a7%3A0x118c7aca45346923!2sSri%20Venkateswara%20Traders%2C%20G.Sigadam!5e0!3m2!1sen!2sin!4v1699372345678!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
</div>

          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}