import React from 'react';
import background  from '../assets/graphics/part1background.png'
import restaurante from '../assets/icons/restaurante.png'
import {openWhatsApp} from '../utils/whatsapp'

const Part1 = () => {
  return (
    <div style={{...container, backgroundImage: `url(${background})`}} className="floating-container" >
      <div style={content} className="floating-left-center ms-5">
        <img
          src={restaurante}
          style={icon}
          alt='service'
        />
        <div>
          <h1>
            <b>Solo se vive una vez en la vida</b>
          </h1>
          <p>
            En este lugar encuentras tus mejores experiencias de vivir, viajar y
            trabajar
          </p>
          <button
            type="button"
            className="btn rounded-pill bg-red"
            onClick={openWhatsApp("Buenas")}
          >
            Empieza ahora
          </button>
        </div>
      </div>
    </div>
  );
};
const container = {
  height: 'calc(100vh - 56px)',
  backgroundPosition: 'center center',
 //backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const content = {
  width: 500,
  display: 'flex',
  flexDirection: 'row',
  height:'fit-content'
};
const icon = {
  width: 200,
  height: 200,
};
export default Part1;
