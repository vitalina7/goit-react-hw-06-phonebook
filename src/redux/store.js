import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./ContactsSlice";
import { FilterReducer } from "./FilterSlice";


const contactsConfig = {
  key: 'contacts',
  storage,
}
export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsConfig, contactsReducer),
        filter: FilterReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);


 
