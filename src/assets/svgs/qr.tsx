import React, { FC } from 'react';

const QR: FC<{
  height?: number | string;
  width?: number | string;
}> = ({ height = 128, width = 128 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      version='1'
      viewBox='0 0 217 217'
    >
      <path
        d='M110 1735v-325h650v650H110v-325zm560-5v-230H210v460h460v-230z'
        transform='matrix(.1 0 0 -.1 0 217)'
      ></path>
      <path
        d='M300 1730v-140h280v280H300v-140zM850 2010v-50h100v-90H850v-280h280v100h90v90h100v280h-100v-280h-90v90h-90v190H850v-50zm190-185v-45h90v-90H950v180h90v-45zM1410 1735v-325h650v650h-650v-325zm550-5v-230h-460v460h460v-230z'
        transform='matrix(.1 0 0 -.1 0 217)'
      ></path>
      <path
        d='M1590 1730v-140h280v280h-280v-140zM850 1455v-45h100v-90H850v-100h100v100h90v-280H850v90H670v90h90v100h-90v-100H480v100H110v-100h100v-90H110V850h100v100h90V850h90v100h90V850h280v100H580v180h90v-90h180v-90h100V850H850v-90h190v190h90V850h90v100h100v180h90v-90h180V760h-90v190h-90V850h-90v-90h180v-90h190v-90h90V480h-90v-90h90v-90h90v90h90v90h-90v280h-90v280h-190v90h280V950h190v370h-100v-190h-90v190h-280v-100h-180v100h-90v-100h-100V950h-90v550h-90v-90h-90v90H850v-45zm-460-280v-45h90v-90h-90v-90h-90v90h-90v90h90v90h90v-45zm1480-740v-45h-90v90h90v-45z'
        transform='matrix(.1 0 0 -.1 0 217)'
      ></path>
      <path
        d='M300 1085v-45h90v90h-90v-45zM1220 1455v-45h100v90h-100v-45zM110 435V110h650v650H110V435zm560 5V210H210v460h460V440z'
        transform='matrix(.1 0 0 -.1 0 217)'
      ></path>
      <path
        d='M300 440V300h280v280H300V440zM950 625v-45h90V480H850V110h100v100h90V110h370v100h90V110h370v100h-180v90h-280v-90h-90v90h-100v90h-180v90h180v100h100V480h90v190H950v-45zm90-280v-45h90v-90h-90v90h-90v90h90v-45zM1960 625v-45h100v90h-100v-45zM1960 255v-45h100v90h-100v-45z'
        transform='matrix(.1 0 0 -.1 0 217)'
      ></path>
    </svg>
  );
};
export default QR;
