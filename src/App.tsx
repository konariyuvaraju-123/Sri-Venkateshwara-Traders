//import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { AboutSection } from './components/AboutSection';
import { ReviewSection } from './components/ReviewSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <AboutSection />
        <ReviewSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;