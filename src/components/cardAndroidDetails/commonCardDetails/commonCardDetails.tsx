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
import { Image } from './commonCardDetails.styles';
import { CommonCardDetailsProps } from './commonCardDetails.types';

const CommonCardDetails: FC<CommonCardDetailsProps> = (props) => {
  //props
  const {
    startDate,
    endDate,
    price,
    number,
    ticketImage,
    details,
    arrivingTitle,
    departureTitle,
    detailsTitle,
    numberTitle,
    priceTitle,
    googleMapsLink,
    phoneNumber,
    disableNotifications
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{departureTitle ? departureTitle : 'Departure'}</Title>
        <Value>{startDate}</Value>
      </Section>
      <Section>
        <Title>{arrivingTitle ? arrivingTitle : 'Arriving at'}</Title>
        <Value>{endDate}</Value>
      </Section>
      <Section>
        <Title>{priceTitle ? priceTitle : 'Price'}</Title>
        <Value>{price}</Value>
        <Image src={ticketImage} />
      </Section>
      <Section>
        <Title>{numberTitle ? numberTitle : 'Number'}</Title>
        <Value>{number}</Value>
      </Section>
      <Section>
        <Title>{detailsTitle ? detailsTitle : 'Details'}</Title>
        <Value>{details}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PositionIcon height='16px' width='16px' />
        <Link href={googleMapsLink}>{googleMapsLink}</Link>
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

export default CommonCardDetails;
