import React from 'react';

const SymbolO:React.FC = () => (
  <svg
    version="1.1"
    id="circle"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <circle
      fill="none"
      stroke="#000"
      strokeWidth="6"
      strokeMiterlimit="0"
      cx="50"
      cy="50"
      r="18"
      strokeDasharray="360"
      strokeLinecap="butt"
      transform="rotate(-90 ) translate(-100 0)"
    >
      <animate attributeName="stroke-dashoffset" values="360;0" dur="3s" />
    </circle>
  </svg>
);

export default SymbolO;
