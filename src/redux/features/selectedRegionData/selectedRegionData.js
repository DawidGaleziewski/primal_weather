import { createSlice } from '@reduxjs/toolkit';
import { LOADING, REJECTED, SUCCESS } from '@Redux/networkStatus'

const initialState = {
    status: null,
    data: []
}

const selectedRegionDataSlice = createSlice({
    name: 'selectedRegionData',
    initialState,
    reducers: {
        fetchData(state, action){
            return {
                ...state,
                status: LOADING
            }
        },
        setData(state, action){
            const {payload: {data}} = action;
            return {
                ...state,
                status: SUCCESS,
                data
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

export const {
    fetchData,
    setData,
    fetchError
} = selectedRegionDataSlice.actions;

export default selectedRegionDataSlice.reducer;