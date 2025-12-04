import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WhatInside from './components/WhatInside';
import ForWhom from './components/ForWhom';
import SpecialOffer from './components/SpecialOffer';
import WhyItWorks from './components/WhyItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FinalBlock from './components/FinalBlock';
import Success from './pages/Success';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatInside />
      <ForWhom />
      <SpecialOffer />
      <WhyItWorks />
      <Reviews />
      <FAQ />
      <FinalBlock />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;