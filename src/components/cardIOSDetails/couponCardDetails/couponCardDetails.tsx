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
import { CouponCardDetailsProps } from './couponCardDetails.types';

const CouponCardDetails: FC<CouponCardDetailsProps> = (props) => {
  const {
    description,
    promoCode,
    couponId,
    descriptionTitle,
    promoCodeTitle,
    couponIdTitle,
    titleColor,
    textColor
  } = props;
  return (
    <Container>
      <Section>
        <Title textColor={titleColor}>
          {descriptionTitle ? descriptionTitle : 'Description'}
        </Title>
        <Value textColor={textColor}>{description}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {promoCodeTitle ? promoCodeTitle : 'Promo Code'}
        </Title>
        <Value textColor={textColor}>{promoCode}</Value>
      </Section>
      <Divider />
      <Section>
        <Title textColor={titleColor}>
          {couponIdTitle ? couponIdTitle : 'Coupon ID'}
        </Title>
        <Value textColor={textColor}>{couponId}</Value>
      </Section>
    </Container>
  );
};

export default CouponCardDetails;
