import React, { FC } from "react";
//styles
import {
  HeaderContainer,
  LogoContainer,
  LeftContainer,
  RightContainer,
  HeaderTitle,
  HeaderSubTitle,
  HeaderHeading,
} from "./header.styles";
//types
import { HeaderProps } from "../../components/index.types";

const Header: FC<HeaderProps> = (props) => {
  //props
  const { headerLogoLink, headerTitle, title, mainTitle, titleColor } = props;
  //render
  return (
    <HeaderContainer>
      <LeftContainer>
        <LogoContainer src={headerLogoLink} />
        <HeaderTitle textColor={titleColor}>{headerTitle}</HeaderTitle>
      </LeftContainer>
      <RightContainer>
        <HeaderSubTitle textColor={titleColor}>{title}</HeaderSubTitle>
        <HeaderHeading textColor={titleColor}>{mainTitle}</HeaderHeading>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
