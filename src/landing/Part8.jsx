import React from 'react';
import ScrollItems from '../components/ScrollItems';
import IconButton from '../components/IconButton';
import {telefonoTicket, manoTelefonoPago, edificioTelefonoChat, manoTelefonoRenta, llaveMano, tabletTexto} from '../assets/icons'
import { openWhatsApp } from '../utils/whatsapp';

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
  {
    title: 'Reparaciones locativas en línea',
    icon: llaveMano,
  },
  {
    title: 'Gestión de contrato en línea',
    icon: tabletTexto,
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
        <button className="btn bg-green rounded-pill mb-5" onClick={openWhatsApp("Hola, estoy interesado, soy arrendador.")}>
          Estoy interezado, soy arrendador
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
