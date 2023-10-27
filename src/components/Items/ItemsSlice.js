import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setPage } from '../App/AppSlice';
import axios from 'axios';

const API_URL = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,description,image_id`;
const API_SEARCH_URL = `https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_display,description,image_id`;



const getApiFilterUrl = ({ animal, title, page }) => {
  const query = {};
  if (title) {
    query["q"] = title;
  }
  if (animal) {
    query["query"] = {
      multi_match: {
        query: animal,
        fields: ["title"]
      }
    };
  }
  const params = encodeURIComponent(JSON.stringify(query));
  return `${API_SEARCH_URL}&params=${params}&limit=10&page=${page}`;
};

const initialState = {
  loading: false,
  apiEntries: {
    data: [],
    pagination: {},
  },
  error: "",
}

const fetchItems = createAsyncThunk("items/fetchItems", async ({ filter, search }, { dispatch }) => {
  const url = getApiFilterUrl({ animal: filter, title: search, page: 1 });
  const response = await axios.get(url);
  dispatch(setPage(1));
  return response?.data
});


const loadMoreItems = createAsyncThunk("items/loadMoreItems", async ({ filter, search, page }, { dispatch }) => {
  const url = getApiFilterUrl({ animal: filter, title: search, page: page + 1 });
  const response = await axios.get(url);
  dispatch(setPage(page + 1));
  return response?.data
});


export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchItems.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.apiEntries = action.payload;
    })
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.apiEntries = {
        data: [],
        pagination: {},
      };
      state.error = action.error.message;
    });
    builder.addCase(loadMoreItems.pending, state => {
      state.loading = true;
    });
    builder.addCase(loadMoreItems.fulfilled, (state, action) => {
      state.loading = false;
      state.apiEntries = action.payload;
    })
    builder.addCase(loadMoreItems.rejected, (state, action) => {
      state.loading = false;
      state.apiEntries = {
        data: [],
        pagination: {},
      };
      state.error = action.error.message;
    })
  }
})

export const getItemsApiEntries = (state) => state.items.apiEntries
export const getItemsError = (state) => state.items.error
export const getItemsLoading = (state) => state.items.loading

export { fetchItems, loadMoreItems as loadMore };

export default itemsSlice.reducer