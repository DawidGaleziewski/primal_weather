import { createSlice } from "@reduxjs/toolkit";
import { LOADING, REJECTED, SUCCESS } from "@Redux/networkStatus";

export type SliceState = {
  status: null | string;
  data: {
    gdansk: object[];
  };
};

type RegionsToCompare = {
  payload: {
    data: object[];
  };
};
const initialState: SliceState = {
  status: null,
  data: {
    gdansk: [],
  },
};

/**
 * Redux feature holding hardcoded data with weather information used to be compared with user selected one
 */
const regionsToCompare: any = createSlice({
  name: "regionsToCompare",
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
    setData(state, action: RegionsToCompare) {
      const {
        payload: { data },
      } = action;
      return {
        ...state,
        status: SUCCESS,
        data: {
          gdansk: data,
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
export const { fetchData, setData, fetchError } = regionsToCompare.actions;

export default regionsToCompare.reducer;
