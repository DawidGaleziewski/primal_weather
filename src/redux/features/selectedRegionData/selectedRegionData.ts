import { createSlice } from "@reduxjs/toolkit";
import { LOADING, REJECTED, SUCCESS } from "@Redux/networkStatus";

export type SliceState = {
  status: null | string;
  data: {
    location: {};
    current: {};
    forecast: object[];
  };
};

type ForecastApiData = {
  payload: {
    data: {
      current: object;
      forecast: {
        forecastday: object[];
      };
      location: object;
    };
  };
};
const initialState: SliceState = {
  status: null,
  data: {
    location: {},
    current: [],
    forecast: [],
  },
};

/**
 * Redux feature holding data slice for selected region
 */
const selectedRegionDataSlice: any = createSlice({
  name: "selectedRegionData",
  initialState,
  reducers: {
    /**
     * redux action watched by saga when to start fetch worker
    */
    fetchData(state, action) {
      return {
        ...state,
        status: LOADING,
      };
    },
    /**
     * redux action setting data after successful fetch from api
    */
    setData(state, action: ForecastApiData) {
      const {
        payload: {
          data: {
            current,
            forecast: { forecastday },
            location,
          },
        },
      } = action;
      return {
        ...state,
        status: SUCCESS,
        data: {
          forecast: forecastday,
          location,
          current,
        },
      };
    },
    /**
     * redux action on error
    */
    fetchError(state, action) {
      return {
        ...state,
        status: REJECTED,
      };
    },
  },
});

// Actions
export const { fetchData, setData, fetchError } =
  selectedRegionDataSlice.actions;

export default selectedRegionDataSlice.reducer;
