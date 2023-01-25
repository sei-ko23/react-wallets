import React from 'react';
//images
import { Svgs } from '../constants/images';
//styles
import { SvgContainer } from '../commonsAndroid/access/access.styles';
//types
import { AccessType } from './index.types';

export const barCodeTypesImage = (barCode: AccessType) => {
  if (barCode === 'AZTEC') {
    return (
      <SvgContainer>
        <Svgs.AZTEC />
      </SvgContainer>
    );
  }
  if (barCode === 'QR') {
    return (
      <SvgContainer>
        <Svgs.QR />
      </SvgContainer>
    );
  }
  if (barCode === 'CODE128') {
    return (
      <SvgContainer>
        <Svgs.CODE128 />
      </SvgContainer>
    );
  }
  if (barCode === 'PDF417') {
    return (
      <SvgContainer>
        <Svgs.PDF417 />
      </SvgContainer>
    );
  } else return null;
};
