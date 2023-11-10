import React from 'react';
import styles from './team.module.scss';
import Header from './components/Header/Header';
import Blog from '../../components/Home/Home-components/Blog/Blog';
import CTA from '../../components/CTA/CTA';

const Team = () => {
  return (
    <>
       <Header />
       <Blog />
       <CTA />
    </>
  )
}

export default Team