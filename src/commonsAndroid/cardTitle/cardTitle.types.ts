import { CardType } from '../../components/index.types';

export type TitleProps = { type: CardType } & {
  mainTitle?: string;
  secondaryTitle?: string;
  composedMainTitle?: {
    from?: string;
    to?: string;
  };
  composedSecondaryTitle?: {
    from?: string;
    to?: string;
  };
};
