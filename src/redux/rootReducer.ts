import { baseApi } from "./api/baseApi";
import bikeReducer from "./features/bike/bikeSlice"
import themeReducer from "./features/theme/themeSlice"

export const rootReducer={
  [baseApi.reducerPath] : baseApi.reducer,
  bike:bikeReducer,
  theme:themeReducer
}