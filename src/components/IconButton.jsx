import React from 'react';

const IconButton = ({ title, icon, indicator }) => {
  return (
    <div className="align-items-center d-flex flex-column mx-2 py-1" style={{width: 'auto'}}>
      <img src={icon} style={iconStyle} alt='icon' className='p-0'/>
      <span className="shadow-sm px-3" style={{color: '#5189D4', backgroundColor: 'white', borderRadius: 25, textAlign: 'center'}}>
        {title}
        {indicator?<i className="bi bi-chevron-right " style={{color: 'red'}}></i>:''}
      </span>
    </div>
  );
};

const iconStyle = {
  width: 'fit-content',
  height: 100,
};
export default IconButton;
