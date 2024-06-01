import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import About from './Pages/AboutPage/About';
import Contact from './Pages/Contacts/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css'
import Quote from './Pages/Quote/Quote';
import FeaturedProjects from './Pages/FeaturedProjects/FeaturedProjects';
import Production from './Pages/Production/Production';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Production" element={<Production />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/FeaturedProjects" element={<FeaturedProjects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
