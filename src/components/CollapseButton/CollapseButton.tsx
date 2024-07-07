import React from 'react';
import './IconButton.css';
import ChevDown from '../../assets/charm_chevron-down.png';
import ChevUp from '../../assets/charm_chevron-up.png';

type IconButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

const CollapseButton = ({ onClick, isOpen }: IconButtonProps) => {
  const handleOpen = () => {
    onClick();
  };
  return (
    <button className="icon-button" onClick={handleOpen}>
      <img src={isOpen ? ChevUp : ChevDown} alt="Icon" className="icon-img" />
    </button>
  );
};

export default CollapseButton;