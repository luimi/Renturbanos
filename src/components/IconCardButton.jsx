import React from 'react';
import { openWhatsApp } from '../utils/whatsapp'

const IconCardButton = ({ button, text, image, color = 'purple', message }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-1">
      <div style={{ ...containerStyle, ...styles[color].card }} className="p-4">
        <p style={textStyle}>{text}</p>
        <button
          type="button"
          className="btn rounded-pill"
          style={{ ...buttonStyle, ...styles[color].button }}
          onClick={() => {
            console.log("click", message)
            if(message) openWhatsApp(message)()
          }}
        >
          {button}
        </button>
        <img src={image} style={imageStyle} alt='icon'/>
      </div>
    </div>
  );
};
const containerStyle = {
  position: 'relative',
  height: 200,
  borderRadius: 9,
  color: 'white',
};
const textStyle = {
  overflowY: 'hidden',
  height: 100,
  width: 200,
  fontSize: 'large',
  fontWeight: 600,
};
const buttonStyle = {
  position: 'absolute',
  bottom: 15,
  left: 15,
  width: 200,
  color: 'white',
};
const imageStyle = {
  position: 'absolute',
  height: 200,
  right: 20,
  top: 0,
};
const styles = {
  purple: {
    card: {
      background: '#9877BA',
    },
    button: {
      background: '#5E00BE',
    },
  },
  green: {
    card: {
      background: '#55CB8A',
    },
    button: {
      background: '#05FF76',
    },
  },
  orange: {
    card: {
      background: '#CF8655',
    },
    button: {
      background: '#F69553',
    },
  },
};
export default IconCardButton;
