// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react';
// components../../commonsAndroid/footer/footer
import Footer from '../../commonsAndroid/footer/footer';
import Header from '../../commonsAndroid/header/header';
import CardTitle from '../../commonsAndroid/cardTitle/cardTitle';
import Infos from '../../commonsAndroid/infosContainer/infos';
import Access from '../../commonsAndroid/access/access';
import StoreCardDetails from '../cardAndroidDetails/storeCardDetails/storeCardDetails';
import DetailsButton from '../../commonsAndroid/detailsButton/detailsButton';
import EventCardDetails from '../cardAndroidDetails/eventCardDetails/eventCardDetails';
import CouponCardDetails from '../cardAndroidDetails/couponCardDetails/couponCardDetails';
import PlaneCardDetails from '../cardAndroidDetails/planeCardDetails/planeCardDetails';
import CinemaCardDetails from '../cardAndroidDetails/cinemaCardDetails/cinemaCardDetails';
import BoatCardDetails from '../cardAndroidDetails/boatCardDetails/boatCardDetails';
import RoomCardDetails from '../cardAndroidDetails/roomCardDetails/roomCardDetails';
import CommonCardDetails from '../cardAndroidDetails/commonCardDetails/commonCardDetails';
// styles
import {
  Card,
  CardContainer,
  CardContent,
  DetailsContainer
} from './cardAndroid.styles';
// types
import { CardAndroidProps } from './cardAndroid.types';
import { CardType } from '../index.types';

// Parameters may be declared in a variety of syntactic forms
// /**
//  * @param {string}  p1 - A string param.
//  * @param {string=} p2 - An optional param (Google Closure syntax)
//  * @param {string} [p3] - Another optional param (JSDoc syntax).
//  * @param {string} [p4="test"] - An optional param with a default value "test"
//  * @returns {string} This is the result
//  */
//  function stringsStringStrings(p1, p2, p3, p4) {
//   // TODO
// }

