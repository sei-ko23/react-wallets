import React, { FC } from 'react';
//styles
import {
  Container,
  Divider,
  Link,
  Section,
  Title,
  Value
} from '../cardIOSDetails.styles';
//types
import { EventCardDetailsProps } from './eventCardDetails.types';

const EventCardDetails: FC<EventCardDetailsProps> = (props) => {
  const {
    eventName,
    address,
    openTime,
    startDate,
    endDate,
    ticketNumber,
    price,
    termsAndConditions,
    googleMapsLink,
    phoneNumber,
    email,
    titleColor,
    textColor,
    openTimeTitle,
    startDateTitle,
    endDateTitle,
    ticketNumberTitle,
    priceTitle,
    termsAndConditionsTitle,
    googleMapsLinkTitle,
    phoneNumberTitle,
    emailTitle
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>{eventName}</Title>
        <Value textColor={textColor}>{address}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {openTimeTitle ? openTimeTitle : 'doors open'}
        </Title>
        <Value textColor={textColor}>{openTime}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {startDateTitle ? startDateTitle : 'start date'}
        </Title>
        <Value textColor={textColor}>{startDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {endDateTitle ? endDateTitle : 'end date'}
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
          {priceTitle ? priceTitle : 'value'}
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
      <Section>
        <Link href={googleMapsLink}>
          <Title textColor={titleColor}>
            {googleMapsLinkTitle ? googleMapsLinkTitle : 'google maps link'}
          </Title>
        </Link>
      </Section>
      <Section>
        <Title textColor={titleColor}>
          {phoneNumberTitle ? phoneNumberTitle : 'customer service number'}
        </Title>
        <Value textColor={textColor}>{phoneNumber}</Value>
      </Section>
      <Section>
        <Title textColor={titleColor}>
          {emailTitle ? emailTitle : 'email'}
        </Title>
        <Value textColor={textColor}>{email}</Value>
      </Section>
    </Container>
  );
};

export default EventCardDetails;
