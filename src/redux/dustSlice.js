import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serviceKey = process.env.REACT_APP_API_KEY;
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const initialState = {
  darkmode: false,
  loading: false,
  getParameters: {
    serviceKey,
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: '전국',
    ver: '1.0',
  },
  body: {
    totalCount: 0,
    items: [],
  },
  liked: [],
  error: null,
};

// thunk
export const getDust = createAsyncThunk(
  'finedust/getDust',
  async (_, { getState, dispatch }) => {
    const state = getState().dustSlice;
    const params = state.getParameters;
    const { data } = await axios.get(
      `${PROXY}B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`,
      { params },
    );
    return data.response;
  },
);

// reducer
export const dustSlice = createSlice({
  name: 'finedust',
  initialState,
  reducers: {
    darkTheme: (state, action) => {
      state.darkmode = action.payload;
    },
    getSidoName: (state, action) => {
      state.getParameters.sidoName = action.payload;
    },
    addLiked: (state, action) => {
      state.liked = [...state.liked, action.payload];
    },
    deleteLiked: (state, action) => {
      state.liked = state.liked.filter(
        (item) => item.stationName !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDust.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDust.fulfilled, (state, action) => {
      state.loading = false;
      state.body = action.payload.body;
    });
    builder.addCase(getDust.rejected, (state, action) => {
      state.loading = false;
      state.body = [];
      state.error = action.header.resultMsg;
    });
  },
});

export const { darkTheme, getSidoName, addLiked, deleteLiked } =
  dustSlice.actions;
