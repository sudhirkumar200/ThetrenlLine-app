import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Experts from './Experts';
import News from './News';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <>
     <div className="md:px-16 p-0"> 
         <Header/>      
        <Banner/>
        <Experts/>
        <News/>
        <Cards/>
        <Footer/>
      </div>  
    </>
  )
}

export default Home;
