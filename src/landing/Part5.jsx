import React from 'react';
import { openWhatsApp } from '../utils/whatsapp';

const Part5 = () => {
  return (
    <div className="p-4 row">
      <div className="bg-gray rounded-pill p-2 row col-12">
        <div className="bg-gray-dark rounded-pill p-2 col px-4 text-truncate">
          Registrarme ahora...
        </div>
        <div className="col-auto d-grid">
          <button type="button" className="btn bg-purple rounded-pill" onClick={openWhatsApp("Hola, necesito dinero, me interesa venderte.")}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part5;
