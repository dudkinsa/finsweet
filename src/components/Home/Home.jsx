import React from 'react';
import './home.scss';
import Header from './Home-components/Header/Header';
import AboutUs from './Home-components/AboutUs/AboutUs';
import Expertise from './Home-components/Expertise/Expertise';
import Services from './Home-components/Services/Services';
import Process from './Home-components/Process/Process';
import Review from './Home-components/Review/Review';
import Blog from './Home-components/Blog/Blog';



const Home = () => {
  return (
    <>
    <Header />
    <AboutUs />
    <Expertise />
    <Services />
    <Process />
    <Review />
    <Blog />
    </>
  );
};
export default Home;
