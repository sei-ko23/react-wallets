import React, { FC } from 'react';
// styles
import { HeaderContainer, ImageContainer, Title } from './header.styles';
// types
import { HeaderProps } from '../../components/index.types';

const Header: FC<HeaderProps> = (props) => {
  // props
  const { titleColor, headerLogoLink, title } = props;
  // render
  return (
    <HeaderContainer>
      <ImageContainer src={headerLogoLink} />
      <Title textColor={titleColor}>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
