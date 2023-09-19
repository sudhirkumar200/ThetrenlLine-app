import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Experts from "./component/Experts";
import News from "./component/News";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import HeroPage from "./component/HeroPage";

const App = () => {
  return (
    <>
      <div className="px-16">
        <Header />
        <Banner />
        <Experts />
        <News />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
