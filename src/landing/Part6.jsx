import React from 'react';
import IconButton from '../components/IconButton';
import { recepcionista, timbre, butaco, mucama } from '../assets/icons'
import { recepcionista as recepcionistaGraphic } from '../assets/graphics'

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
      <div className="pt-4 pb-4 ps-4 bg-gray row" >
        <div className='col-12 col-sm-9'>
          <h1>Ser tu Anfitrión es un privilegio</h1>
          <p>Atendemos a tus huéspedes.</p>
          <p>
            <b>Operamos rentas vacacionales y de cortas estadías</b> con nuestra
            ayuda
          </p>
          <button className="btn bg-green rounded-pill mb-5">Solicítalo Aquí</button>
          <div className="row overflow-auto flex-nowrap">
            {services.map((service, index) => {
              return <IconButton title={service.title} icon={service.icon} key={index} />;
            })}
          </div>
        </div>
        <div className='col-sm-3 d-none d-sm-block'>
          <img
            src={recepcionistaGraphic}
            className=""
            style={{ width: "-webkit-fill-available" }}
            alt='model'
          />
        </div>


      </div>
    </div>
  );
};

export default Part6;
