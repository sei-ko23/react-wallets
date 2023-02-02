import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Section = styled('div')<{
  flexDirection?: 'row';
  alignItems?: 'center';
  gap?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  gap: ${({ gap }) => gap || '4px'};
`;
export const Row = styled('div')`
  display: flex;
  gap: 5px;
`;

export const Title = styled('p')`
  color: rgb(104, 103, 103);
  font-size: 14px;
  letter-spacing: 0.075em;
  line-height: 20px;
  text-transform: uppercase;
  margin: 0px;
`;

export const Value = styled('p')`
  font-size: 14px;
  letter-spacing: 0.075em;
  line-height: 20px;
  color: rgb(0, 0, 0);
  word-break: break-all;
  margin: 0px;
`;
export const Link = styled('a')`
  max-width: 350px;
  font-weight: 400;
  font-size: 0.92rem;
  margin: 3px 0px;
`;
