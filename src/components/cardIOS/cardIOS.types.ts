//types
import { AccessProps, HeaderProps, FooterProps } from "../index.types";
import { BoatCardDetailsProps } from "../cardIOSDetails/BoatCardDetails/boatCardDetails.types";
import { CinemaCardDetailsProps } from "../cardIOSDetails/cinemaCardDetails/cinemaCardDetails.types";
import { CommonCardDetailsProps } from "../cardIOSDetails/commonCardDetails/commonCardDetails.types";
import { CouponCardDetailsProps } from "../cardIOSDetails/couponCardDetails/couponCardDetails.types";
import { EventCardDetailsProps } from "../cardIOSDetails/eventCardDetails/eventCardDetails.types";
import { PlaneCardDetailsProps } from "../cardIOSDetails/planeCardDetails/planeCardDetails.types";
import { RoomCardDetailsProps } from "../cardIOSDetails/roomCardDetails/roomCardDetails.types";
import { StoreCardDetailsProps } from "../cardIOSDetails/storeCardDetails/storeCardDetails.types";
// Styles
export type ContentProps = {
  flipped: boolean;
};
export type CardFrontProps = {
  backgroundColor?: string;
};
export type CardBackProps = {
  flipped: boolean;
  backgroundColor?: string;
};
export type SemiCircleProps = {
  flipped?: boolean;
  backgroundColor?: string;
  type?: string;
};

export type PositionType = "front" | "back";

export type CardIOSProps = {
  backgroundColor?: string;
} & (
  | CardIosStore
  | CardIosEvent
  | CardIosCoupon
  | CardIosPlane
  | CardIosBoat
  | CardIosBus
  | CardIosSubway
  | CardIosTrain
  | CardIosCinema
  | CardIosRoom
);

export type CardIosStore = {
  type: "store";
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor: string;
} & HeaderProps &
  FooterProps &
  AccessProps &
  StoreCardDetailsProps;

export type CardIosEvent = {
  type: "event";
  headerLogoLink: string;
  headerTitle: string;
  titleColor?: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor?: string;
} & FooterProps &
  AccessProps &
  EventCardDetailsProps;

export type CardIosCoupon = {
  type: "coupon";
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor?: string;
} & HeaderProps &
  FooterProps &
  AccessProps &
  CouponCardDetailsProps;

export type CardIosPlane = {
  type: "plane";
  LeftTitle: string;
  LeftValue: string;
  RightTitle: string;
  RightValue: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topCenterRightTitle: string;
  topCenterRightValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor?: string;
} & HeaderProps &
  AccessProps &
  PlaneCardDetailsProps;

export type CardIosBoat = {
  type: "boat";
  headerLogoLink: string;
  title: string;
  titleColor?: string;
  mainTitle: string;
  LeftTitle: string;
  LeftValue: string;
  RightTitle: string;
  RightValue: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  textColor?: string;
} & AccessProps &
  BoatCardDetailsProps;

export type CardIosBus = {
  type: "bus";
  headerLogoLink: string;
  title: string;
  titleColor?: string;
  mainTitle: string;
  LeftTitle: string;
  LeftValue: string;
  RightTitle: string;
  RightValue: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  textColor?: string;
} & AccessProps &
  CommonCardDetailsProps;

export type CardIosSubway = {
  type: "subway";
  headerLogoLink: string;
  title: string;
  titleColor?: string;
  mainTitle: string;
  LeftTitle: string;
  LeftValue: string;
  RightTitle: string;
  RightValue: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  textColor?: string;
} & AccessProps &
  CommonCardDetailsProps;

export type CardIosTrain = {
  type: "train";
  headerLogoLink: string;
  title: string;
  titleColor?: string;
  mainTitle: string;
  LeftTitle: string;
  LeftValue: string;
  RightTitle: string;
  RightValue: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  textColor?: string;
} & AccessProps &
  CommonCardDetailsProps;

export type CardIosCinema = {
  type: "cinema";
  headerLogoLink: string;
  headerTitle: string;
  titleColor?: string;
  topLeftTitle: string;
  topLeftValue: string;
  topCenterLeftTitle: string;
  topCenterLeftValue: string;
  topCenterRightTitle: string;
  topCenterRightValue: string;
  topRightTitle: string;
  topRightValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor?: string;
} & AccessProps &
  FooterProps &
  CinemaCardDetailsProps;

export type CardIosRoom = {
  type: "room";
  headerLogoLink: string;
  headerTitle: string;
  titleColor?: string;
  topLeftTitle: string;
  topLeftValue: string;
  bottomLeftTitle: string;
  bottomLeftValue: string;
  bottomCenterTitle: string;
  bottomCenterValue: string;
  bottomRightTitle: string;
  bottomRightValue: string;
  textColor?: string;
} & AccessProps &
  FooterProps &
  RoomCardDetailsProps;
