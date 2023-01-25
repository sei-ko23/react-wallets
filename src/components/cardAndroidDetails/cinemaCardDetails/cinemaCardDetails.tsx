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
import { CinemaCardDetailsProps } from './cinemaCardDetails.types';

const CinemaCardDetails: FC<CinemaCardDetailsProps> = (props) => {
  //props
  const {
    holderName,
    place,
    address,
    openTime,
    startDate,
    endDate,
    ticketNumber,
    termsAndConditions,
    movieName,
    rating,
    holderNameTitle,
    movieNameTitle,
    ratingTitle,
    openTimeTitle,
    startDateTitle,
    endDateTitle,
    ticketNumberTitle,
    termsAndConditionsTitle,
    googleMapsLink,
    phoneNumber,
    email
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
        <Title> {openTimeTitle ? openTimeTitle : 'Doors Open'}</Title>
        <Value>{openTime}</Value>
      </Section>
      <Section>
        <Title> {startDateTitle ? startDateTitle : 'Start Date'}</Title>
        <Value>{startDate}</Value>
      </Section>
      <Section>
        <Title> {endDateTitle ? endDateTitle : 'End Date'}</Title>
        <Value>{endDate}</Value>
      </Section>
      <Section>
        <Title>{ticketNumberTitle ? ticketNumberTitle : 'Ticket Number'}</Title>
        <Value>{ticketNumber}</Value>
      </Section>
      <Section>
        <Title>
          {termsAndConditionsTitle
            ? termsAndConditionsTitle
            : 'Terms & Conditions'}
        </Title>
        <Value>{termsAndConditions}</Value>
      </Section>
      <Section>
        <Title> {movieNameTitle ? movieNameTitle : 'Movie Name'}</Title>
        <Value>{movieName}</Value>
      </Section>
      <Section>
        <Title> {ratingTitle ? ratingTitle : 'Rating'}</Title>
        <Value>{rating}</Value>
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
    </Container>
  );
};

export default CinemaCardDetails;
