import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";
import playerReducer from "../reducers/playerReducer";
import favouriteSong from "../reducers/favouriteSong";

const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playerReducer,
    favourite: favouriteSong,
  },
});

export default store;
