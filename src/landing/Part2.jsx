import React from 'react';
import IconButton from '../components/IconButton'
import {restaurante, hotel, casa, paquetes, supermarket, garita, oficina, botiquin} from '../assets/icons'

const services = [
  {
    title: 'Restaurantes',
    icon: restaurante,
  },
  {
    title: 'Viajeros',
    icon: hotel,
  },
  {
    title: 'Hogar',
    icon: casa,
  },
  {
    title: 'Almacenamiento',
    icon: paquetes,
  },
  {
    title: 'Comercio',
    icon: supermarket,
  },
  {
    title: 'Parking',
    icon: garita,
  },
  {
    title: 'Oficina',
    icon: oficina,
  },
  {
    title: 'Medical',
    icon: botiquin,
  },
];

const Part2 = () => {
  return (
    <div style={container} className="p-4 mt-5">
      <h4>
        <b>El espacio que buscas ¡nosotros te lo encontramos!</b>
      </h4>
      <div>
        <div className="pt-5 pb-5 row overflow-auto flex-nowrap">
          {services.map(({ title, icon }, index) => {
            return <IconButton title={title} icon={icon} key={index} indicator={true}/>;
          })}
        </div>
      </div>
    </div>
  );
};
const container = {
  //height: '100vh',
};
export default Part2;
