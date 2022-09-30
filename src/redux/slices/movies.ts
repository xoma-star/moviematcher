import {MoviesEntity} from "../../generated/graphql";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type movieState = {
    fetched: MoviesEntity[]
}

const defaultState: movieState = {
    fetched: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState: defaultState,
    reducers: {
        setFetched: (state, action: PayloadAction<MoviesEntity[]>) => {
            state.fetched = action.payload
        },
        pushFetched: (state, action: PayloadAction<MoviesEntity[]>) => {
            state.fetched = [...action.payload.filter(x => state.fetched.findIndex(v => v.id === x.id) < 0), ...state.fetched]
        },
        popFetched: (state) => {
            state.fetched = state.fetched.slice(0, state.fetched.length - 1)
        }
    }
})

export const {
    setFetched,
    pushFetched,
    popFetched
} = movieSlice.actions

export default movieSlice.reducer