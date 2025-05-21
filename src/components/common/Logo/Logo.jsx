import React from 'react';
import './Logo.scss'; // подключение стилей при необходимости

const Logo = () => {
  return (
    <div className="aam_logo-container">
      <svg
        viewBox="0 0 99.218 33.602"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="aam_logo-svg"
      >
        <defs>
          <filter id="b" x="-.0075118" y="-.0072273" width="1.0151" height="1.0146" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.001 0" />
          </filter>
          <linearGradient id="a" x1="58.385" x2="82.736" y1="149.94" y2="131.07" gradientUnits="userSpaceOnUse">
            <stop stopColor="#008000" offset="0" />
            <stop stopColor="#008000" stopOpacity="0" offset="1" />
          </linearGradient>
        </defs>
        <g transform="matrix(1.0064 0 0 1.0041 -59.072 -121.47)">
          <path
            d="m73.095 122.96 12.717 3.9545-6.4e-5 11.084c-1.8304 9.7663-9.8136 13.428-11.881 14.412-0.47376 0.21606-0.69609 0.23521-1.0737 0.028-2.5713-1.2534-10.428-4.9879-12.092-13.685l-0.07889-11.815z"
            fill="#00c500"
            stroke="#008000"
            strokeDashoffset="1"
            strokeLinejoin="round"
            strokeWidth="3.979"
            style={{ paintOrder: 'stroke fill markers' }}
          />
          <path
            d="m74.773 128.6-3.082 8e-3 -0.34882 1.6407-1.91 0.93018-1.4583-0.7922-2.0655 1.8986 1.0258 1.8252-0.93018 1.7937-1.8242 0.39842-0.06666 2.8319 1.9244 0.39843 0.66301 1.9937-0.95911 1.6252 2.066 1.9988 1.4077-0.9927 2.0774 0.82992 0.36484 1.958 3.1822-0.0832 0.19017-1.9162 2.0019-0.82165 1.5999 0.98392 2.1074-1.9487-1.001-1.8252 0.66353-1.7601 1.8826-0.31523 0.10025-2.8737-2.0996-0.59841-0.59686-1.9022 0.9679-1.5828-2.0242-1.9994-1.6914 0.91777-1.9523-0.99683zm-1.4407 5.1583a3.9688 3.9688 0 0 1 3.9688 3.9688 3.9688 3.9688 0 0 1-3.9688 3.9688 3.9688 3.9688 0 0 1-3.9688-3.9688 3.9688 3.9688 0 0 1 3.9688-3.9688z"
            fill="#ffd700"
            filter="url(#b)"
            stroke="url(#a)"
            strokeWidth=".26458"
          />
        </g>
        <path
          d="m21.023 33.47c4.8304-2.0056 9.7422-3.8425 13.854-7.3363l-2.2787-1.6977 7.66-0.68288-2.8359 6.4738-1.0527-2.1008c-4.8467 3.4304-10.112 4.2928-15.347 5.3439z"
          fill="#00c500"
          stroke="#008000"
          strokeDashoffset="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".79791"
          style={{ paintOrder: 'stroke fill markers' }}
        />
        <text
          transform="scale(.95698 1.045)"
          x="35.747139"
          y="19.419689"
          fill="#00c500"
          fontFamily="Arial"
          fontSize="15.197px"
          fontWeight="bold"
          stroke="#008000"
          strokeDashoffset="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".28494"
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            paintOrder: 'stroke fill markers',
          }}
        >
          <tspan x="35.747139" y="19.419689">AutoSure</tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
