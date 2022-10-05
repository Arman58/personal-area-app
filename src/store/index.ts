import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./auth/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {contactsApi} from "./contactsApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, contactsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

