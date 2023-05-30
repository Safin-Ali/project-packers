import React from 'react';
import { DefaultImg } from '../../Assets';

export default function Image({ src, className }) {
  return (
    <img src={src?.startsWith('https://') ? src : `${process.env.REACT_APP_SERVER_URL || src}`} onError={(e) => { e.target.src = DefaultImg; }} className={`${className}`} alt="images" />
  );
}
