import React, { FC } from 'react';

const Aztec: FC<{
  height?: number | string;
  width?: number | string;
}> = ({ height = 128, width = 128 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      version='1'
      viewBox='0 0 162 162'
    >
      <path
        d='M300 1460v-50H110v-180h100v90h90v-280H110v-90h190v90h90V860H110V760h100V580h90v90h90V390h190v-90H480v-90h100v90h90V110h90v100h190V110h190v100h90V110h90v100h-90v90h-90v90h180v-90h90V110h100v470h-100V480h-180v380h90V670h190v90h-100v190h100v90h-100v100h-90v90h190v90h-280v90h180v100h-270v-190h90v-90H950v90h90v90h-90v100H580v-100H480v100H300v-50zm460-95v-45h100v-90H480v90h100v90h180v-45zm380-555V480H480v660h660V810zm270 185v-45h-90v90h90v-45zm-370-650v-45h100v-90H950v90H760v90h280v-45z'
        transform='matrix(.1 0 0 -.1 0 162)'
      ></path>
      <path
        d='M580 810V580h460v460H580V810zm370 0V670H670v280h280V810z'
        transform='matrix(.1 0 0 -.1 0 162)'
      ></path>
      <path
        d='M760 810v-50h100v100H760v-50zM110 295V110h190v100h-90v270H110V295z'
        transform='matrix(.1 0 0 -.1 0 162)'
      ></path>
    </svg>
  );
};

export default Aztec;
