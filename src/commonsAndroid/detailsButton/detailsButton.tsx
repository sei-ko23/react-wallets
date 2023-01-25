import React, { FC } from 'react';
//contants
import { Svgs } from '../../constants/images';
//styles
import {
  StyledDetailsButton,
  StyledDetailsButtonContainer
} from './detailsbuttons.styles';
//types
import { DetailsButtonProps } from './detailsButton.types';

const DetailsButton: FC<DetailsButtonProps> = (props) => {
  //props
  const { open, setOpen } = props;
  //functions
  const onClick = () => {
    setOpen(!open);
  };
  //render
  return (
    <StyledDetailsButtonContainer>
      <StyledDetailsButton type='button' showDetails={open} onClick={onClick}>
        <Svgs.ExpandArrowIcon />
        <span>details</span>
      </StyledDetailsButton>
    </StyledDetailsButtonContainer>
  );
};

export default DetailsButton;
