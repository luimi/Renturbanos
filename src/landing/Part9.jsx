import React from 'react';
import { arquitecto, vendedora} from '../assets/graphics'

const Part9 = () => {
  return (
    <div className="my-4 container">
      <div className="row text-center mb-3">
        <h1>
          Únete a <span style={{ color: 'var(--green)' }}>Rentaurbanos</span>
        </h1>
      </div>
      <div className="row p-1">
        <div className="col-6">
          <div className="p-2 bg-white d-grid rounded-4">
            <img src={arquitecto} style={imageStyle} alt="arquitecto"/>
            <button type="button" className="btn btn-danger rounded-pill">
              Registra tu espacio
            </button>
          </div>
        </div>
        <div className="col-6 ">
          <div className="p-2 bg-white d-grid rounded-4">
            <img src={vendedora} style={imageStyle} alt="vendedora"/>
            <button type="button" className="btn bg-green rounded-pill">
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
