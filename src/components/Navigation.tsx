import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#home', text: 'Home' },
    { href: '#products', text: 'Products' },
    { href: '#about', text: 'About Us' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#contact', text: 'Contact Us' },
  ];

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:text-blue-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 w-48 py-2 mt-2 bg-blue-600 rounded-lg shadow-xl md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}