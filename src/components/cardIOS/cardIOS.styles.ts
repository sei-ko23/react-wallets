import styled from 'styled-components';
import {
  CardBackProps,
  CardFrontProps,
  ContentProps,
  SemiCircleProps
} from './cardIOS.types';

export const CardContainer = styled('div')`
  margin: 0px auto;
  min-width: 345px;
  max-width: 345px;
`;

export const Card = styled('div')`
  perspective: 1000px;
`;

export const Content = styled('div')<ContentProps>`
  position: relative;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform ease 0.6s;
  transform-style: preserve-3d;
`;

export const CardFrontRegular = styled('div')<CardFrontProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  min-width: 345px;
  max-width: 345px;
  background: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #f2ecec;
  border-radius: 10px;
`;
export const CardBackRegular = styled('div')<CardBackProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  position: absolute;
  /* position: ${(props) => (props.flipped ? 'unset' : 'absolute')}; */
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 500px;
  padding: 9px;
  background: #ffffff;
  border: 1px solid #f2ecec;
  border-radius: 10px;
  transform: rotateY(180deg);
  transition: transform ease 0.6s;
`;

export const CardFrontCoupon = styled('div')<CardFrontProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 500px;
  min-width: 345px;
  max-width: 345px;
  margin: 0 auto;
  background: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #f2ecec;
  --mask: linear-gradient(#f2ecec 0 0) center/100% calc(100% - 8px) no-repeat,
    radial-gradient(circle farthest-side, #0000 100%, #f2ecec) 0.2% -9px/12px 13px
      repeat-x,
    radial-gradient(circle farthest-side, #0000 100%, #f2ecec) 0.2%
      calc(100% + 9px) / 12px 13px repeat-x;
  mask: var(--mask);
`;
export const CardBackCoupon = styled('div')<CardBackProps>`
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: absolute;
  /* position: ${(props) => (props.flipped ? 'unset' : 'absolute')}; */
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 570px;
  min-width: 345px;
  max-width: 345px;
  margin: 0 auto;
  padding: 9px;
  border: 1px solid #f2ecec;
  background: ${(props) => props.backgroundColor || '#ffffff'};
  transform: rotateY(180deg);
  transition: transform ease 0.6s;
  --mask: linear-gradient(#000 0 0) center/100% calc(100% - 8px) no-repeat,
    radial-gradient(circle farthest-side, #0000 100%, #000) 0.2% -9px/12px 13px repeat-x,
    radial-gradient(circle farthest-side, #0000 100%, #000) 0.2%
      calc(100% + 9px) / 12px 13px repeat-x;
  mask: var(--mask);
`;

export const CardFrontSemiCirlce = styled('div')<CardFrontProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 500px;
  min-width: 345px;
  max-width: 345px;
  margin: 0 auto;
  background: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #f2ecec;
`;
export const CardBackSemiCircle = styled('div')<CardBackProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  position: absolute;
  /* position: ${(props) => (props.flipped ? 'unset' : 'absolute')}; */
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 345px;
  min-width: 345px;
  margin: 0 auto;
  padding: 9px;
  border: 1px solid #f2ecec;
  background: #ffffff;
  transform: rotateY(180deg);
  transition: transform ease 0.6s;
`;

export const CardFrontDoubleCirlce = styled('div')<CardFrontProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  min-height: 350px;
  min-width: 345px;
  max-width: 345px;
  margin: 0 auto;
  background: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #f2ecec;
  border-radius: 10px;
`;
export const CardBackDoubleCircle = styled('div')<CardBackProps>`
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: absolute;
  /* position: ${(props) => (props.flipped ? 'unset' : 'absolute')}; */
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  width: fit-content;
  min-width: 345px;
  min-height: 552px;
  margin: 0 auto;
  border: 1px solid #f2ecec;
  border-radius: 10px;
  background: #ffffff;
  transform: rotateY(180deg);
  transition: transform ease 0.6s;
`;

export const Button = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 15px;
  position: absolute;
  z-index: 999;
  right: 5px;
  bottom: 0px;
  background: transparent;
  :hover {
    background: #0000000a;
  }
`;

export const ContainerSemiCircle = styled('div')`
  position: absolute;
  z-index: 99;
  top: 0px;
  left: calc(50% - 35px);
  width: 70px;
  height: 16px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  transform: rotate(180deg);
  overflow: hidden;
`;
export const SemiCircle = styled('div')<SemiCircleProps>`
  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 30px;
  border: 1px solid #f2ecec;
  background-color: ${(props) => props.backgroundColor};
`;

export const ContainerLeftSemiCircle = styled('div')`
  position: absolute;
  z-index: 1;
  top: 140px;
  left: -31px;
  width: 70px;
  height: 8px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  transform: rotate(90deg);
  overflow: hidden;
`;

export const SemiLeftCircle = styled('div')<SemiCircleProps>`
  width: 20px;
  height: 25px;
  margin: auto;
  border-radius: 30px;
  border: 1px solid #f2ecec;
  background-color: ${(props) => props.backgroundColor};
`;

export const ContainerRightBackSemiCircle = styled('div')<SemiCircleProps>`
  position: absolute;
  z-index: 1;
  top: 140px;
  /* right: ${(props) => (props.type === 'plane' ? '-40.5px' : '-31px')}; */
  right: -31px;
  width: 70px;
  height: 8px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  transform: rotate(270deg);
  overflow: hidden;
  display: ${(props) => (props.flipped ? 'block' : 'none')};
`;
export const ContainerRightFrontSemiCircle = styled('div')<SemiCircleProps>`
  position: absolute;
  z-index: 1;
  top: 140px;
  /* right: ${(props) => (props.type === 'plane' ? '-10.5px' : '-20.5px')}; */
  right: -31.5px;
  width: 70px;
  height: 8px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  transform: rotate(270deg);
  overflow: hidden;
  display: ${(props) => (props.flipped ? 'none' : 'block')};
`;

export const SemiRightCircle = styled('div')<SemiCircleProps>`
  width: 20px;
  height: 25px;
  margin: auto;
  border-radius: 30px;
  border: 1px solid #f2ecec;
  background-color: ${(props) => props.backgroundColor};
`;
