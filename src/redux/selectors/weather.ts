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

export const selectForecastChartTemperatureData = (state:RootStateOrAny) => mutateToChartData(flattenDailyArray(forecatSelector(state)), 'temp_c');

export const selectForecastChartHumidityData = (state:RootStateOrAny) => mutateToChartData(flattenDailyArray(forecatSelector(state)), 'humidity')