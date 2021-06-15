/** @jsxImportSource @emotion/react */
// import { jsx, css } from '@emotion/react'

import wrapperStyle from './style/wrapperStyle';

type SearchWrapperProps = {
    children?: JSX.Element | JSX.Element[];
}

const SearchWrapper = ({children}: SearchWrapperProps) => {
    return <section css={wrapperStyle}>

    </section>
}

export default SearchWrapper;