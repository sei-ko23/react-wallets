import styled from "styled-components";

export const HeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px 2px 12px;
`;

export const LogoContainer = styled("img")`
  display: flex;
  height: 40px;
  border: 1px solid none;
  border-radius: 50%;
  img {
    height: 32px;
    width: 32px;
    object-fit: contain;
  }
`;

export const LeftContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const RightContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled("h4")<{
  textColor: string | undefined;
}>`
  font-size: 1.1rem;
  font-weight: 450;
  color: ${({ textColor }) => textColor || "#000"};
  text-align: center;
`;

export const HeaderSubTitle = styled("h3")<{
  textColor?: string;
}>`
  color: ${({ textColor }) => textColor || "#000"};
  font-size: 0.6rem;
  font-weight: 650;
  margin: 0px;
  text-align: end;
`;

export const HeaderHeading = styled("h3")<{
  textColor?: string;
}>`
  color: ${({ textColor }) => textColor || "#000"};
  font-size: 1rem;
  font-weight: 400;
  margin: 0px;
  text-align: end;
`;
