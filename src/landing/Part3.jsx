import React from 'react';
import IconCardButton from '../components/IconCardButton';
import {fotografo, obrero, aseo} from '../assets/graphics'

const additionalServices = [
  {
    text: 'Disfruta de tomar fotografías y publicaciones a domicilio',
    button: 'Registrarme',
    image: fotografo,
    color: 'purple',
  },
  {
    text: 'Ofrece tus propiedades como nuevas',
    button: 'Solicitar',
    image: obrero,
    color: 'green',
  },
  {
    text: 'Servicio de aseo y limpieza a domicilio',
    button: 'Lo Necesito',
    image: aseo,
    color: 'orange',
  },
];

const Part3 = () => {
  return (
    <div className="p-4 mt-5">
      <h4>
        <b>Atrévete a hacerlo diferente para ver tu propiedad distinta</b>
      </h4>
      <div>
        <div className="mt-3 row">
          {additionalServices.map(({ text, button, image, color }, index) => {
            return (
              <IconCardButton
                text={text}
                button={button}
                image={image}
                color={color}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Part3;
