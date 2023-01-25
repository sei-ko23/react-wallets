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
import { PlaneCardDetailsProps } from './planeCardDetails.types';

const PlaneCardDetails: FC<PlaneCardDetailsProps> = (props) => {
  const {
    description,
    confirmationCode,
    flightDetailsTitle,
    confirmationCodeTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>
          {flightDetailsTitle ? flightDetailsTitle : 'flight details'}
        </Title>
        <Value textColor={textColor}>{description}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {confirmationCodeTitle ? confirmationCodeTitle : 'confirmation code'}
        </Title>
        <Value textColor={textColor}>{confirmationCode}</Value>
      </Section>
    </Container>
  );
};

export default PlaneCardDetails;
