import React from 'react';
import './company.scss';
import Header from './components/Header/Header';
import CTA from './../../components/CTA/CTA';
import Story from './components/Story/Story';
import LogoBar from './components/LogoBar/LogoBar';
import Expertise from '../../components/Home/Home-components/Expertise/Expertise';
import Vision from './components/Vision/Vision';
import Team from './components/Team/Team';

const Company = () => {
  
  return (
    <>
      <Header />
      <Story />
      <LogoBar />
      <Expertise />
      <Vision />
      <Team />
      <CTA paddingTop ={{ 'padding-top': '0'}}/>

    </>
  );
};

export default Company;
