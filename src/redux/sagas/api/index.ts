import axios from 'axios';


export function getWeather(query: string, days: number) {
    return axios.request({
        method: 'post',
        url:  `http://api.weatherapi.com/v1/forecast.json?key=adb70c0326af47ca874205610211506&q=${query}&days=${days}&aqi=no&alerts=no`
    });
}
