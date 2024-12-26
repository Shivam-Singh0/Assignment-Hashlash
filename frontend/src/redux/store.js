import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { UniAPi } from './Apis/UniApi';
import { FavsApi } from './Apis/FavApi';



const store = configureStore({
  reducer: {
    [UniAPi.reducerPath] : UniAPi.reducer,
    [FavsApi.reducerPath] : FavsApi.reducer
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UniAPi.middleware, FavsApi.middleware),
    devTools: true
})

setupListeners(store.dispatch);


export default store