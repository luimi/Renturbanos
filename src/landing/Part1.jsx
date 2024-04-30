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
    <div style={{ ...container, backgroundImage: `url(${background})` }} >
      <div className="row" style={{width: "100%", height: "inherit"}}>
        <div className='col-12 floating-container'>
          <div style={content} className="floating-center row me-md-5">
            <div className="carousel slide mx-4 col-12 col-md-4" data-bs-ride="carousel">
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

            <div className='col-12 col-md-6'>
              <h1 style={{/*fontSize: '3rem'*/}} className='display-5'>
                <b>Solo se vive una vez en la vida</b>
              </h1>
              <p style={{fontSize: '1.5rem'}}>
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
  width: "70%",
  display: 'flex',
  flexDirection: 'row',
  height: 'fit-content',
  //paddingRight:150
};
const icon = {
  width: 200,
  height: 200,
};
export default Part1;
