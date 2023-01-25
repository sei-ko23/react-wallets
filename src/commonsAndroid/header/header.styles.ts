import styled from 'styled-components';

export const HeaderContainer = styled('div')<{
  justifyContent?: string;
}>`
  padding: 14px 14px 12px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  position: relative;
  box-shadow: 0px -6px 10px 0px #000000;
`;

export const Title = styled('h4')<{
  textColor: string | undefined;
}>`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.textColor};
  letter-spacing: 2px;
  margin: 0;
`;

export const ImageContainer = styled('img')`
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2ecec;
  border-radius: 50%;
  img {
    height: 32px;
    width: 32px;
    object-fit: contain;
  }
`;
