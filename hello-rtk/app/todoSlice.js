/*** mySlice.js ***/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncMethod = createAsyncThunk("action/id", async () => {
  // fetch and return data
  // will become action payload
});

export const mySlice = createSlice({
  name: "name",
  initialState: {
    status: "idle",
    // other states
  },
  reducers: {
    method: (state, action) => {
      // mutate state here
    },
    // other action methods
  },
  extraReducers: builder => {
    builder
      .addCase(asyncMethod.pending, state => {
        state.status = "pending";
      })
      .addCase(asyncMethod.fulfilled, (state, action) => {
        state.status = "idle";
        // mutate state here, use action payload
        // which is return value of asyncMethod
      })
      .addCase(asyncMethod.rejected, state => {
        state.status = "rejected";
      });
  },
});

export const { method } = mySlice.actions;
export default mySlice.reducer;

/*** store.js ***/
// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./mySlice";
//
// export const store = configureStore({
//   reducer: {
//     app: myReducer,
//   },
// });

/*** main.jsx */
// import { Provider } from "react-redux";
// import { store } from "./store";
//
// <Provider store={store}>
//  <YourApp />
// </Provider>