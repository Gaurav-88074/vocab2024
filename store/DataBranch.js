import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import vocabSlice from "./VocabCardSlice";
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })
const store = configureStore({
    reducer: {
        vocabReducer: vocabSlice.reducer,
        
    },
    middleware: customizedMiddleware,
});
export default store;
