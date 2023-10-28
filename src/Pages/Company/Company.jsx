import React from 'react';
import './company.scss';
import Header from './components/Header/Header';
import CTA from './../../components/CTA/CTA';
import Story from './components/Story/Story';
import LogoBar from './components/LogoBar/LogoBar';
import Expertise from '../../components/Home/Home-components/Expertise/Expertise';

const Company = () => {
  return (
    <>
      <Header />
      <Story />
      <LogoBar />
      <Expertise />
      <CTA />
    </>
  );
};

export default Company;
