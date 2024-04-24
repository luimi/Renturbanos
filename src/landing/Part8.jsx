import React from 'react';
import ScrollItems from '../components/ScrollItems';
import IconButton from '../components/IconButton';
import {telefonoTicket, manoTelefonoPago, edificioTelefonoChat, manoTelefonoRenta} from '../assets/icons'

const services = [
  {
    title: 'Facturación en segundos',
    icon: telefonoTicket,
  },
  {
    title: 'Botón de pago',
    icon: manoTelefonoPago,
  },
  {
    title: 'Control de Copropiedades',
    icon: edificioTelefonoChat,
  },
  {
    title: 'Autogestión',
    icon: manoTelefonoRenta,
  },
];

const Part8 = () => {
  return (
    <div className=" p-4 mt-5 ">
      <div className="pt-4 pb-4 ps-4">
        <h3>
          <b>Nuestro Arrendador</b>
        </h3>
        <p>Arrienda directamente y nosotros lo administramos.</p>
        <button className="btn bg-green rounded-pill mb-5">
          Solicítalo Aquí
        </button>
        <ScrollItems id="part8">
          {services.map((service, index) => {
            return <IconButton title={service.title} icon={service.icon} key={index}/>;
          })}
        </ScrollItems>
      </div>
    </div>
  );
};

export default Part8;
