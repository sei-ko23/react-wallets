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
import { RoomCardDetailsProps } from './roomCardDetails.types';

const RoomCardDetails: FC<RoomCardDetailsProps> = (props) => {
  const {
    holderName,
    kind,
    address,
    startDate,
    endDate,
    ticketNumber,
    termsAndConditions,
    email,
    phoneNumber,
    checkInTitle,
    checkOutTitle,
    kindTitle,
    addressTitle,
    holderNameTitle,
    ticketNumberTitle,
    termsAndConditionsTitle,
    phoneNumberTitle,
    emailTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>
          {checkInTitle ? checkInTitle : 'check in'}
        </Title>
        <Value textColor={textColor}>{startDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {checkOutTitle ? checkOutTitle : 'check out'}
        </Title>
        <Value textColor={textColor}>{endDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>{kindTitle ? kindTitle : 'type'}</Title>
        <Value textColor={textColor}>{kind}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {addressTitle ? addressTitle : 'address'}
        </Title>
        <Value textColor={textColor}>{address}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {holderNameTitle ? holderNameTitle : 'ticket holder'}
        </Title>
        <Value textColor={textColor}>{holderName}</Value>
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
          {termsAndConditionsTitle
            ? termsAndConditionsTitle
            : 'Terms & Conditions'}
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
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {emailTitle ? emailTitle : 'Email'}
        </Title>
        <Value textColor={textColor}>{email}</Value>
      </Section>
    </Container>
  );
};

export default RoomCardDetails;
