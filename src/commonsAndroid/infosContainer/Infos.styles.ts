import styled from 'styled-components';

export const InfosContainer = styled('div')``;

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;

export const InfoContainer = styled('div')<{
  textAlign?: 'left' | 'center' | 'right';
}>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export const InfoTitle = styled('p')`
  font-size: 12px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
`;

export const InfoValue = styled('p')`
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin: 0px;
  font-weight: 500;
`;

export const Seperator = styled('div')`
  height: 1px;
  background-color: rgb(219, 219, 219);
  border-radius: 1px;
  width: 100%;
  margin: 14px 0px;
`;
