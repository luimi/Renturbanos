import React from 'react';
import {manoCasa, logo} from '../assets/icons'

const Part4 = () => {
  return (
    <div className="mt-5 p-4">
      <div className="row rounded-4 p-3" style={container}>
        <div className="col-md-5 col-lg-3 d-none d-md-block floating-container">
          <img
            className="floating-center"
            style={{ width: 200 }}
            src={manoCasa}
            alt='who'
          />
        </div>
        <div className="col-md-7 col-lg-7 col-12">
          <div className="row">
            <div className="col-10">
              <h1 style={{ color: 'var(--orange)' }}>¿Necesitas dinero?</h1>
              <p>Tu propiedad es el mejor respaldo.</p>
            </div>
            <div className="col-2 floating-container">
              <img
                className="floating-left-center"
                style={{ width: 60 }}
                src={logo}
                alt='see'
              />
            </div>
          </div>
          <div className="row">
            <span>
              <b>Compramos directamente con</b>
              <span style={{ color: 'var(--orange)' }}>
                {' '}
                pacto de retroventa.
              </span>
            </span>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block"></div>
      </div>
    </div>
  );
};
const container = {
  background: '#F5F4F4',
};
export default Part4;
