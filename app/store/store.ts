import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './slices';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['assessments'],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer as never);

const store = configureStore({
  reducer: pReducer,
  middleware: customizedMiddleware,
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
