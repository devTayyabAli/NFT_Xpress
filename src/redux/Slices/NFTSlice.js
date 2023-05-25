import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SingleNFT: {},
  userDetail:{},
  count:1
};

export const NFTSlice = createSlice({
  name: "SingleNFT",
  initialState,
  reducers: {
    SetSingleNFT: (state, action) => {

      state.SingleNFT = action.payload;

    },
    userDetailed: (state, action) => {

      state.userDetail = action.payload;
    },
    setValue:(state,action)=>{
      console.log("Counter",action);
      state.count = action.payload;


    }
  },
});

export const { SetSingleNFT,userDetailed,setValue } = NFTSlice.actions;

export default NFTSlice.reducer;
