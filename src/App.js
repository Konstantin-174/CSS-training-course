import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import HeroImage from './components/heroImage/HeroImage';
import Customers from './components/customers/Customers';
import PlanAndManage from './components/planAndManage/PlanAndManage';
import Features from './components/features/Features';
import Stats from './components/stats/Stats';
import Blog from './components/blog/Blog';
import Quotes from './components/quotes/Quotes';
import GetStarted from './components/getStarted/GetStarted';
import Faq from './components/faq/Faq';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className="App">
        <Header/>
        <HeroImage/>
        <Customers/>
        <PlanAndManage/>
        <Features/>
        <Stats/>
        <Blog/>
        <Quotes/>
        <Faq/>
        <GetStarted/>
        <NewsLetter/>
        <Footer/>
      </div>
  );
}

export default App;
