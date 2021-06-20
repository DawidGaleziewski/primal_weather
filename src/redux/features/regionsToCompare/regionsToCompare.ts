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

const regionsToCompare: any = createSlice({
  name: "regionsToCompare",
  initialState,
  reducers: {
    fetchData(state, action) {
      return {
        ...state,
        status: LOADING,
      };
    },
    setData(state, action: RegionsToCompare) {
      console.log(action);
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
