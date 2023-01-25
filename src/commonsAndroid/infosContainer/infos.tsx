import React, { FC } from 'react';
//styles
import {
  InfoContainer,
  InfosContainer,
  InfoTitle,
  InfoValue,
  Seperator,
  Wrapper
} from './Infos.styles';
//types
import { InfosProps } from './infos.types';

const Infos: FC<InfosProps> = (props) => {
  //props
  const {
    topLeftTitle,
    topLeftValue,
    topCenterTitle,
    topCenterValue,
    topRightTitle,
    topRightValue,
    bottomLeftTitle,
    bottomLeftValue,
    bottomCenterTitle,
    bottomCenterValue,
    bottomRightTitle,
    bottomRightValue
  } = props;
  //render
  return (
    <InfosContainer>
      <Wrapper>
        {topLeftTitle && topLeftValue && (
          <InfoContainer>
            <InfoTitle>{topLeftTitle}</InfoTitle>
            <InfoValue>{topLeftValue}</InfoValue>
          </InfoContainer>
        )}
        {topCenterTitle && topCenterValue && (
          <InfoContainer textAlign='center'>
            <InfoTitle>{topCenterTitle}</InfoTitle>
            <InfoValue>{topCenterValue}</InfoValue>
          </InfoContainer>
        )}
        {topRightTitle && topRightValue && (
          <InfoContainer textAlign='right'>
            <InfoTitle>{topRightTitle}</InfoTitle>
            <InfoValue>{topRightValue}</InfoValue>
          </InfoContainer>
        )}
      </Wrapper>

      {((bottomLeftTitle && bottomLeftValue) ||
        (bottomCenterTitle && bottomCenterValue) ||
        (bottomRightTitle && bottomRightValue)) && <Seperator />}
      <Wrapper>
        {bottomLeftTitle && bottomLeftValue && (
          <InfoContainer>
            <InfoTitle>{bottomLeftTitle}</InfoTitle>
            <InfoValue>{bottomLeftValue}</InfoValue>
          </InfoContainer>
        )}
        {bottomCenterTitle && bottomCenterValue && (
          <InfoContainer textAlign='center'>
            <InfoTitle>{bottomCenterTitle}</InfoTitle>
            <InfoValue>{bottomCenterValue}</InfoValue>
          </InfoContainer>
        )}
        {bottomRightTitle && bottomRightValue && (
          <InfoContainer textAlign='right'>
            <InfoTitle>{bottomRightTitle}</InfoTitle>
            <InfoValue>{bottomRightValue}</InfoValue>
          </InfoContainer>
        )}
      </Wrapper>
    </InfosContainer>
  );
};

export default Infos;
