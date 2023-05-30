import React from 'react';

export default function SVGIcon({ Icon, className, onClick = () => { } }) {
  return (
    <Icon className={`cursor-pointer ${className}`} onClick={onClick} />
  );
}
