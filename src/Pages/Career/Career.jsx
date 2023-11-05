import React from 'react';
import './career.scss';
import Header from './components/Header/Header';
import Careers from './components/Careers/Careers';
import Culture from './components/Culture/Culture';
import CTA from '../../components/CTA/CTA';

const Career = () => {
  return (
    <>
      <Header />
      <Careers />
      <Culture />
      <CTA />
    </>
  );
};

export default Career;
