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
import { BoatCardDetailsProps } from './boatCardDetails.types';

const BoatCardDetails: FC<BoatCardDetailsProps> = (props) => {
  const {
    description,
    startDate,
    endDate,
    price,
    ticketNumber,
    phoneNumber,
    termsAndConditions,
    descriptionTitle,
    departureTitle,
    arrivingTitle,
    ticketNumberTitle,
    priceTitle,
    termsAndConditionsTitle,
    phoneNumberTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>
          {descriptionTitle ? descriptionTitle : 'description'}
        </Title>
        <Value textColor={textColor}>{description}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {departureTitle ? departureTitle : 'departure'}
        </Title>
        <Value textColor={textColor}>{startDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {arrivingTitle ? arrivingTitle : 'arriving at'}
        </Title>
        <Value textColor={textColor}>{endDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {ticketNumberTitle ? ticketNumberTitle : 'ticket number'}
        </Title>
        <Value textColor={textColor}>{ticketNumber}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {priceTitle ? priceTitle : 'price'}
        </Title>
        <Value textColor={textColor}>{price}</Value>
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
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {phoneNumberTitle ? phoneNumberTitle : 'customer service number'}
        </Title>
        <Value textColor={textColor}>{phoneNumber}</Value>
      </Section>
    </Container>
  );
};

export default BoatCardDetails;
