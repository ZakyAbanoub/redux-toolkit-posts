import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Abanoub" },
  { id: "1", name: "Antonio" },
  { id: "2", name: "Manuel" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
