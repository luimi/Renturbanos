import React from 'react';
import { arquitecto, vendedora} from '../assets/graphics'

const Part9 = () => {
  return (
    <div className="my-4 container">
      <div className="row text-center mb-3">
        <h1>
          Únete a <span style={{ color: 'var(--green)' }}>Renturbanos</span>
        </h1>
      </div>
      <div className="row p-1">
        <div className="col-12 col-md-6">
          <div className="p-2 bg-white  d-grid">
            <div className='shadow-lg rounded-4 d-grid'>
            <img src={arquitecto} style={imageStyle} alt="arquitecto"/>
            </div>
            
            <button type="button" className="btn btn-danger rounded-pill mt-3">
              Registra tu espacio
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-2 bg-white d-grid">
            <div className='shadow-lg rounded-4 d-grid'>
            <img src={vendedora} style={imageStyle} alt="vendedora"/>
            </div>
            <button type="button" className="btn bg-green rounded-pill mt-3">
              Conviertete en un Brokerentur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const imageStyle = {
  maxWidth: "100%",
  maxHeight: 260,
  justifySelf: "center"
}
export default Part9;
