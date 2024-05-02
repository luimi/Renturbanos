import React from 'react';
import IconButton from '../components/IconButton';
import { recepcionista, timbre, butaco, mucama } from '../assets/icons'
import { recepcionista as recepcionistaGraphic } from '../assets/graphics'
import { openWhatsApp } from '../utils/whatsapp';

const services = [
  {
    title: 'Recepcion virtual',
    icon: recepcionista,
  },
  {
    title: 'Check In / Check Out',
    icon: timbre,
  },
  {
    title: 'Provisionamiento de enseres',
    icon: butaco,
  },
  {
    title: 'Mucama lista',
    icon: mucama,
  },
];

const Part6 = () => {
  return (
    <div className=" p-4 mt-5 ">
      <div className="pt-4 pb-4 ps-4 bg-gray row floating-container" >
        <div className='col'>
          <h1>Ser tu Anfitrión es un privilegio</h1>
          <p>Atendemos a tus huéspedes.</p>
          <p>
            <b>Operamos rentas vacacionales y de cortas estadías</b> con nuestra
            ayuda
          </p>
          <button className="btn bg-green rounded-pill mb-5" onClick={openWhatsApp("Hola, estoy interesado en que seas mi anfitrión.")}>Estoy interezado, soy arrendatario</button>
          <div className="row overflow-auto flex-nowrap">
            {services.map((service, index) => {
              return <IconButton title={service.title} icon={service.icon} key={index} />;
            })}
          </div>
        </div>
        <div className='col-auto d-none d-sm-block'>
          <img
            src={recepcionistaGraphic}
            className="floating-right-fit"
            style={{maxHeight:'100%' }}
            alt='model'
          />
        </div>


      </div>
    </div>
  );
};

export default Part6;
