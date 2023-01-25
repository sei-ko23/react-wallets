import React, { FC } from 'react';
//styles
import { BannerContainer, BannerImage } from './banner.styles';
//types
import { FooterProps } from '../../components/index.types';

const Banner: FC<FooterProps> = (props) => {
  //props
  const { bannerImage } = props;
  //render
  if (bannerImage) {
    return (
      <BannerContainer>
        <BannerImage src={bannerImage} alt='banner-image' />
      </BannerContainer>
    );
  } else return null;
};

export default Banner;
