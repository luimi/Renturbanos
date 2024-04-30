import React from 'react';
import ScrollItems from '../components/ScrollItems';
import IconButton from '../components/IconButton';
import {manoTelefonoChecklist, manoTelefonoTarjeta,laptopBuscar, tarjetaSeguridadMoneda, telefonoManoDocumento, telefonoChecklist} from '../assets/icons'

const services = [
  {
    title: 'Verificación de identidad',
    icon: manoTelefonoChecklist,
  },
  {
    title: 'Verificación de ingresos',
    icon: manoTelefonoTarjeta,
  },
  {
    title: 'Sagrilaft',
    icon: laptopBuscar,
  },
  {
    title: 'Reportes de créditos',
    icon: tarjetaSeguridadMoneda,
  },
  {
    title: 'Garantías de pagos con seguros',
    icon: telefonoManoDocumento,
  },
  {
    title: 'Contrato digital',
    icon: telefonoChecklist,
  },
];

const Part7 = () => {
  return (
    <div className=" p-4 mt-5 ">
      <div className="pt-4 pb-4 ps-4">
        <h1 style={{ color: 'var(--green)' }}>
          En arriendo nos dedicamos para:
        </h1>
        <h3>
          <b>Nuestros Inquilinos</b>
        </h3>
        <p>
          Tus derechos de contratos son tan importantes como nuestro arrendador.
        </p>
        <button className="btn bg-green rounded-pill mb-5">
          Solicítalo Aquí
        </button>
        <ScrollItems id="part7">
          {services.map((service, index) => {
            return <IconButton title={service.title} icon={service.icon} key={index}/>;
          })}
        </ScrollItems>
      </div>
    </div>
  );
};

export default Part7;
