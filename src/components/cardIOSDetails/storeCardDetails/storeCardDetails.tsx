import React, { FC } from 'react';
//styles
import {
  Container,
  Divider,
  Row,
  Section,
  Title,
  Value
} from '../cardIOSDetails.styles';
//types
import { StoreCardDetailsProps } from './storeCardDetails.types';

const StoreCardDetails: FC<StoreCardDetailsProps> = (props) => {
  const {
    customTitle,
    customTitlePhone,
    description,
    holderLastName,
    holderName,
    kind,
    address,
    schedule,
    accessCodeId,
    offerId,
    couponId,
    phoneNumber,
    phoneNumberSecondary,
    website,
    addressTitle,
    accessCodeIdTitle,
    couponsTitle,
    kindTitle,
    offersTitle,
    phoneNumberSecondaryTitle,
    phoneNumberTitle,
    scheduleTitle,
    websiteTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>{customTitle}</Title>
        <Value textColor={textColor}>{description}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>{holderName}</Title>
        <Value>{holderLastName}</Value>
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
          {scheduleTitle ? scheduleTitle : 'schedule'}
        </Title>
        <Value textColor={textColor}>{schedule}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {accessCodeIdTitle ? accessCodeIdTitle : 'barcode'}
        </Title>
        <Value textColor={textColor}>{accessCodeId}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {offersTitle ? offersTitle : 'offers'}
        </Title>
        <Value textColor={textColor}>{offerId}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {couponsTitle ? couponsTitle : 'coupons'}
        </Title>
        <Value textColor={textColor}>{couponId}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>{customTitlePhone}</Title>
        <Row>
          <Value textColor={textColor}>
            {phoneNumberTitle ? phoneNumberTitle : 'Commercial phone'}
          </Value>
          <Value textColor={textColor}>{phoneNumber}</Value>
        </Row>
        <Row>
          <Value textColor={textColor}>
            {phoneNumberSecondaryTitle
              ? phoneNumberSecondaryTitle
              : 'After sale service'}
          </Value>
          <Value textColor={textColor}>{phoneNumberSecondary}</Value>
        </Row>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {websiteTitle ? websiteTitle : 'website'}
        </Title>
        <Value textColor={textColor}>{website}</Value>
      </Section>
    </Container>
  );
};

export default StoreCardDetails;
