import styled from "styled-components";

export const InformationWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0px;
  padding: 0px 8px;
`;

export const InformationsTitleWrapper = styled("div")`
  display: flex;
  padding: 10px 0px 0px 0px;
`;

export const InformationContainer = styled("div")<{
  textAlign?: "left" | "center" | "right";
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

export const InformationTitle = styled("h3")<{
  textColor?: string | undefined;
}>`
  color: ${({ textColor }) => textColor || "#000"};
  font-size: 0.7rem;
  font-weight: 650;
  margin: 0px;
  padding: 3px 0px;
  text-transform: uppercase;
`;
export const InformationValue = styled("h3")<{
  textColor?: string | undefined;
}>`
  color: ${({ textColor }) => textColor || "#000"};
  font-size: 1rem;
  font-weight: 400;
  margin: 0px;
  padding: 0px;
  white-space: nowrap;
`;

export const FromToTitle = styled("h3")`
  width: 100%;
  min-height: 11px;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0px;
  text-transform: uppercase;
  white-space: nowrap;
`;
export const FromToValue = styled("h3")<{
  textTransform?: "uppercase";
}>`
  font-size: 1.9rem;
  font-weight: 400;
  margin: 0px;
  color: rgb(0, 52, 69);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: ${({ textTransform }) => textTransform || "none"};
`;
