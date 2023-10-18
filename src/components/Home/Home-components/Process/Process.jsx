import React from 'react';
import './process.scss';

import discover from './icons/discover.svg';
import designing from './icons/designing.svg';
import development from './icons/development.svg';
import testing from './icons/testing.svg';
import deployment from './icons/deployment.svg';
import maintenance from './icons/maintenance.svg';
import line from './img/line.svg';
import decorHorizontal from './img/decor-horizontal.svg'

const Process = ({backgroundColor}) => {
  return (
    <div className="process" style={backgroundColor}>
      <div className="container">
        <div className="process__wrapper">
          <div className="process__top">
            <svg
              className="shape"
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
            <h2 className='top__title'> The process we are working With Our client Worldwide</h2>
            <p className='top__text'>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>
          <div className="process__bottom">
            <div className="box">
              <div className="step">01</div>

              <div className="box__inner">
                <img className="icon" src={discover} alt="icon" />
                <div className="right">
                  <h6>Discover</h6>
                  <p>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
              <img className='box__decor-bottom' src={decorHorizontal} alt="decor" />
            </div>
            <img className='line' src={line} alt="" />
            <div className="box">
              <div className="step">02</div>

              <div className="box__inner">
                <img className="icon" src={designing} alt="icon" />
                <div className="right">
                  <h6 className='right__title'>Designing</h6>
                  <p className='right__text'>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>
            <img className='line' src={line} alt="" />

            <div className="box">
              <div className="step">03</div>

              <div className="box__inner">
                <img className="icon" src={development} alt="icon" />
                <div className="right">
                  <h6>Development</h6>
                  <p>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="step">04</div>

              <div className="box__inner">
                <img className="icon" src={testing} alt="icon" />
                <div className="right">
                  <h6>Testing</h6>
                  <p>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>
            <img className='line' src={line} alt="" />
            <div className="box">
              <div className="step">05</div>

              <div className="box__inner">
                <img className="icon" src={deployment} alt="icon" />
                <div className="right">
                  <h6>Deployment</h6>
                  <p>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
            </div>
            <img className='line' src={line} alt="" />

            <div className="box">
              <div className="step">06</div>

              <div className="box__inner">
                <img className="icon" src={maintenance} alt="icon" />
                <div className="right">
                  <h6>Maintenance</h6>
                  <p>
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
              </div>
              <img className='box__decor-top' src={decorHorizontal} alt="decor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
