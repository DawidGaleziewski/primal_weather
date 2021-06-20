/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";

type UXContainerProps = {
  children?: JSX.Element | JSX.Element[];
};

const UXContainerStyle = css`
  max-width: 1600px;
  margin: 0 auto;
`;

/**
 * Component used to provide consistant max-width on the page
 */
const UXContainer = ({ children }: UXContainerProps) => {
  return <div css={UXContainerStyle}>{children}</div>;
};

export default UXContainer;
