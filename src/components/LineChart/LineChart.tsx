/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';

// import voronoi from 'react-vis/dist/plot/voronoi';

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


type VisDataPoint = {
    x: number,
    y: number
}

type LineChartProps = {
    dataset: VisDataPoint[];
}

const LineChart = ({dataset}: LineChartProps)=> {
    return <div css={lineChartStyle}> 
        <FlexibleXYPlot>
        <HorizontalGridLines />
            <LineMarkSeries
            data={dataset}
            opacity={1}
            strokeStyle="solid"
            style={{height: '400px'}}
            />
            <XAxis />
            <YAxis />
        </FlexibleXYPlot>
  </div>
}

export default LineChart;