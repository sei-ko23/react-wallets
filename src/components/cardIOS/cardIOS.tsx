import React, { FC, useState } from 'react';
//components
import Access from '../../commoniOS/access/access';
import Banner from '../../commoniOS/banner/banner';
import Header from '../../commoniOS/header/header';
import Information from '../../commoniOS/information/information';
import BoatCardDetails from '../cardIOSDetails/BoatCardDetails/boatCardDetails';
import CinemaCardDetails from '../cardIOSDetails/cinemaCardDetails/cinemaCardDetails';
import CommonCardDetails from '../cardIOSDetails/commonCardDetails/commonCardDetails';
import CouponCardDetails from '../cardIOSDetails/couponCardDetails/couponCardDetails';
import EventCardDetails from '../cardIOSDetails/eventCardDetails/eventCardDetails';
import PlaneCardDetails from '../cardIOSDetails/planeCardDetails/planeCardDetails';
import RoomCardDetails from '../cardIOSDetails/roomCardDetails/roomCardDetails';
import StoreCardDetails from '../cardIOSDetails/storeCardDetails/storeCardDetails';
//styles
import {
  Button,
  Card,
  Content,
  CardFrontRegular,
  CardFrontCoupon,
  CardFrontSemiCirlce,
  CardFrontDoubleCirlce,
  CardContainer,
  CardBackRegular,
  CardBackCoupon,
  CardBackSemiCircle,
  CardBackDoubleCircle,
  ContainerSemiCircle,
  ContainerLeftSemiCircle,
  ContainerRightFrontSemiCircle,
  ContainerRightBackSemiCircle,
  SemiCircle,
  SemiLeftCircle,
  SemiRightCircle
} from './cardIOS.styles';
//types
import { CardIOSProps, PositionType } from './cardIOS.types';
//constants
import { Svgs } from '../../constants/images';

