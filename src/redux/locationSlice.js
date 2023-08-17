import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pages = "?page";

export const fetchAllLocations = createAsyncThunk(
  "locations/fetchAll",
  async (page) => {
    const res = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}/character/${pages}=${page}`
    );
    console.log(res.data);
    return res.data;
  }
);
export const locationSlice = createSlice({
  name: "locations",
  initialState: {
    items: [],
    status: "idle",
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLocations.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllLocations.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.status = "succeeded";
      state.page += 1;
    });
    builder.addCase(fetchAllLocations.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const locationSelector = (state) => state.locations.items;
export const statusSelector = (state) => state.locations.status;
export const errorSelector = (state) => state.locations.error;

export default locationSlice.reducer;
