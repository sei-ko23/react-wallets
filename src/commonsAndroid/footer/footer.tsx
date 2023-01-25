import React, { FC } from 'react';
//styles
import { FooterContainer, Image } from './footer.styles';
//types
import { FooterProps } from '../../components/index.types';

const Footer: FC<FooterProps> = (props) => {
  //props
  const { bannerImage } = props;
  //render
  if (bannerImage) {
    return (
      <FooterContainer>
        <Image src={bannerImage} />
      </FooterContainer>
    );
  } else return null;
};

export default Footer;
