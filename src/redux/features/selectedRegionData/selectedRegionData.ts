import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import { LOADING, REJECTED, SUCCESS } from '@Redux/networkStatus'

export type SliceState = {
    status: null | string;
    data: {
        location: {};
        current: {};
        forecast: object[]
    }
}

type ForecastApiData = {
    payload: {
        data: {
            current: object,
            forecast: {
                forecastday: object[]
            },
            location: object
        }
    }
}
const initialState: SliceState = {
    status: null,
    data: {
        location: {},
        current: [],
        forecast: []
    }
}

const selectedRegionDataSlice: any = createSlice({
    name: 'selectedRegionData',
    initialState,
    reducers: {
        fetchData(state, action){
            return {
                ...state,
                status: LOADING
            }
        },
        setData(state, action: ForecastApiData){
            console.log(action)
            const {payload: {data:{current, forecast: {forecastday}, location}}} = action;
            return {
                ...state,
                status: SUCCESS,
                data: {
                    forecast: forecastday,
                    location,
                    current
                }
            }
        },
        fetchError(state, action) {
            return {
                ...state,
                status: REJECTED
            };
        }
    },
})

// Selectors
export const selectTemperature = () => useSelector(state => state.state)

// Actions
export const {
    fetchData,
    setData,
    fetchError
} = selectedRegionDataSlice.actions;

export default selectedRegionDataSlice.reducer;