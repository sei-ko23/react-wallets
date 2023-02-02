import styled from 'styled-components';

export const Container = styled('div')<{
  justifyContent?: string;
}>`
  padding: 0px 0px 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  box-sizing: border-box;
`;

export const Row = styled('div')<{
  gap?: number | string;
  alignItems?: string;
}>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || '4px'};
`;

export const SecondaryTitle = styled('h4')`
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  margin: 0;
`;

export const MainTitle = styled('h4')`
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  margin: 0;
`;
