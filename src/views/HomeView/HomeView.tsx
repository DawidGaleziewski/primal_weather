/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import React from "react";

// SVGS
import HellpWeatherSvg from "@Assets/weather.svg";

// Styles
import { imgStyle } from "./style/style";

/**
 * View displayed on root path
 */
const HomeView = () => {
  return <img css={imgStyle} src={HellpWeatherSvg} alt={"Hello weather"} />;
};

export default HomeView;