const CardAndroid: FC<CardAndroidProps> = (props) => {
  // props
  const {
    titleColor,
    headerLogoLink,
    title,
    accessImage,
    type,
    backgroundColor
  } = props;
  // state
  const [open, setOpen] = useState(false);
  // render
  // render infos section
  const renderInfos = () => {
    if (
      type === 'boat' ||
      type === 'bus' ||
      type === 'subway' ||
      type === 'train'
    ) {
      return (
        <Infos
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
          // @ts-ignore
          bottomLeftTitle={props.bottomLeftTitle}
          // @ts-ignore
          bottomLeftValue={props.bottomLeftValue}
        />
      );
    }
    if (type === 'event' || type === 'cinema') {
      return (
        <Infos
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
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
        />
      );
    }
    if (type === 'plane') {
      return (
        <Infos
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterTitle={props.topCenterTitle}
          // @ts-ignore
          topCenterValue={props.topCenterValue}
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
        />
      );
    }

    if (type === 'store') {
      return (
        <Infos
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
        />
      );
    }
    if (type === 'room') {
      return (
        <Infos
          // @ts-ignore
          topLeftTitle={props.topLeftTitle}
          // @ts-ignore
          topLeftValue={props.topLeftValue}
          // @ts-ignore
          topCenterTitle={props.topCenterTitle}
          // @ts-ignore
          topCenterValue={props.topCenterValue}
          // @ts-ignore
          topRightTitle={props.topRightTitle}
          // @ts-ignore
          topRightValue={props.topRightValue}
        />
      );
    }
    if (type === 'coupon') {
      return null;
    }
    return null;
  };

  // render access section
  const renderAccess = () => {
    return (
      <Access
        // @ts-ignore
        accessImage={accessImage}
        // @ts-ignore
        accessType={props.accessType}
        // @ts-ignore
        accessCodeId={props.accessCodeId}
        // @ts-ignore
        accessBorder={props.accessBorder}
      />
    );
  };
  // render footer section
  const renderCardTitle = () => {
    if (type === 'room' || type === 'event' || type === 'cinema') {
      return (
        <CardTitle
          // @ts-ignore
          mainTitle={props.mainTitle}
          // @ts-ignore
          secondaryTitle={props.secondaryTitle}
          type={type as CardType}
        />
      );
    }
    if (type === 'coupon' || type === 'store') {
      return (
        <CardTitle
          // @ts-ignore
          mainTitle={props.mainTitle}
          type={type as CardType}
        />
      );
    }
    if (
      type === 'boat' ||
      type === 'bus' ||
      type === 'subway' ||
      type === 'train' ||
      type === 'plane'
    ) {
      return (
        <CardTitle
          composedMainTitle={{
            // @ts-ignore
            from: props.composedMainTitle?.from,
            // @ts-ignore
            to: props.composedMainTitle?.to
          }}
          // @ts-ignore
          composedSecondaryTitle={{
            // @ts-ignore
            from: props.composedSecondaryTitle?.from,
            // @ts-ignore
            to: props.composedSecondaryTitle?.to
          }}
          type={type as CardType}
        />
      );
    }
    return null;
  };
  // render footer section
  const renderFooter = () => {
    if (
      type !== 'plane' &&
      type !== 'boat' &&
      type !== 'bus' &&
      type !== 'subway' &&
      type !== 'train'
    ) {
      // @ts-ignore
      return <Footer bannerImage={props.bannerImage} />;
    }
    return null;
  };
  // render card details
  const renderCardDetails = () => {
    if (type === 'store') {
      return (
        <StoreCardDetails
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          holderId={props.holderId}
          // @ts-ignore
          kind={props.kind}
          // @ts-ignore
          date={props.date}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          customTitle={props.customTitle}
          // @ts-ignore
          customValue={props.customValue}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          phoneNumberSecondary={props.phoneNumberSecondary}
          // @ts-ignore
          website={props.website}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
          // @ts-ignore
          addressTitle={props.addressTitle}
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
          // @ts-ignore
          holderIdTitle={props.holderIdTitle}
          // @ts-ignore
          holderNameTitle={props.holderNameTitle}
        />
      );
    }
    if (type === 'event') {
      return (
        <EventCardDetails
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          place={props.place}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          openTime={props.openTime}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          ticketNumber={props.ticketNumber}
          // @ts-ignore
          value={props.value}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          holderNameTitle={props.holderNameTitle}
          // @ts-ignore
          openTimeTitle={props.openTimeTitle}
          // @ts-ignore
          startDateTitle={props.startDateTitle}
          // @ts-ignore
          ticketNumberTitle={props.ticketNumberTitle}
          // @ts-ignore
          valueTitle={props.valueTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          email={props.email}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
        />
      );
    }
    if (type === 'cinema') {
      return (
        <CinemaCardDetails
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          place={props.place}
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
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          movieName={props.movieName}
          // @ts-ignore
          rating={props.rating}
          // @ts-ignore
          holderNameTitle={props.holderNameTitle}
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
          movieNameTitle={props.movieNameTitle}
          // @ts-ignore
          ratingTitle={props.ratingTitle}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          email={props.email}
        />
      );
    }
    if (type === 'coupon') {
      return (
        <CouponCardDetails
          // @ts-ignore
          expires={props.expires}
          // @ts-ignore
          from={props.from}
          // @ts-ignore
          walletImage={props.walletImage}
          // @ts-ignore
          promoCode={props.promoCode}
          // @ts-ignore
          description={props.description}
          // @ts-ignore
          value={props.value}
          // @ts-ignore
          couponId={props.couponId}
          // @ts-ignore
          expiresTitle={props.expiresTitle}
          // @ts-ignore
          fromTitle={props.fromTitle}
          // @ts-ignore
          promoCodeTitle={props.promoCodeTitle}
          // @ts-ignore
          descriptionTitle={props.descriptionTitle}
          // @ts-ignore
          valueTitle={props.valueTitle}
          // @ts-ignore
          couponIdTitle={props.couponIdTitle}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
        />
      );
    }
    if (type === 'boat') {
      return (
        <BoatCardDetails
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          price={props.price}
          // @ts-ignore
          number={props.number}
          // @ts-ignore
          ticketImage={props.ticketImage}
          // @ts-ignore
          details={props.details}
          // @ts-ignore
          arrivingTitle={props.arrivingTitle}
          // @ts-ignore
          departureTitle={props.departureTitle}
          // @ts-ignore
          numberTitle={props.numberTitle}
          // @ts-ignore
          priceTitle={props.numberTitle}
          // @ts-ignore
          detailsTitle={props.detailsTitle}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
        />
      );
    }
    if (type === 'bus' || type === 'subway' || type === 'train') {
      return (
        <CommonCardDetails
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          price={props.price}
          // @ts-ignore
          number={props.number}
          // @ts-ignore
          ticketImage={props.ticketImage}
          // @ts-ignore
          details={props.details}
          // @ts-ignore
          departureTitle={props.departureTitle}
          // @ts-ignore
          arrivingTitle={props.arrivingTitle}
          // @ts-ignore
          priceTitle={props.priceTitle}
          // @ts-ignore
          numberTitle={props.numberTitle}
          // @ts-ignore
          detailsTitle={props.detailsTitle}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
        />
      );
    }
    if (type === 'room') {
      return (
        <RoomCardDetails
          // @ts-ignore
          holderName={props.holderName}
          // @ts-ignore
          place={props.place}
          // @ts-ignore
          address={props.address}
          // @ts-ignore
          termsAndConditions={props.termsAndConditions}
          // @ts-ignore
          kind={props.kind}
          // @ts-ignore
          startDate={props.startDate}
          // @ts-ignore
          endDate={props.endDate}
          // @ts-ignore
          email={props.email}
          // @ts-ignore
          googleMapsLink={props.googleMapsLink}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
          // @ts-ignore
          checkInTitle={props.checkInTitle}
          // @ts-ignore
          checkOutTitle={props.checkOutTitle}
          // @ts-ignore
          holderNameTitle={props.holderNameTitle}
          // @ts-ignore
          kindTitle={props.kindTitle}
          // @ts-ignore
          termsAndConditionsTitle={props.termsAndConditionsTitle}
        />
      );
    }
    if (type === 'plane') {
      return (
        <PlaneCardDetails
          // @ts-ignore
          flightNumber={props.flightNumber}
          // @ts-ignore
          confirmationCode={props.confirmationCode}
          // @ts-ignore
          scheduledDepartureTime={props.scheduledDepartureTime}
          // @ts-ignore
          arrivalGate={props.arrivalGate}
          // @ts-ignore
          destinationTerminal={props.destinationTerminal}
          // @ts-ignore
          arrivalGateTitle={props.arrivalGateTitle}
          // @ts-ignore
          destinationTerminalTitle={props.destinationTerminalTitle}
          // @ts-ignore
          confirmationCodeTitle={props.confirmationCodeTitle}
          // @ts-ignore
          flightDetailsTitle={props.flightDetailsTitle}
          // @ts-ignore
          flightNumberTitle={props.flightDetailsTitle}
          // @ts-ignore
          scheduledDepartureTimeTitle={props.scheduledDepartureTimeTitle}
          // @ts-ignore
          ticketImage={props.ticketImage}
          // @ts-ignore
          details={props.details}
          // @ts-ignore
          phoneNumber={props.phoneNumber}
          // @ts-ignore
          disableNotifications={props.disableNotifications}
        />
      );
    } else return null;
  };
  return (
    <CardContainer>
      <Card backgroundColor={backgroundColor}>
        <Header
          titleColor={titleColor}
          headerLogoLink={headerLogoLink}
          title={title}
        />
        <CardContent>
          {renderCardTitle()}
          {renderInfos()}
          {renderAccess()}
        </CardContent>
        {renderFooter()}
      </Card>
      <DetailsButton open={open} setOpen={setOpen} />
      <DetailsContainer open={open}>{renderCardDetails()}</DetailsContainer>
    </CardContainer>
  );
};

export { CardAndroid };
