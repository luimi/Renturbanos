import React from 'react';
import IconButton from '../components/IconButton'
import ScrollItems from '../components/ScrollItems'
import { restaurante, hotel, casa, paquetes, supermarket, garita, oficina, botiquin } from '../assets/icons'

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
      <h3>
        <b>El espacio que buscas ¡nosotros te lo encontramos!</b>
      </h3>
      <div>
        <div className="pt-5 pb-5 row overflow-auto flex-nowrap">
          <ScrollItems id="part2">
            {services.map(({ title, icon }, index) => {
              return <IconButton title={title} icon={icon} key={index} indicator={true} />;
            })}
          </ScrollItems>

        </div>
      </div>
    </div>
  );
};
const container = {
  //height: '100vh',
};
export default Part2;
