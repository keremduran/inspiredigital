import * as React from 'react';

const EnglishIcon = (props: any) => (
  <svg
    width={16}
    height={12}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <title>{'flags/S/CA - Canada'}</title>
    <defs>
      <path id='a' d='M0 0h16v12H0z' />
    </defs>
    <g fill='none' fillRule='evenodd'>
      <mask id='b' fill='#fff'>
        <use xlinkHref='#a' />
      </mask>
      <g mask='url(#b)'>
        <path fill='#F7FCFF' d='M4 0h8.5v12H4z' />
        <path
          d='M7.987 3 8 10h-.343l.21-1.732c-1.537.282-2.242.352-2.115.21.127-.143.228-.345.3-.606L4 6.474c.216-.003.412-.058.587-.164.176-.107.088-.476-.263-1.109l1.036.154.392-.435.782.836h.352l-.352-1.914.63.36L7.987 3ZM8 3l.836 1.201.63-.359-.352 1.914h.352l.782-.836.392.435 1.036-.154c-.351.633-.439 1.002-.263 1.109.175.106.371.161.587.164L9.947 7.872c.073.261.174.463.3.606.128.142-.577.072-2.115-.21L8.342 10H8V3ZM12 0h4v12h-4zM0 0h4v12H0z'
          fill='#E31D1C'
        />
      </g>
    </g>
  </svg>
);

export default EnglishIcon;
