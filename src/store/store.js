import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { categoriesReducer } from "./slices/categoriesSlice/categoriesSlice"
import { priceCntrlReducer } from "./slices/priceCntrlSlice/priceCntrlSlice"
import { productsReduser } from "./slices/productsSlice/productsSlice"
import { searchReucer } from "./slices/searchSlice/searchSlice"
import { usersReduser } from "./slices/usersSlice/usersSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    products: productsReduser,
    users: usersReduser,
    categories: categoriesReducer,
    priceCntrl: priceCntrlReducer,
    search: searchReucer
})

const persistConfig = {
    key: 'ShopProject',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const persistor = persistStore(store)

export default store