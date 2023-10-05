import React from 'react';
import './button.scss';

const Button = ({ text }) => {
  return (
    <button className="button">
      <svg
        className="button__decor"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path d="M0 11.4074V0H28V11.4074H0Z" fill="#666DFF" />
        <path d="M0 27.9999V19.7036H7.72414V27.9999H0Z" fill="#666DFF" />
        <path d="M0 19.7037V0H18.3448V19.7037H0Z" fill="#FFA155" />
        <path d="M7.72461 11.4074V0H18.3453V11.4074H7.72461Z" fill="#FFD3AF" />
      </svg>

      <div className='button__text'>{text}</div>

      <svg
        className="button-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="8"
        viewBox="0 0 21 8"
        fill="none"
      >
        <path
          d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5L20 4.5V3.5L0 3.5L0 4.5Z"
          fill="white"
        />
      </svg>
      {/* <img className="text__button-icon" src={prev} alt="prev" /> */}
    </button>
  );
};

export default Button;
