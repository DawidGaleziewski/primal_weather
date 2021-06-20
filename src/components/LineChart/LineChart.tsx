/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';

// import voronoi from 'react-vis/dist/plot/voronoi';

import {
    XAxis,
    YAxis,
    HorizontalGridLines,
    FlexibleXYPlot,
    LineMarkSeries,
    DiscreteColorLegend
} from 'react-vis';

// Style
import lineChartStyle from './style/lineChartStyle';


type VisDataPoint = {
    x: number | string | Date,
    y: number | string | Date
}

type Tick = string

type LineChartProps = {
    dataset: VisDataPoint[];
    tickFormatY?: (tick: Tick) => Tick,
    tickFormatX?: (tick: Tick) => Tick
}

const LineChart = ({dataset, tickFormatY= (tick: Tick) => tick, tickFormatX= (tick: Tick) => tick}: LineChartProps)=> {
    return <div css={lineChartStyle}> 
    
        <FlexibleXYPlot>
        <HorizontalGridLines />
            <LineMarkSeries
                animation
                data={dataset}
                opacity={1}
                strokeStyle="solid"
                style={{height: '400px'}}
            />
            <XAxis tickTotal={4} tickFormat={tickFormatX}/>
            <YAxis tickFormat={tickFormatY} />
        </FlexibleXYPlot>
  </div>
}

export default LineChart;