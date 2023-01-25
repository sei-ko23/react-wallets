import React from 'react';

function ArrowIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 25 25'
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12.5 1L24 12.5 12.5 24'
      ></path>
      <path fill='#000' d='M1 11.5a1 1 0 100 2v-2zm23 0H1v2h23v-2z'></path>
    </svg>
  );
}

export default ArrowIcon;
