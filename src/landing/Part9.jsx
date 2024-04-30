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
            <div className='rounded-4 d-grid' style={{boxShadow: "0px 4px 22.5px 0px #00000040"}}>
            <img src={arquitecto} style={imageStyle} alt="arquitecto"/>
            </div>
            
            <button type="button" className="btn rounded-pill mt-3" style={{backgroundColor: '#FF5031', fontWeight: 500}}>
              Registra tu espacio
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="p-2 bg-white d-grid">
            <div className='rounded-4 d-grid' style={{boxShadow: "0px 4px 22.5px 0px #00000040"}}>
            <img src={vendedora} style={imageStyle} alt="vendedora"/>
            </div>
            <button type="button" className="btn rounded-pill mt-3 " style={{backgroundColor: 'var(--green)', fontWeight: 500}}>
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
