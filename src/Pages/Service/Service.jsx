import React from 'react';
import './service.scss';
import Header from './components/Header/Header';
import Process from '../../components/Home/Home-components/Process/Process'

const Service = () => {
  return (
    <>
    <Header />
    <Process  backgroundColor={{background: "#F9F9FF"}}/>
    </>
  )
}

export default Service