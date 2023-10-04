import React from 'react';
import './expertise.scss';

import shape from './img/shape.jpg';
import rocket from './icon/rocket.svg';
import setting from './icon/setting.svg';
import support from './icon/support.svg';
import decor from './img/decor-horizontal.svg';


const Expertise = () => {
  return (
    <div className="expertise">
      <div className="container">
        <div className="expertise__wrapper">
          <div className="expertise__text">
          <div className="caption">Our expertise</div>
            <h2>
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p>
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. 
            </p>
          </div>
          <div className="expertise__right">
            <img className="expertise__right--shape" src={shape} alt="" />
            <ul className="list">
              <li className="item">
                <img src={rocket} alt="" />
                <div>
                  <h6>On Time Delivery</h6>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
              <li className="item">
                <img src={setting} alt="" />
                <div>
                  <h6>Best Quality</h6>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
              <li className="item">
                <img src={support} alt="" />
                <div>
                  <h6>Support Assist</h6>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </li>
              
            </ul>
              <img src={decor} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
