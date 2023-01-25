import React, { FC } from "react";
// contants
import { Svgs } from "../../constants/images";
// styles
import { Container, SecondaryTitle, MainTitle, Row } from "./cardTitle.styles";
// types
import { TitleProps } from "./cardTitle.types";

const CardTitle: FC<TitleProps> = (props) => {
  const {
    composedMainTitle,
    composedSecondaryTitle,
    secondaryTitle,
    mainTitle,
    type,
  } = props;
  return (
    <Container>
      {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
      <MainTitle>{mainTitle}</MainTitle>
      {composedSecondaryTitle?.from && composedSecondaryTitle?.to && (
        <Row gap="4px" alignItems="flex-start">
          <SecondaryTitle>{composedSecondaryTitle?.from}</SecondaryTitle>
          <span>-</span>
          <SecondaryTitle>{composedSecondaryTitle?.to}</SecondaryTitle>
        </Row>
      )}
      {composedMainTitle?.from && composedMainTitle?.to && (
        <Row gap="12px">
          <MainTitle>{composedMainTitle?.from}</MainTitle>
          {type === "plane" && <Svgs.PlaneIcon />}
          {(type === "boat" ||
            type === "bus" ||
            type === "subway" ||
            type === "train") && <Svgs.ArrowIcon />}
          <MainTitle>{composedMainTitle?.to}</MainTitle>
        </Row>
      )}
    </Container>
  );
};

export default CardTitle;

//props
