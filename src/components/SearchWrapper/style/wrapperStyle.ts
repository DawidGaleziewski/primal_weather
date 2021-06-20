/** @jsxRuntime classic */
/** @jsx jsx */
import { css, keyframes } from "@emotion/react";

const bgSlide = keyframes`
from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 0;
  }
`;
const wrapperStyle = css`
  padding: 5rem 0 3rem;
  background: url("https://rynekpierwotny.pl/static-rp/21a345d0eb96005b339eb740b9784e6d.jpg")
    0px 0px / cover repeat-x;
  animation: ${bgSlide} 1500s linear 0s 1 normal none running;
`;

export default wrapperStyle;
