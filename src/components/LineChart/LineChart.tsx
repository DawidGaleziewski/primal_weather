/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';

import {
    XAxis,
    YAxis,
    HorizontalGridLines,
    Hint,
    FlexibleXYPlot,
    LineMarkSeries,
    Highlight,
    Borders
} from 'react-vis';

// Style
import lineChartStyle from './style/lineChartStyle';

const LineChart = ()=> {
    return <div css={lineChartStyle}> 
        <FlexibleXYPlot>
            <LineMarkSeries
            data={[
                {
                x: 0,
                y: 10
                },
                {
                x: 1,
                y: 10.626424306148245
                },
                {
                x: 2,
                y: 11.251132598502032
                },
                {
                x: 3,
                y: 11.472340041487
                },
                {
                x: 4,
                y: 12.541960721257741
                },
                {
                x: 5,
                y: 13.409388285083782
                },
                {
                x: 6,
                y: 13.696762913930264
                },
                {
                x: 7,
                y: 13.239849317030375
                },
                {
                x: 8,
                y: 12.384457222768686
                },
                {
                x: 9,
                y: 12.49806724177162
                },
                {
                x: 10,
                y: 12.257379694479067
                },
                {
                x: 11,
                y: 12.319980746257588
                },
                {
                x: 12,
                y: 12.142694244863474
                },
                {
                x: 13,
                y: 12.98216989305174
                },
                {
                x: 14,
                y: 13.090638699036544
                },
                {
                x: 15,
                y: 13.781725731512406
                },
                {
                x: 16,
                y: 13.28425754320654
                },
                {
                x: 17,
                y: 13.303996287691142
                },
                {
                x: 18,
                y: 13.482390529133545
                },
                {
                x: 19,
                y: 12.993141516627496
                },
                {
                x: 20,
                y: 12.997439070406923
                }
            ]}
            opacity={1}
            strokeStyle="solid"
            style={{height: '400px'}}
            />
        </FlexibleXYPlot>
  </div>
}

export default LineChart;