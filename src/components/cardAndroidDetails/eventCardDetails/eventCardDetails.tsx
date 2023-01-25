import React, { FC } from 'react';
import { Svgs } from '../../../constants/images';
//styles
import {
  Container,
  Link,
  Section,
  Title,
  Value
} from '../cardAndroidDetails.styles';
import { EventCardDetailsProps } from './eventCardDetails.types';

const EventCardDetails: FC<EventCardDetailsProps> = (props) => {
  //props
  const {
    holderName,
    place,
    address,
    openTime,
    startDate,
    ticketNumber,
    value,
    termsAndConditions,
    holderNameTitle,
    openTimeTitle,
    startDateTitle,
    ticketNumberTitle,
    valueTitle,
    termsAndConditionsTitle,
    googleMapsLink,
    phoneNumber,
    email,
    disableNotifications
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{holderNameTitle ? holderNameTitle : 'Ticket holder'}</Title>
        <Value>{holderName}</Value>
      </Section>
      <Section>
        <Title>{place}</Title>
        <Value>{address}</Value>
      </Section>
      <Section>
        <Title>{openTimeTitle ? openTimeTitle : 'Doors Open'}</Title>
        <Value>{openTime}</Value>
      </Section>
      <Section>
        <Title>{startDateTitle ? startDateTitle : 'Start date'}</Title>
        <Value>{startDate}</Value>
      </Section>
      <Section>
        <Title>{ticketNumberTitle ? ticketNumberTitle : 'Ticket number'}</Title>
        <Value>{ticketNumber}</Value>
      </Section>
      <Section>
        <Title>{valueTitle ? valueTitle : 'Value'}</Title>
        <Value>{value}</Value>
      </Section>
      <Section>
        <Title>
          {termsAndConditionsTitle
            ? termsAndConditionsTitle
            : 'Terms and conditions'}
        </Title>
        <Value>{termsAndConditions}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PositionIcon height='16px' width='16px' />
        <Link href={googleMapsLink}>{googleMapsLink}</Link>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PhoneIcon height='16px' width='16px' />
        <Value>{phoneNumber}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.EmailIcon height='16px' width='16px' />
        <Value>{email}</Value>
      </Section>
      {disableNotifications && (
        <Section flexDirection='row' alignItems='center' gap='12px'>
          <Svgs.GlobeIcon height='16px' width='16px' />
          <Value>{disableNotifications}</Value>
        </Section>
      )}
    </Container>
  );
};

export default EventCardDetails;
