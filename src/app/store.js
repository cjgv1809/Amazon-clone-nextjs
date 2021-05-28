import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const basketPersistConfig = {
  key: "basket",
  storage,
};

const basketPersistedReducer = persistReducer(
  basketPersistConfig,
  basketReducer
);

export const store = configureStore({
  reducer: {
    basket: basketPersistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
