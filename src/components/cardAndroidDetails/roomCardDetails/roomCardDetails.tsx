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
import { RoomCardDetailsProps } from './roomCardDetails.types';

const RoomCardDetails: FC<RoomCardDetailsProps> = (props) => {
  //props
  const {
    holderName,
    place,
    address,
    termsAndConditions,
    kind,
    startDate,
    endDate,
    googleMapsLink,
    phoneNumber,
    email,
    checkInTitle,
    checkOutTitle,
    holderNameTitle,
    termsAndConditionsTitle,
    kindTitle
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{holderNameTitle ? holderNameTitle : 'ticket holder'}</Title>
        <Value>{holderName}</Value>
      </Section>
      <Section>
        <Title>{place}</Title>
        <Value>{address}</Value>
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
        <Title>{kindTitle ? kindTitle : 'type'}</Title>
        <Value>{kind}</Value>
      </Section>
      <Section>
        <Title> {checkInTitle ? checkInTitle : 'check in'}</Title>
        <Value>{startDate}</Value>
      </Section>
      <Section>
        <Title> {checkOutTitle ? checkOutTitle : 'check out'}</Title>
        <Value>{endDate}</Value>
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

export default RoomCardDetails;
