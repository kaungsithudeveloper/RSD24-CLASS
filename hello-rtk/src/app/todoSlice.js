/*** mySlice.js ***/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncMethod = createAsyncThunk("action/id", async () => {
  // fetch and return data
  // will become action payload
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
     item: [
        {_id: 1, subject: "Apple", done: false },
        {_id: 2, subject: "Mango", done: true },
        {_id: 3, subject: "Orange", done: false },
     ]
  },
  reducers: {
    add: (state, action) => {
      const _id = state.items[state.items.length - 1]._id + 1;
      state.items.push(
        {_id, subject: action.payload, done: false },
      )
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

export const { add } = todoSlice.actions;
export default todoSlice.reducer;

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