import React, { FC } from 'react';
import { Svgs } from '../../../constants/images';
//styles
import {
  Container,
  Row,
  Section,
  Title,
  Value
} from '../cardAndroidDetails.styles';
import { StoreCardDetailsProps } from './storeCardDetails.types';

const StoreCardDetails: FC<StoreCardDetailsProps> = (props) => {
  //props
  const {
    holderName,
    holderId,
    kind,
    date,
    address,
    customTitle,
    customValue,
    endDate,
    startDate,
    description,
    phoneNumber,
    phoneNumberSecondary,
    website,
    disableNotifications,
    addressTitle,
    holderIdTitle,
    holderNameTitle,
    kindTitle,
    offersTitle,
    phoneNumberSecondaryTitle,
    phoneNumberTitle,
    scheduleTitle
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{holderNameTitle ? holderNameTitle : 'ticket holder'}</Title>
        <Value>{holderName}</Value>
      </Section>
      <Section>
        <Title>{holderIdTitle ? holderIdTitle : 'Member ID'}</Title>
        <Value>{holderId}</Value>
      </Section>
      <Section>
        <Title>{kindTitle ? kindTitle : 'type'}</Title>
        <Value>{kind}</Value>
      </Section>
      <Section>
        <Title>Date</Title>
        <Value>{date}</Value>
      </Section>
      <Section>
        <Title> {addressTitle ? addressTitle : 'address'}</Title>
        <Value>{address}</Value>
      </Section>
      <Section>
        <Title>{customTitle}</Title>
        <Value>{customValue}</Value>
      </Section>
      <Section>
        <Title> {scheduleTitle ? scheduleTitle : 'schedule'}</Title>
        <Row>
          {startDate && <Value>{startDate}</Value>}
          {endDate && <Value>-</Value>}
          {endDate && <Value>{endDate}</Value>}
        </Row>
      </Section>
      <Section>
        <Title> {offersTitle ? offersTitle : 'offers'}</Title>
        <Value>{description}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PhoneIcon height='16px' width='16px' />
        <Title>
          {phoneNumberTitle ? phoneNumberTitle : 'Commercial phone'}
        </Title>
        <Value>{phoneNumber}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.PhoneIcon height='16px' width='16px' />
        <Title>
          {phoneNumberSecondaryTitle
            ? phoneNumberSecondaryTitle
            : 'After sale service'}
        </Title>
        <Value>{phoneNumberSecondary}</Value>
      </Section>
      <Section flexDirection='row' alignItems='center' gap='12px'>
        <Svgs.GlobeIcon height='16px' width='16px' />
        <Value>{website}</Value>
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

export default StoreCardDetails;
