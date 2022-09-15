import * as React from 'react';

const TurkishIcon = (props: any) => (
  <svg
    width={16}
    height={12}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <title>{'flags/S/TR - Turkey'}</title>
    <defs>
      <path id='a' d='M0 0h16v12H0z' />
      <path id='c' d='M0 0h16v12H0z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='b' fill='#fff'>
        <use xlinkHref='#a' />
      </mask>
      <g mask='url(#b)'>
        <mask id='d' fill='#fff'>
          <use xlinkHref='#c' />
        </mask>
        <use fill='#E31D1C' xlinkHref='#c' />
        <path
          d='M7.936 2.033c.927.014 2.047.574 2.359 1.347 0 0-1.026-.615-2.207-.354-1.182.26-1.945 1.287-1.975 2.516-.033 1.313.79 2.224 1.856 2.506 1.066.283 2.205-.325 2.205-.325-.145.405-.825 1.351-2.224 1.329C6.204 9.024 4.24 7.727 4.296 5.51c.053-2.138 1.916-3.504 3.64-3.477Zm2.502 2.04.777.896 1.116-.354-.698.94 1.023.91-1.309-.118-.81.938.044-1.268-1.196-.446 1.073-.373-.02-1.125Z'
          fill='#F7FCFF'
          mask='url(#d)'
          transform='rotate(-1 8.475 5.542)'
        />
      </g>
    </g>
  </svg>
);

export default TurkishIcon;
