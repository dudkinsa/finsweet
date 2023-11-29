import React from 'react';
import './service.scss';
import uuid from 'react-uuid';

import Header from './components/Header/Header';
import Process from '../../Pages/Home/Home-components/Process/Process';
import Support from './components/Support/Support';
import Developoment from './components/Developoment/Developoment';
import Azure from './components/Azure/Azure ';
import Сonsulting from './components/Сonsulting/Сonsulting';
import IT from './components/IT/IT';
import CTA from '../../components/CTA/CTA'

import support from './img/support.jpg';
import developoment from './img/developoment.jpg';
import azure from './img/azure.jpg';
import consulting from './img/consulting.jpg';
import InformationTechnology from './img/it.jpg';

const id = () => {
  return uuid();
};

const services = [
  {
    id: id(),
    image: support,
    title: ' Technical Support',
    subtitle:
      'Best in class tech support for your company. We become your tech backbone',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
  },
  {
    id: id(),
    image: developoment,
    title: 'Developoment',
    subtitle:
      'Bring your ideas to reality with certified team of developers, working with latest technologies',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
  },
  {
    id: id(),
    image: azure,
    title: 'AWS/Azure ',
    subtitle:
      'We help you deploy, manage and secure your application on leading web services',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
  },
  {
    id: id(),
    image: consulting,
    title: 'Consulting',
    subtitle: 'Get advice from world class professionals ',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
  },

  {
    id: id(),
    image: InformationTechnology,
    title: 'Information Technology',
    subtitle:
      'We want to get local identification in every corner of the world in this era of global citizenship.',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
  },
];

const Service = () => {
  return (
    <>
      <Header />
      <Process backgroundColor={{ background: '#F9F9FF' }} />
      <Support services={services} />
      <Developoment services={services} />
      <Azure services={services} />
      <Сonsulting services={services} />
      <IT services={services} />
      <CTA />
    </>
  );
};

export default Service;
