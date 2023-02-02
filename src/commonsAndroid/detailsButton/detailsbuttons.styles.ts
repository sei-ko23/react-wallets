import styled from 'styled-components';

export const StyledDetailsButtonContainer = styled('div')`
  .MuiButton-outlined {
    border: 2px solid #d0d0d0;
  }
`;

export const StyledDetailsButton = styled('button')<{
  showDetails: boolean;
}>`
  font-family: 'Product Sans light', sans-serif;
  margin: 0 auto;
  font-weight: 500;
  border-radius: 24px;
  width: 100%;
  margin: 15px 0 5px 0;
  text-transform: capitalize;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #f2ecec;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
  svg {
    width: 12px;
    height: 12px;
    transition: 0.4s;
    transform: ${(props) =>
      `${
        !props.showDetails ? 'rotate3d(0,0,1,1turn)' : 'rotate3d(1,0,0,0.5turn)'
      } rotate(-90deg)`};
    /* transform: rotate(-90deg); */
  }
`;
