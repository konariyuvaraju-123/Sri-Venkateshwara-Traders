//import React from 'react';
import { Building2 } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="fixed w-full bg-blue-700 text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 size={32} />
            <div>
              <h1 className="text-2xl font-bold">Sri Venkateswara Traders</h1>
              <p className="text-sm text-blue-100">For every construction, for every crop, we are there with you!</p>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}