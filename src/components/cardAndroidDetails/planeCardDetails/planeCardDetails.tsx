import React, { FC } from 'react';
import { Svgs } from '../../../constants/images';
//styles
import { Container, Section, Title, Value } from '../cardAndroidDetails.styles';
import { Image } from './planeCardDetails.styles';
import { PlaneCardDetailsProps } from './planeCardDetails.types';

const PlaneCardDetails: FC<PlaneCardDetailsProps> = (props) => {
  //props
  const {
    flightNumber,
    confirmationCode,
    scheduledDepartureTime,
    arrivalGate,
    destinationTerminal,
    arrivalGateTitle,
    confirmationCodeTitle,
    destinationTerminalTitle,
    flightDetailsTitle,
    flightNumberTitle,
    scheduledDepartureTimeTitle,
    ticketImage,
    details,
    phoneNumber,
    disableNotifications
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{flightNumberTitle ? flightNumberTitle : 'Flight number'}</Title>
        <Value>{flightNumber}</Value>
      </Section>
      <Section>
        <Title>
          {confirmationCodeTitle ? confirmationCodeTitle : 'Confirmation code'}
        </Title>
        <Value>{confirmationCode}</Value>
      </Section>
      <Section>
        <Title>
          {scheduledDepartureTimeTitle
            ? scheduledDepartureTimeTitle
            : 'Scheduled departure time'}
        </Title>
        <Value>{scheduledDepartureTime}</Value>
      </Section>
      <Section>
        <Title>{arrivalGateTitle ? arrivalGateTitle : 'Arrival code'}</Title>
        <Value>{arrivalGate}</Value>
      </Section>
      <Section>
        <Title>
          {destinationTerminalTitle
            ? destinationTerminalTitle
            : 'Destination terminal'}
        </Title>
        <Value>{destinationTerminal}</Value>
        <Image src={ticketImage} />
      </Section>
      <Section>
        <Title>
          {flightDetailsTitle ? flightDetailsTitle : 'Flight details'}
        </Title>
        <Value>{details}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PhoneIcon height='16px' width='16px' />
        <Value>{phoneNumber}</Value>
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

export default PlaneCardDetails;
