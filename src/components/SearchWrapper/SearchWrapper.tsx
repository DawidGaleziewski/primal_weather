/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import wrapperStyle from "./style/wrapperStyle";

// Layout
import UXContainer from "@Layout/UXContainer/UXContainer";

type SearchWrapperProps = {
  children?: JSX.Element | JSX.Element[];
};

const SearchWrapper = ({ children }: SearchWrapperProps) => {
  return (
    <section css={wrapperStyle}>
      <UXContainer>{children}</UXContainer>
    </section>
  );
};

export default SearchWrapper;
