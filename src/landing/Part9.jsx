import React from 'react';

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
          <div className="p-2 bg-gray-dark d-grid rounded-4">
            <div className="py-5 " />
            <button type="button" className="btn btn-danger rounded-pill mt-5">
              Registra tu espacio
            </button>
          </div>
        </div>
        <div className="col-6 ">
          <div className="p-2 bg-gray-dark d-grid rounded-4">
            <div className="py-5 " />
            <button type="button" className="btn bg-green rounded-pill mt-5">
              Conviertete en un Brokerentur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part9;