const CardIOS: FC<CardIOSProps> = (props) => {
  //props
  const { backgroundColor, type } = props;
  // state
  const [flipped, setFlipped] = useState<boolean>(false);
  // functions
  const onClickFlip = () => {
    setFlipped(!flipped);
  };
  // render
  const renderButton = (position: PositionType) => {
    if (
      (position === 'front' && !flipped) ||
      (position === 'back' && flipped)
    ) {
      return (
        <Button onClick={onClickFlip}>
          <Svgs.MoreIcon color='#0000008a' />
        </Button>
      );
    }
    return null;
  };

  const renderSemiCircle = () => {
    return (
      <ContainerSemiCircle>
        <SemiCircle backgroundColor='#FFFFFF' />
      </ContainerSemiCircle>
    );
  };

  const renderSemiLeftCircle = () => {
    return (
      <ContainerLeftSemiCircle>
        <SemiLeftCircle backgroundColor='#FFFFFF' />
      </ContainerLeftSemiCircle>
    );
  };
  const renderSemiRightFrontCircle = () => {
    return (
      <ContainerRightFrontSemiCircle flipped={flipped} type={type}>
        <SemiRightCircle backgroundColor='#FFFFFF' />
      </ContainerRightFrontSemiCircle>
    );
  };
  const renderSemiRightBackCircle = () => {
    return (
      <ContainerRightBackSemiCircle flipped={flipped}>
        <SemiRightCircle backgroundColor='#FFFFFF' />
      </ContainerRightBackSemiCircle>
    );
  };

  const renderHeader = () => {
    if (type === 'store' || type === 'coupon' || type === 'plane') {
      return (
        <Header
          // @ts-ignore
          headerLogoLink={props.headerLogoLink}
          // @ts-ignore
          headerTitle={props.headerTitle}
          // @ts-ignore
          title={props.title}
          // @ts-ignore
          mainTitle={props.mainTitle}
          // @ts-ignore
          titleColor={props.titleColor}
        />
      );
    }
    if (type === 'event' || type === 'cinema' || type === 'room') {
      return (
        <Header
          // @ts-ignore
          headerLogoLink={props.headerLogoLink}
          // @ts-ignore
          headerTitle={props.headerTitle}
          // @ts-ignore
          titleColor={props.titleColor}
        />
      );
    }
    if (
      type === 'boat' ||
      type === 'bus' ||
      type === 'subway' ||
      type === 'train'
    ) {
      return (
        <Header
          // @ts-ignore
          headerLogoLink={props.headerLogoLink}
          // @ts-ignore
          title={props.title}
          // @ts-ignore
          mainTitle={props.mainTitle}
          // @ts-ignore
          titleColor={props.titleColor}
        />
      );
    } else return null;
  };

  const renderBanner = () => {
    if (
      type === 'store' ||
      type === 'event' ||
      type === 'coupon' ||
      type === 'room' ||
      type === 'cinema'
    ) {
      return (
        <Banner
          // @ts-ignore
          bannerImage={props.bannerImage}
        />
      );
    }
    return null;
  };

  const renderInformation = () => {
    if (type === 'store' || type === 'coupon') {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          bottomRightTitle={props.bottomRightTitle}
          // @ts-ignore
          bottomRightValue={props.bottomRightValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'event') {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterLeftTitle={props.topCenterLeftTitle}
          // @ts-ignore
          topCenterLeftValue={props.topCenterLeftValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          bottomRightTitle={props.bottomRightTitle}
          // @ts-ignore
          bottomRightValue={props.bottomRightValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'plane') {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          LeftTitle={props.LeftTitle}
          // @ts-ignore
          LeftValue={props.LeftValue}
          // @ts-ignore
          RightTitle={props.RightTitle}
          // @ts-ignore
          RightValue={props.RightValue}
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterLeftTitle={props.topCenterLeftTitle}
          // @ts-ignore
          topCenterLeftValue={props.topCenterLeftValue}
          // @ts-ignore
          topCenterRightTitle={props.topCenterRightTitle}
          // @ts-ignore
          topCenterRightValue={props.topCenterRightValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          bottomRightTitle={props.bottomRightTitle}
          // @ts-ignore
          bottomRightValue={props.bottomRightValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (
      type === 'boat' ||
      type === 'bus' ||
      type === 'subway' ||
      type === 'train'
    ) {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          LeftTitle={props.LeftTitle}
          // @ts-ignore
          LeftValue={props.LeftValue}
          // @ts-ignore
          RightTitle={props.RightTitle}
          // @ts-ignore
          RightValue={props.RightValue}
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterLeftTitle={props.topCenterLeftTitle}
          // @ts-ignore
          topCenterLeftValue={props.topCenterLeftValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'room') {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          bottomCenterTitle={props.bottomCenterTitle}
          // @ts-ignore
          bottomCenterValue={props.bottomCenterValue}
          // @ts-ignore
          bottomRightTitle={props.bottomRightTitle}
          // @ts-ignore
          bottomRightValue={props.bottomRightValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'cinema') {
      return (
        <Information
          // @ts-ignore
          type={props.type}
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterLeftTitle={props.topCenterLeftTitle}
          // @ts-ignore
          topCenterLeftValue={props.topCenterLeftValue}
          // @ts-ignore
          topCenterRightTitle={props.topCenterRightTitle}
          // @ts-ignore
          topCenterRightValue={props.topCenterRightValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
          // @ts-ignore
          bottomRightTitle={props.bottomRightTitle}
          // @ts-ignore
          bottomRightValue={props.bottomRightValue}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    } else return null;
  };

  const renderAccess = () => {
    if (type) {
      return (
        <Access
          // @ts-ignore
          accessImage={props.accessImage}
          // @ts-ignore
          accessType={props.accessType}
          // @ts-ignore
          accessCodeId={props.accessCodeId}
        />
      );
    } else return null;
  };

  const renderDetails = () => {
    if (type === 'store') {
      return (
        <StoreCardDetails
          // @ts-ignore
          customTitle={props.customTitle}
          // @ts-ignore
          customTitlePhone={props.customTitlePhone}
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          holderLastName={props.holderLastName}
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          kind={props.kind}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          schedule={props.schedule}
          // @ts-ignore
          accessCodeId={props.accessCodeId}
          // @ts-ignore
          offerId={props.offerId}
          // @ts-ignore
          couponId={props.couponId}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          phoneNumberSecondary={props.phoneNumberSecondary}
          // @ts-ignore
          website={props.website}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
          // @ts-ignore
          addressTitle={props.addressTitle}
          // @ts-ignore
          accessCodeIdTitle={props.accessCodeIdTitle}
          // @ts-ignore
          couponsTitle={props.couponsTitle}
          // @ts-ignore
          kindTitle={props.kindTitle}
          // @ts-ignore
          offersTitle={props.offersTitle}
          // @ts-ignore
          scheduleTitle={props.scheduleTitle}
          // @ts-ignore
          websiteTitle={props.websiteTitle}
          // @ts-ignore
          phoneNumberTitle={props.phoneNumberTitle}
          // @ts-ignore
          phoneNumberSecondaryTitle={props.phoneNumberSecondaryTitle}
        />
      );
    }
    if (type === 'event') {
      return (
        <EventCardDetails
          // @ts-ignore
          eventName={props.eventName}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          openTime={props.openTime}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          ticketNumber={props.ticketNumber}
          // @ts-ignore
          price={props.price}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          email={props.email}
          // @ts-ignore
          openTimeTitle={props.openTimeTitle}
          // @ts-ignore
          startDateTitle={props.startDateTitle}
          // @ts-ignore
          endDateTitle={props.endDateTitle}
          // @ts-ignore
          ticketNumberTitle={props.ticketNumberTitle}
          // @ts-ignore
          priceTitle={props.priceTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
          // @ts-ignore
          googleMapsLinkTitle={props.googleMapsLinkTitle}
          // @ts-ignore
          phoneNumberTitle={props.phoneNumberTitle}
          // @ts-ignore
          emailTitle={props.emailTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'coupon') {
      return (
        <CouponCardDetails
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          promoCode={props.promoCode}
          // @ts-ignore
          couponId={props.couponId}
          // @ts-ignore
          descriptionTitle={props.descriptionTitle}
          // @ts-ignore
          promoCodeTitle={props.promoCodeTitle}
          // @ts-ignore
          couponIdTitle={props.couponIdTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'plane') {
      return (
        <PlaneCardDetails
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          confirmationCode={props.confirmationCode}
          // @ts-ignore
          flightDetailsTitle={props.flightDetailsTitle}
          // @ts-ignore
          confirmationCodeTitle={props.confirmationCodeTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'boat') {
      return (
        <BoatCardDetails
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          ticketNumber={props.ticketNumber}
          // @ts-ignore
          price={props.price}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          descriptionTitle={props.descriptionTitle}
          // @ts-ignore
          departureTitle={props.departureTitle}
          // @ts-ignore
          arrivingTitle={props.arrivingTitle}
          // @ts-ignore
          ticketNumberTitle={props.ticketNumberTitle}
          // @ts-ignore
          priceTitle={props.priceTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
          // @ts-ignore
          phoneNumberTitle={props.phoneNumberTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'cinema') {
      return (
        <CinemaCardDetails
          // @ts-ignore
          movieName={props.movieName}
          // @ts-ignore
          rating={props.rating}
          // @ts-ignore
          customTitle={props.customTitle}
          // @ts-ignore
          openTime={props.openTime}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          ticketNumber={props.ticketNumber}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          email={props.email}
          // @ts-ignore
          movieNameTitle={props.movieNameTitle}
          // @ts-ignore
          ratingTitle={props.ratingTitle}
          // @ts-ignore
          openTimeTitle={props.openTimeTitle}
          // @ts-ignore
          startDateTitle={props.startDateTitle}
          // @ts-ignore
          endDateTitle={props.endDateTitle}
          // @ts-ignore
          ticketNumberTitle={props.ticketNumberTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
          // @ts-ignore
          phoneNumberTitle={props.phoneNumberTitle}
          // @ts-ignore
          emailTitle={props.emailTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'room') {
      return (
        <RoomCardDetails
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          kind={props.kind}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          ticketNumber={props.ticketNumber}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          email={props.email}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    }
    if (type === 'bus' || type === 'subway' || type === 'train') {
      return (
        <CommonCardDetails
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          descriptionTitle={props.descriptionTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
          // @ts-ignore
          titleColor={props.titleColor}
          // @ts-ignore
          textColor={props.textColor}
        />
      );
    } else return null;
  };

  const renderContent = () => {
    if (type === 'store') {
      return (
        <Content flipped={flipped}>
          <CardFrontRegular backgroundColor={backgroundColor}>
            {renderHeader()}
            {renderBanner()}
            {renderInformation()}
            {renderAccess()}
            {renderButton('front')}
          </CardFrontRegular>
          <CardBackRegular backgroundColor={backgroundColor} flipped={flipped}>
            {renderDetails()}
            {renderButton('back')}
          </CardBackRegular>
        </Content>
      );
    }
    if (type === 'coupon') {
      return (
        <Content flipped={flipped}>
          <CardFrontCoupon backgroundColor={backgroundColor}>
            {renderHeader()}
            {renderBanner()}
            {renderInformation()}
            {renderAccess()}
            {renderButton('front')}
          </CardFrontCoupon>
          <CardBackCoupon backgroundColor={backgroundColor} flipped={flipped}>
            {renderDetails()}
            {renderButton('back')}
          </CardBackCoupon>
        </Content>
      );
    }
    if (type === 'event' || type === 'cinema' || type === 'room') {
      return (
        <Content flipped={flipped}>
          {renderSemiCircle()}
          <CardFrontSemiCirlce backgroundColor={backgroundColor}>
            {renderHeader()}
            {renderBanner()}
            {renderInformation()}
            {renderAccess()}
            {renderButton('front')}
          </CardFrontSemiCirlce>
          <CardBackSemiCircle
            backgroundColor={backgroundColor}
            flipped={flipped}
          >
            {renderDetails()}
            {renderButton('back')}
          </CardBackSemiCircle>
        </Content>
      );
    }
    if (
      type === 'plane' ||
      type === 'boat' ||
      type === 'bus' ||
      type === 'subway' ||
      type === 'train'
    ) {
      return (
        <Content flipped={flipped}>
          {renderSemiLeftCircle()}
          {renderSemiRightFrontCircle()}
          {renderSemiRightBackCircle()}
          <CardFrontDoubleCirlce backgroundColor={backgroundColor}>
            {renderHeader()}
            {renderBanner()}
            {renderInformation()}
            {renderAccess()}
            {renderButton('front')}
          </CardFrontDoubleCirlce>
          <CardBackDoubleCircle
            backgroundColor={backgroundColor}
            flipped={flipped}
          >
            {renderDetails()}
            {renderButton('back')}
          </CardBackDoubleCircle>
        </Content>
      );
    } else return null;
  };
  return (
    <CardContainer>
      <Card>{renderContent()}</Card>
    </CardContainer>
  );
};

export { CardIOS };
