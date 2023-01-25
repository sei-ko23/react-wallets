import React, { FC } from "react";
import { CardType } from "../../components/index.types";
import { Svgs } from "../../constants/images";
//styles
import {
  InformationWrapper,
  InformationsTitleWrapper,
  InformationContainer,
  InformationTitle,
  InformationValue,
  FromToTitle,
  FromToValue,
} from "./information.styles";
//types
import { InformationProps } from "./information.types";

const Information: FC<InformationProps> = (props) => {
  //props
  const {
    type,
    LeftTitle,
    LeftValue,
    RightTitle,
    RightValue,
    topLeftTitle,
    topLeftValue,
    topCenterLeftTitle,
    topCenterLeftValue,
    topCenterRightTitle,
    topCenterRightValue,
    topRightTitle,
    topRightValue,
    bottomLeftTitle,
    bottomLeftValue,
    bottomCenterTitle,
    bottomCenterValue,
    bottomRightTitle,
    bottomRightValue,
    titleColor,
    textColor,
  } = props;
  //render
  const renderSvgByType = (pass: CardType) => {
    if (pass === "boat") {
      return <Svgs.Boat />;
    }
    if (pass === "plane") {
      return <Svgs.Plane />;
    }
    if (pass === "bus") {
      return <Svgs.Bus />;
    }
    if (pass === "train" || pass === "subway") {
      return <Svgs.Train />;
    } else return null;
  };

  return (
    <InformationWrapper>
      {/* row 1 */}
      {LeftTitle && LeftValue && RightTitle && RightValue && (
        <InformationsTitleWrapper>
          <InformationContainer>
            <FromToTitle>{LeftTitle}</FromToTitle>
            <FromToValue textTransform="uppercase">{LeftValue}</FromToValue>
          </InformationContainer>
          {renderSvgByType(type)}
          <InformationContainer textAlign="right">
            <FromToTitle>{RightTitle}</FromToTitle>
            <FromToValue textTransform="uppercase">{RightValue}</FromToValue>
          </InformationContainer>
        </InformationsTitleWrapper>
      )}
      {/* row 2 */}
      <InformationsTitleWrapper>
        {topLeftTitle && topLeftValue && (
          <InformationContainer>
            <InformationTitle textColor={titleColor}>
              {topLeftTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {topLeftValue}
            </InformationValue>
          </InformationContainer>
        )}
        {topCenterLeftTitle && topCenterLeftValue && (
          <InformationContainer>
            <InformationTitle textColor={titleColor}>
              {topCenterLeftTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {topCenterLeftValue}
            </InformationValue>
          </InformationContainer>
        )}
        {topCenterRightTitle && topCenterRightValue && (
          <InformationContainer>
            <InformationTitle textColor={titleColor}>
              {topCenterRightTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {topCenterRightValue}
            </InformationValue>
          </InformationContainer>
        )}
        {topRightTitle && topRightValue && (
          <InformationContainer textAlign="right">
            <InformationTitle textColor={titleColor}>
              {topRightTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {topRightValue}
            </InformationValue>
          </InformationContainer>
        )}
      </InformationsTitleWrapper>
      {/* row 3 */}
      <InformationsTitleWrapper>
        {bottomLeftTitle && bottomLeftValue && (
          <InformationContainer>
            <InformationTitle textColor={titleColor}>
              {bottomLeftTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {bottomLeftValue}
            </InformationValue>
          </InformationContainer>
        )}
        {bottomCenterTitle && bottomCenterValue && (
          <InformationContainer textAlign="center">
            <InformationTitle textColor={titleColor}>
              {bottomCenterTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {bottomCenterValue}
            </InformationValue>
          </InformationContainer>
        )}
        {bottomRightTitle && bottomRightValue && (
          <InformationContainer textAlign="right">
            <InformationTitle textColor={titleColor}>
              {bottomRightTitle}
            </InformationTitle>
            <InformationValue textColor={textColor}>
              {bottomRightValue}
            </InformationValue>
          </InformationContainer>
        )}
      </InformationsTitleWrapper>
    </InformationWrapper>
  );
};

export default Information;
