import React from 'react';

const IconButton = ({ title, icon, indicator }) => {
  return (
    <div className="row justify-content-center col-auto mx-2">
      <img src={icon} style={iconStyle} alt='icon' className='p-0'/>
      <span className="badge text-bg-light shadow-sm rounded-pill">
        {title}
        {indicator?<i className="bi bi-chevron-right "></i>:''}
      </span>
    </div>
  );
};

const iconStyle = {
  width: 'auto',
  height: 100,
};
export default IconButton;
