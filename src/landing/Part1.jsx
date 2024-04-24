import { useState, useEffect } from 'react';
import background from '../assets/graphics/part1background.png'
import { openWhatsApp } from '../utils/whatsapp'
import { restaurante, hotel, casa, paquetes, supermarket, garita, oficina, botiquin } from '../assets/icons'

const Part1 = () => {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log("tik", current)
      setCurrent(current === 7 ? 0 : current + 1)
    }, 3000)
  }, [current])
  return (
    <div style={{ ...container, backgroundImage: `url(${background})` }} className="floating-container" >
      <div style={content} className="floating-left-center ms-5">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[restaurante, hotel, casa, paquetes, supermarket, garita, oficina, botiquin].map((image, index) => {
              return <div className={`carousel-item ${index === current ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  style={icon}
                  alt='service'
                />
              </div>
            })}
          </div>
        </div>

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
  height: 'fit-content'
};
const icon = {
  width: 200,
  height: 200,
};
export default Part1;
