import React, { FC } from 'react';
//styles
import {
  Container,
  Divider,
  Section,
  Title,
  Value
} from '../cardIOSDetails.styles';
//types
import { CommonCardDetailsProps } from './commonCardDetails.types';

const CommonCardDetails: FC<CommonCardDetailsProps> = (props) => {
  const {
    description,
    termsAndConditions,
    descriptionTitle,
    termsAndConditionsTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>
          {descriptionTitle ? descriptionTitle : 'Description'}
        </Title>
        <Value textColor={textColor}>{description}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {termsAndConditionsTitle
            ? termsAndConditionsTitle
            : 'terms & conditions'}
        </Title>
        <Value textColor={textColor}>{termsAndConditions}</Value>
      </Section>
    </Container>
  );
};

export default CommonCardDetails;
