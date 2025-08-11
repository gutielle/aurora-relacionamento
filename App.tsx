
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import AboutMe from './components/AboutMe';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Purchase from './components/Purchase';
import Footer from './components/Footer';

const App: React.FC = () => {
  const productUrl = "https://www.etsy.com/listing/1783610844/healing-spell-same-day-cast-powerful?ls=a&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=Eemagrecer&ref=sc_gallery-1-4&sr_prefetch=1&pro=1&frs=1&bes=1&plkey=d9da471e2c90cbd041f6da8a02a43c260f20adaa%3A1783610844&variation0=5356430551";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <AboutMe />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Purchase productUrl={productUrl} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;