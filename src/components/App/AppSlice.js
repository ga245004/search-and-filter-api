import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    filter: "",
    search: ""
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    }
});

export const getAppPage = (state) => state.app.page;
export const getAppFilter = (state) => state.app.filter;
export const getAppSearch = (state) => state.app.search;

export const { setPage, setFilter, setSearch } = appSlice.actions;

export default appSlice.reducer;