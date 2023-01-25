export type AccessProps = {
  accessType: AccessType;
  accessImage?: string;
  accessCodeId?: string;
  accessBorder?: boolean;
};

export type AccessType = 'QR' | 'CODE128' | 'PDF417' | 'AZTEC';

/**
 * @param {string} titleColor test for vscode
 */
export type HeaderProps = {
  titleColor?: string;
  title?: string;
  headerLogoLink: string;
  headerTitle?: string;
  mainTitle?: string;
};

export type FooterProps = {
  bannerImage: string;
};

export type CardType =
  | 'store'
  | 'event'
  | 'coupon'
  | 'plane'
  | 'boat'
  | 'bus'
  | 'subway'
  | 'train'
  | 'cinema'
  | 'room';
