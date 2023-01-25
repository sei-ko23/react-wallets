//types
import { AccessProps, HeaderProps, FooterProps } from '../index.types';
import { BoatCardDetailsProps } from '../cardAndroidDetails/boatCardDetails/boatCardDetails.types';
import { CinemaCardDetailsProps } from '../cardAndroidDetails/cinemaCardDetails/cinemaCardDetails.types';
import { CouponCardDetailsProps } from '../cardAndroidDetails/couponCardDetails/couponCardDetails.types';
import { EventCardDetailsProps } from '../cardAndroidDetails/eventCardDetails/eventCardDetails.types';
import { PlaneCardDetailsProps } from '../cardAndroidDetails/planeCardDetails/planeCardDetails.types';
import { RoomCardDetailsProps } from '../cardAndroidDetails/roomCardDetails/roomCardDetails.types';
import { StoreCardDetailsProps } from '../cardAndroidDetails/storeCardDetails/storeCardDetails.types';
import { CommonCardDetailsProps } from '../cardAndroidDetails/commonCardDetails/commonCardDetails.types';

export type TitleProps =
  | {
      composedMainTitle: {
        from: string;
        to: string;
      };
      composedSecondaryTitle: {
        from: string;
        to: string;
      };
    }
  | {
      mainTitle: string;
      secondaryTitle?: string;
    };

export type CardAndroidProps =
  | CardAndroidStore
  | CardAndroidEvent
  | CardAndroidCinema
  | CardAndroidCoupon
  | CardAndroidPlane
  | CardAndroidBoat
  | CardAndroidBus
  | CardAndroidSubway
  | CardAndroidTrain
  | CardAndroidRoom;

/**
 * @param {string} type test for vscodes
 */
export type CardAndroidStore = {
  type: 'store';
  backgroundColor: string;
} & HeaderProps & {
    mainTitle: string;
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
  } & AccessProps &
  FooterProps &
  StoreCardDetailsProps;

export type CardAndroidEvent = {
  type: 'event';
  backgroundColor: string;
} & HeaderProps & {
    mainTitle: string;
    secondaryTitle: string;
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle: string;
    bottomLeftValue: string;
    bottomCenterTitle: string;
    bottomCenterValue: string;
    bottomRightTitle: string;
    bottomRightValue: string;
  } & AccessProps &
  FooterProps &
  EventCardDetailsProps;

export type CardAndroidCinema = {
  type: 'cinema';
  backgroundColor: string;
} & HeaderProps & {
    mainTitle: string;
    secondaryTitle: string;
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle: string;
    bottomLeftValue: string;
    bottomCenterTitle: string;
    bottomCenterValue: string;
    bottomRightTitle: string;
    bottomRightValue: string;
  } & AccessProps &
  FooterProps &
  CinemaCardDetailsProps;

export type CardAndroidCoupon = {
  type: 'coupon';
  backgroundColor: string;
} & HeaderProps & {
    mainTitle: string;
  } & AccessProps &
  FooterProps &
  CouponCardDetailsProps;

export type CardAndroidPlane = {
  type: 'plane';
  backgroundColor: string;
} & HeaderProps & {
    composedMainTitle: {
      from: string;
      to: string;
    };
    composedSecondaryTitle: {
      from: string;
      to: string;
    };
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topCenterTitle?: string;
    topCenterValue?: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle?: string;
    bottomLeftValue?: string;
    bottomRightTitle?: string;
    bottomRightValue?: string;
  } & AccessProps &
  PlaneCardDetailsProps;

//Boat------------------------------------------------
export type CardAndroidBoat = {
  type: 'boat';
  backgroundColor: string;
} & HeaderProps & {
    composedMainTitle: {
      from: string;
      to: string;
    };
    composedSecondaryTitle: {
      from: string;
      to: string;
    };
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle?: string;
    bottomLeftValue?: string;
  } & AccessProps &
  BoatCardDetailsProps;

//Bus----------------------------------------------
export type CardAndroidBus = {
  type: 'bus';
  backgroundColor: string;
} & HeaderProps & {
    composedMainTitle: {
      from: string;
      to: string;
    };
    composedSecondaryTitle: {
      from: string;
      to: string;
    };
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle?: string;
    bottomLeftValue?: string;
  } & AccessProps &
  CommonCardDetailsProps;

//Subway----------------------------------------------
export type CardAndroidSubway = {
  type: 'subway';
  backgroundColor: string;
} & HeaderProps & {
    composedMainTitle: {
      from: string;
      to: string;
    };
    composedSecondaryTitle: {
      from: string;
      to: string;
    };
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle?: string;
    bottomLeftValue?: string;
  } & AccessProps &
  CommonCardDetailsProps;

//Train----------------------------------------------
export type CardAndroidTrain = {
  type: 'train';
  backgroundColor: string;
} & HeaderProps & {
    composedMainTitle: {
      from: string;
      to: string;
    };
    composedSecondaryTitle: {
      from: string;
      to: string;
    };
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topRightTitle: string;
    topRightValue: string;
    bottomLeftTitle?: string;
    bottomLeftValue?: string;
  } & AccessProps &
  CommonCardDetailsProps;

export type CardAndroidRoom = {
  type: 'room';
  backgroundColor: string;
} & HeaderProps & {
    mainTitle: string;
    secondaryTitle: string;
  } & {
    topLeftTitle: string;
    topLeftValue: string;
    topCenterTitle: string;
    topCenterValue: string;
    topRightTitle: string;
    topRightValue: string;
  } & AccessProps &
  FooterProps &
  RoomCardDetailsProps;
