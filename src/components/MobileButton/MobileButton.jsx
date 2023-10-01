import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import './mobileButton.scss';

const MobileButton = () => {
    const [active, setActive] =React.useState(false);

    const openIcon = 'mobile-button__icon';
    const closeIcon = 'mobile-button__icon active';
  return (
    <div className='mobile-button'>
        <button className='mobile-button__btn' type='button'>
            <span 
             onClick = {() => {
                setActive(!active);
                document.body.classList.toggle('no-scroll');
            }}
            className={active ? closeIcon : openIcon}
            ></span>
        </button>
        <MobileMenu active={active} setActive ={setActive}/>
    </div>
  )
}

export default MobileButton