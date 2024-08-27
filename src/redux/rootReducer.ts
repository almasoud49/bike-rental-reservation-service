import { baseApi } from "./api/baseApi";
import bikeReducer from "./features/bike/bikeSlice"

export const rootReducer={
  [baseApi.reducerPath] : baseApi.reducer,
  bike:bikeReducer,
}