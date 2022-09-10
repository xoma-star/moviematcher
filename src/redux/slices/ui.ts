import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum UI_Panels{
    'WELCOME' = 'WELCOME',
    'HOME' = 'HOME',
    'MESSAGES' = 'MESSAGES'
}

type uiState = {
    activePanel: UI_Panels
}

const initialState: uiState = {
    activePanel: UI_Panels.WELCOME
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setPanel: (state, action: PayloadAction<UI_Panels>) => {
            state.activePanel = action.payload
        }
    }
})

export const {
    setPanel
} = uiSlice.actions

export default uiSlice.reducer