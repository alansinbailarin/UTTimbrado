import { createSlice } from "@reduxjs/toolkit";

export const catalogoSlice = createSlice({
  name: "catalogo",
  initialState: {},
  reducers: {
    setCatalogo: (state, action) => {
      state.alumn = action.payload;
    },
  },
});

export const { setCatalogo } = catalogoSlice.actions;

export default catalogoSlice.reducer;
