import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import uiReducer from './slices/ui'
import vkReducer from './slices/vk'
import movieReducer from './slices/movies'

const store = configureStore({
    reducer: {
        ui: uiReducer,
        vk: vkReducer,
        movie: movieReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector