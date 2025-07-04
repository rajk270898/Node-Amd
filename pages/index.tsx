import React from 'react';
import { useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Events from '../src/components/Events';
import Members from '../src/components/Members';
import Resources from '../src/components/Resources';
import Join from '../src/components/Join';
import Footer from '../src/components/Footer';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Members />
        <Resources />
        <Join />
      </main>
      <Footer />
    </div>
  );
} 