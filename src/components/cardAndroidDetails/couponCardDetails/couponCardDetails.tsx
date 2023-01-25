import React, { FC } from 'react';
import { Svgs } from '../../../constants/images';
//styles
import { Container, Section, Title, Value } from '../cardAndroidDetails.styles';
import { Image } from './couponCardDetails.styles';
import { CouponCardDetailsProps } from './couponCardDetails.types';

const CouponCardDetails: FC<CouponCardDetailsProps> = (props) => {
  //props
  const {
    expires,
    from,
    walletImage,
    promoCode,
    description,
    value,
    couponId,
    expiresTitle,
    fromTitle,
    promoCodeTitle,
    descriptionTitle,
    valueTitle,
    couponIdTitle,
    disableNotifications
  } = props;
  //render
  return (
    <Container>
      <Section>
        <Title>{expiresTitle ? expiresTitle : 'Expires'}</Title>
        <Value>{expires}</Value>
      </Section>
      <Section>
        <Title>{fromTitle ? fromTitle : 'From'}</Title>
        <Value>{from}</Value>
        <Image src={walletImage} />
      </Section>
      <Section>
        <Title>{promoCodeTitle ? promoCodeTitle : 'Promo code'}</Title>
        <Value>{promoCode}</Value>
      </Section>
      <Section>
        <Title>{descriptionTitle ? descriptionTitle : 'Description'}</Title>
        <Value>{description}</Value>
      </Section>
      <Section>
        <Title>{valueTitle ? valueTitle : 'Value'}</Title>
        <Value>{value}</Value>
      </Section>
      <Section>
        <Title>{couponIdTitle ? couponIdTitle : 'ID coupon'}</Title>
        <Value>{couponId}</Value>
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

export default CouponCardDetails;
