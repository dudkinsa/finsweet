import React from 'react';
import './home.scss';
import Header from './Home-components/Header/Header';
import AboutUs from './Home-components/AboutUs/AboutUs';
import Expertise from './Home-components/Expertise/Expertise';
import Services from './Home-components/Services/Services';



const Home = () => {
  return (
    <>
    <Header />
    <AboutUs />
    <Expertise />
    <Services />
    </>
  );
};
export default Home;
