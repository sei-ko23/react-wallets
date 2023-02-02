import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px 8px 2px 8px;
`;

export const Section = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Row = styled('div')`
  display: flex;
  gap: 3px;
`;

export const Title = styled('h3')<{
  textTransform?: string;
  textColor?: string;
}>`
  color: ${({ textColor }) => textColor || '#000'};
  font-weight: 400;
  font-size: 0.72rem;
  letter-spacing: 0.025em;
  margin: 5px 0px;
  text-transform: ${({ textTransform }) => textTransform || 'uppercase'};
`;

export const Value = styled('h3')<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || '#000'};
  max-width: 350px;
  font-weight: 400;
  font-size: 0.92rem;
  margin: 3px 0px;
  word-break: break-all;
  overflow-wrap: break-word;
`;

export const Link = styled('a')`
  max-width: 350px;
  font-weight: 400;
  font-size: 0.92rem;
  margin: 3px 0px;
`;

export const Divider = styled('span')`
  border-bottom: 1px solid #eeedf1;
  margin: 2px 0px;
  width: 100%;
`;
