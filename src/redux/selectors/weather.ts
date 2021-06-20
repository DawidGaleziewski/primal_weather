import { RootStateOrAny } from "react-redux";

type TemperatureDatapoint = {
    time: string,
    chance_of_rain: string,
    cloud: number,
    condition: {
        icon: string,
        text: string
    },
    temp_c: number,
    humidity: number,
    wind_degree: number
}

export const forecatSelector = (state:RootStateOrAny)  => state.selectedRegionData.data.forecast

export const flattenDailyArray = (dailyArray: TemperatureDatapoint[]) => dailyArray.map((dailyDataset: any) => dailyDataset.hour).flat()

export const mutateToChartData = (datapoints: TemperatureDatapoint[], byValue: "chance_of_rain" | "temp_c" | "humidity") => datapoints.map(datapint => ({
    y: datapint[byValue],
    x: new Date(datapint.time)
}))

export const mutateToTableData = (datapointsA: TemperatureDatapoint[], datapointsB: TemperatureDatapoint[]) => datapointsA.map(({temp_c, time}) => {
    const comperableDatapoint = datapointsB.find(datapoint => datapoint.time === time);
    return {
        time,
        temp_c_city_a:  temp_c,
        temp_c_city_b:  comperableDatapoint ? comperableDatapoint.temp_c : null,
        temp_diff: comperableDatapoint ? (temp_c - comperableDatapoint.temp_c).toFixed(2) : null
    }
}) 


export const selectForecastChartTemperatureData = (state:RootStateOrAny) => mutateToChartData(flattenDailyArray(forecatSelector(state)), 'temp_c');

export const selectForecastChartHumidityData = (state:RootStateOrAny) => mutateToChartData(flattenDailyArray(forecatSelector(state)), 'humidity')

export const selectCompareTableData = (state:RootStateOrAny) => {
    const selectedRegion = flattenDailyArray(forecatSelector(state));
    const compareToRegion = flattenDailyArray(state.regionsToCompare.data.gdansk);
    return mutateToTableData(selectedRegion, compareToRegion)
} 

