import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type vkState = {
    id: string | null,
    ava?: string,
    name?: string,
    verified: boolean | null
}

const initialState: vkState = {
    id: null,
    verified: null
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
        }
    }
})

export const {
    setID,
    setVerified
} = vkSlice.actions

export default vkSlice.reducer