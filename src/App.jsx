import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Who from './components/Who';
import Idea from './components/Idea';
import Approch from './components/Approch';
import PlaySection from './components/PlaySection';
import Featured from './components/Featured';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <div data-scroll-container className="w-full bg-zinc-200">
        <Navbar />
        <Hero />
        <Who />
        <Idea />
        <Approch />
        <PlaySection />
        <Featured />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default App;
