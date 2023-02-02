import styled from 'styled-components';
//types
import { AccessType } from '../../components/index.types';

export const Container = styled('div')<{ type?: AccessType }>`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 3px 10px;
  border-radius: 4px;
  background: #fff;
  margin-top: ${({ type }) =>
    type === 'CODE128' || type === 'PDF417' ? '90px' : '75px'};
  margin-bottom: ${({ type }) =>
    type === 'CODE128' || type === 'PDF417' ? '30px' : '45px'};
  margin-right: auto;
  margin-left: auto;
`;
export const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 3px 0px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
`;
// export const Image = styled('img')<{ type: AccessType }>`
//   height: ${({ type }) =>
//     type === 'AZTEC' || type === 'QR' ? '128px' : '45px'};
//   width: ${({ type }) =>
//     type === 'AZTEC' || type === 'QR' ? '128px' : '225px'};
//   object-fit: cover;
// `;
export const Image = styled('img')<{ type: AccessType }>`
  height: ${({ type }) =>
    type === 'AZTEC' || type === 'QR' ? '128px' : '45px'};
  width: ${({ type }) =>
    type === 'AZTEC' || type === 'QR' ? '128px' : '225px'};
  object-fit: cover;
`;
export const AccessCode = styled('p')<{ type: AccessType }>`
  text-align: center;
  font-family: 'Product Sans', sans-serif;
  color: #000;
  margin: ${({ type }) =>
    type === 'AZTEC' || type === 'QR'
      ? '9px auto 0px auto'
      : '11px auto 0px auto'};
  font-size: 14px;
  font-weight: 400;
`;
