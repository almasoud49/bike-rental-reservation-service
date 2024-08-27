import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBikeInitialState } from "../../../types/bike.types";

type TBikeState= {
  selectedBike: TBikeInitialState | null ;
}

const initialState: TBikeState = {
  selectedBike: null,
};

const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    setSelectedBike: (state, action: PayloadAction<TBikeInitialState>) => {
      state.selectedBike = action.payload;
    },
    clearSelectedBike: (state) => {
      state.selectedBike = null;
    },
  },
});

export const { setSelectedBike, clearSelectedBike } = bikeSlice.actions;
export default bikeSlice.reducer;
