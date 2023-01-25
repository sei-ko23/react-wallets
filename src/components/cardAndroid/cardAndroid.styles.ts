import styled from 'styled-components';

export const CardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: min-content;
  min-height: fit-content;
  justify-content: center;
  border-radius: 26px;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const Card = styled('div')<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-height: fit-content;
  justify-content: center;
  background: #fff;
  border-radius: 26px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #f2ecec;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
  max-width: 345px;
  min-width: 345px;
`;
export const CardContent = styled('div')`
  padding: 14px 14px 0;
`;

export const DetailsContainer = styled('div')<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  height: ${({ open }) => (open ? 'auto' : '0')};
  width: 100%;
  box-sizing: border-box;
  padding: 0 14px;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ open }) =>
    open
      ? 'height 0.3s, opacity 0.5s cubic-bezier(0.4, 0, 1, 1);'
      : 'height 0.3s'};
  gap: 5px;
`;
