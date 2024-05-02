import React from 'react';
import IconCardButton from '../components/IconCardButton';
import {fotografo, obrero, aseo} from '../assets/graphics';

const additionalServices = [
  {
    text: 'Disfruta de tomar fotografías y publicaciones a domicilio',
    button: 'Registrarme',
    image: fotografo,
    color: 'purple',
    message: 'Hola, me interesa en el avaluó y fotografías renta.'
  },
  {
    text: 'Ofrece tus propiedades como nuevas',
    button: 'Solicitar',
    image: obrero,
    color: 'green',
    message: 'Hola, estoy interesante en mantenimientos, acabados, remodelaciones o diseño de interiores.'
  },
  {
    text: 'Servicio de aseo y limpieza a domicilio',
    button: 'Lo Necesito',
    image: aseo,
    color: 'orange',
    message: 'Hola, estoy interesado en el aseo y limpieza.'
  },
];

const Part3 = () => {
  return (
    <div className="p-4 mt-5">
      <h3>
        <b>Atrévete a hacerlo diferente para ver tu propiedad distintas en arriendos y rentas</b>
      </h3>
      <div>
        <div className="mt-3 row">
          {additionalServices.map(({ text, button, image, color, message }, index) => {
            return (
              <IconCardButton
                text={text}
                button={button}
                image={image}
                color={color}
                key={index}
                message={message}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Part3;
