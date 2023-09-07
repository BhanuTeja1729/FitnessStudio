import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "./App.css"
import Header from "./components/Header/Header";
import Hero from './components/UI/Hero';
import Exercises from './components/UI/Exercises';
import Start from './components/UI/Start'
import Pricing from './components/UI/Pricing'
import Footer from './components/UI/Footer';
import Testimonials from './components/UI/Testimonials'
// Your React component
function App() {
  useEffect(()=>{
    Aos.init();
  }, []);
  return (
    <>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    <Pricing />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;