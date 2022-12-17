import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface AuthState {
    user: string;
    access: string;
    refresh: string;
}

const authSlice = createSlice<AuthState, SliceCaseReducers<AuthState>, "auth">({
    name: "auth",
    initialState: { user: "", access: "", refresh: "" },
    reducers: {
        setCredentials: (state, action: PayloadAction<AuthState>) => {
            const { user, access, refresh } = action.payload;
            state.user = user;
            state.access = access;
            state.refresh = refresh;
        },
        
        logout: (state, action) => {
            state.user = "";
            state.access = "";
            state.refresh = "";
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;


const persistConfig = {
    key: "auth",
    storage
};


const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedReducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.access;