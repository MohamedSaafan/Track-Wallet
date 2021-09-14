import { createSlice } from "@reduxjs/toolkit";

interface State {
  home?: boolean;
  login?: boolean;
}
const initialState = {
  login: true,
};
const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {},
});

export default routerSlice.reducer;
