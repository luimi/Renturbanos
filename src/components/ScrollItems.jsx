import React from 'react';
import chevronLeft from '../assets/icons/chevron-left.svg';
import chevronRight from '../assets/icons/chevron-right.svg';

const ScrollItems = ({ children, distance = 200, id = 'part0' }) => {
  const moveLeft = () => {
    document.getElementById(`scrollitem-${id}`).scrollLeft -= distance;
  };
  const moveRight = () => {
    document.getElementById(`scrollitem-${id}`).scrollLeft += distance;
  };
  return (
    <div className="floating-container">
      <img
        src={chevronLeft}
        className="floating-left-center"
        style={{ width: 60, height: 60, zIndex: 2 }}
        onClick={moveLeft}
        alt='back'
      />
      <img
        src={chevronRight}
        className="floating-right-center"
        style={{ width: 60, height: 60, zIndex: 2 }}
        onClick={moveRight}
        alt='next'
      />
      <div
        className='mx-5'
        style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}
        id={`scrollitem-${id}`}
      >
        <div className="row flex-nowrap">{children}</div>
      </div>
    </div>
  );
};

export default ScrollItems;
