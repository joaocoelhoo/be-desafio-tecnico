import React from 'react';
import LogoSvg from '../../assets/Fundo.png';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="top-bar">
      <img className="logo" src={LogoSvg} />
    </div>
  );
}
