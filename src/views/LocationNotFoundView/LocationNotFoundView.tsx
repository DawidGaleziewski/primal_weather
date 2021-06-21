/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import React from "react";

// SVGS
import ErrorSvg from "@Assets/404.svg";

// Styles
import { imgStyle } from "./style/style";


/**
 * View displayed when location for weather view was not found
 */
const LocationNotFoundView = () => {
  return <img css={imgStyle} src={ErrorSvg} alt={"Error location not found"} />;
};

export default LocationNotFoundView;
