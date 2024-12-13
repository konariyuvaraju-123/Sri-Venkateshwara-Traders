//import React from 'react';
import { Building2, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const links = {
    quickLinks: [
      { href: '#home', text: 'Home' },
      { href: '#products', text: 'Products' },
      { href: '#about', text: 'About Us' },
      { href: '#reviews', text: 'Reviews' },
      { href: '#contact', text: 'Contact Us' }
    ],
    social: [
      { icon: Facebook, href: '#', label: 'Facebook' },
      { icon: Twitter, href: 'https://x.com/pogiri007', label: 'Twitter' },
      { icon: Instagram, href: 'https://www.instagram.com/pogiri007/profilecard/?igsh=cmZjMnp0eDcxY2dz', label: 'Instagram' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 size={24} />
              <span className="text-xl font-bold">Sri Venkateswara Traders</span>
            </div>
            <p className="text-gray-400">Your trusted partner in construction and agriculture since 2023
              .</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91-9581586600</li>
              <li>Email: pogiri007@gmail.com</li>
              <li>Hours: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Sri Venkateswara Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}