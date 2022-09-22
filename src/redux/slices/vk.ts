import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export type launchParamsType = {[key: string]: string}[]

type vkState = {
    id: string | null,
    ava?: string,
    name?: string,
    verified: boolean | null,
    launchParams: launchParamsType[]
}

const initialState: vkState = {
    id: null,
    verified: null,
    launchParams: []
}

const vkSlice = createSlice({
    name: 'vk',
    initialState,
    reducers: {
        setID: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        setVerified: (state, action: PayloadAction<boolean>) => {
            state.verified = action.payload
        },
        setLaunchParams: (state, action: PayloadAction<launchParamsType[]>) => {
            state.launchParams = action.payload
        }
    }
})

export const {
    setID,
    setVerified,
    setLaunchParams
} = vkSlice.actions

export default vkSlice.reducer