import { CardType } from "../../components/index.types";

export type InformationProps = { type: CardType } & {
  LeftTitle?: string;
  LeftValue?: string;
  RightTitle?: string;
  RightValue?: string;
  topLeftTitle?: string;
  topLeftValue?: string;
  topCenterLeftTitle?: string;
  topCenterLeftValue?: string;
  topCenterRightTitle?: string;
  topCenterRightValue?: string;
  topRightTitle?: string;
  topRightValue?: string;
  bottomLeftTitle?: string;
  bottomLeftValue?: string;
  bottomCenterTitle?: string;
  bottomCenterValue?: string;
  bottomRightTitle?: string;
  bottomRightValue?: string;
  titleColor?: string;
  textColor?: string;
};
