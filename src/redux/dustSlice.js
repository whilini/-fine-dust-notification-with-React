import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import dustData from '../constants/dustData.json';

const initialState = {
  darkmode: false,
  loading: false,
  getParameters: {
    serviceKey:
      '아까 위에서 일반 인증키 (Encoding) 이라고 되어있던 부분을 여기 입력해주세요.',
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
  async (getParameters) => {
    // const res = axios.get(
    //   'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    //   { params: getParameters },
    // );
    const res = dustData;
    return res.response.body;
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
      state.getParameters.sidoName = action.payload.sidoName;
    },
    addLiked: (state, action) => {
      const like = state.body.item.filter(
        (item) => item.stationName === action.payload.stationName,
      );
      state.liked = [...state.liked, like];
    },
    deleteLiked: (state, action) => {
      state.liked = state.liked.filter(
        (item) => item.stationName !== action.payload.stationName,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDust.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDust.fulfilled, (state, action) => {
      state.loading = false;
      state.body = action.payload;
    });
    builder.addCase(getDust.rejected, (state, action) => {
      state.loading = false;
      state.body = [];
      state.error = action.error.message;
    });
  },
});

export const { darkTheme, getDustRequest, getDustSuccess, getDustError } =
  dustSlice.actions;
