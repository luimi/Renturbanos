import React from 'react';
import logo from '../assets/icons/logo-button.svg';

const Footer = () => {
  return (
    <div className="p-5 bg-gray-dark">
      <div className="row">
        <div className="col-lg-7 col-xs-12">
          <div className="row">
            <h5>
              <b>Sobre Nosotros</b>
            </h5>
          </div>
          <div className="row">
            <div className="col-auto">
              <img src={logo} style={{ width: 100, height: 100 }} alt='logo'/>
            </div>
            <div className="col">
              <small>
                ¡Somos Anfitriones! Es la primera plataforma en la que
                conectamos las ofertas de compra de inmuebles de manera efectiva
                en 5 días.
              </small>
              <small>
                ¡Funcionamos de manera distinta a una inmobiliaria! somos una
                comunidad experta al servicios de realizar proyectos
                inmobiliarios que generen valor a nuestros inversionistas.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xs-12">
          <div className="row">
            <h5>
              <b>Contáctanos</b>
            </h5>
          </div>
          <div className="row">
            <span>
              <i class="bi bi-house-door-fill"></i> Calle 100 # 10 - 00 Oficina
              202
            </span>
          </div>
          <div className="row">
            <span>
              <i class="bi bi-telephone-fill"></i> +57 300 123 3212
            </span>
          </div>
          <div className="row">
            <span>
              <i class="bi bi-envelope-fill"></i> hola@homebilu.com
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-4 mt-4">
        <span>
          <i class="bi bi-linkedin"></i> <i class="bi bi-instagram"></i>{' '}
          <i class="bi bi-facebook"></i> <i class="bi bi-youtube"></i>
        </span>
      </div>
      <div className="row">
        <hr />
      </div>
      <div className="row">
        <div className="col">
          <small>rentaurbanos.com. Todos los derechos reservados.</small>
        </div>
        <div className="col">
          <small>Políticas de privacidad</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
