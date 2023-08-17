import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const { REACT_APP_API_ENDPOINT } = process.env;

const pages = "?page";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/character/${pages}=${page}`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.status = "succeeded";
      state.page += 1;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default charactersSlice.reducer;
