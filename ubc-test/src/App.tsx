import React from 'react';
import './main.scss';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <ContactForm/>
      <Footer/>
        
    </div>
  );
}

export default App;
