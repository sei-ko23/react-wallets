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
import { CinemaCardDetailsProps } from './cinemaCardDetails.types';

const CinemaCardDetails: FC<CinemaCardDetailsProps> = (props) => {
  const {
    movieName,
    rating,
    customTitle,
    address,
    openTime,
    startDate,
    endDate,
    ticketNumber,
    termsAndConditions,
    email,
    phoneNumber,
    movieNameTitle,
    ratingTitle,
    openTimeTitle,
    startDateTitle,
    endDateTitle,
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
          {movieNameTitle ? movieNameTitle : 'Movie Name'}
        </Title>
        <Value textColor={textColor}>{movieName}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {ratingTitle ? ratingTitle : 'Rating'}
        </Title>
        <Value textColor={textColor}>{rating}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>{customTitle}</Title>
        <Value textColor={textColor}>{address}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {openTimeTitle ? openTimeTitle : 'Doors Open'}
        </Title>
        <Value textColor={textColor}>{openTime}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {startDateTitle ? startDateTitle : 'Start Date'}
        </Title>
        <Value textColor={textColor}>{startDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {endDateTitle ? endDateTitle : 'End Date'}
        </Title>
        <Value textColor={textColor}>{endDate}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {ticketNumberTitle ? ticketNumberTitle : 'Ticket Number'}
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

export default CinemaCardDetails;
