import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
