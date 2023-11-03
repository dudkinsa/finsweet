import React from 'react';
import styles from './process.module.scss';

import discover from './icons/discover.svg';
import designing from './icons/designing.svg';
import development from './icons/development.svg';
import testing from './icons/testing.svg';
import deployment from './icons/deployment.svg';
import maintenance from './icons/maintenance.svg';
import line from './img/line.svg';
import decorHorizontal from './img/decor-horizontal.svg';

const boxes = [
  {
    step: '01',
    image: discover,
    title: 'Discover',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
    imageDecorBottom: (
      <img className={styles.box__decorBottom} src={decorHorizontal} alt="decor" />
    ),
    imageLine: <img className={styles.line} src={line} alt="Line" />,
  },
  {
    step: '02',
    image: designing,
    title: 'Designing',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
    imageLine: <img className={styles.line} src={line} alt="Line" />,
  },
  {
    step: '03',
    image: development,
    title: 'Development',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
  },
  {
    step: '04',
    image: testing,
    title: 'Testing',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent',
    imageLine: <img className={styles.line} src={line} alt="Line" />,
  },
  {
    step: '05',
    image: deployment,
    title: 'Deployment',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent',
    imageLine: <img className={styles.line} src={line} alt="Line" />,
  },
  {
    step: '06',
    image: maintenance,
    title: 'Maintenance',
    text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
    imageDecorTop: (
      <img className={styles.box__decorTop} src={decorHorizontal} alt="decor" />
    ),
  },
];

const Process = ({ backgroundColor }) => {
  return (
    <div className={styles.process} style={backgroundColor}>
      <div className="container">
        <div className={styles.process__wrapper}>
          <div className={styles.process__top}>
            <svg
              className={styles.shape}
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
            >
              <path
                d="M16 -4.80825e-07L27 0L27 29L16 29L16 -4.80825e-07Z"
                fill="#666DFF"
              />
              <path
                d="M-1.49012e-07 -3.49691e-07L8 0L8 8L-4.98703e-07 8L-1.49012e-07 -3.49691e-07Z"
                fill="#666DFF"
              />
              <path
                d="M8 -8.30516e-07L27 0L27 19L8 19L8 -8.30516e-07Z"
                fill="#FFA155"
              />
              <path d="M16 8L27 8L27 19L16 19L16 8Z" fill="#FFD3AF" />
            </svg>

            <div className="caption">Our Process</div>
            <h2 className={styles.process__title}>
              The process we are working With Our client Worldwide
            </h2>
            <p className={styles.process__text}>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>
          <div className={styles.process__bottom}>
            {boxes.map((box) => {
              return (
                <>
                  <div className={styles.box}>
                    <div className={styles.step}>{box.step}</div>

                    {box.imageDecorBottom}
                    <div className={styles.box__inner}>
                      <img className={styles.icon} src={box.image} alt="Icon" />
                      <div className={styles.right}>
                        <h6>{box.title}</h6>
                        <p>{box.text}</p>
                      </div>
                      {box.imageDecorTop}
                    </div>
                  </div>
                  {box.imageLine}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
