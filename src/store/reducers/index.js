// import { createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//   name: "main",
//   initialState: {
//     loading: false,
//     loadingOpacity: false,
//   },
//   reducers: {
//     loadingShow: (state, action) => {
//       state.loading = true;
//       state.loadingOpacity = action.payload.opacity || false;
//     },
//     loadingDismiss: (state, action) => {
//       state.loading = false;
//       state.loadingOpacity = false;
//     },
//   },
// });

// const { loadingShow, loadingDismiss } = slice.actions;

// export const loading =
//   (isLoading, opacity = false) =>
//   (dispatch) => {
//     if (isLoading) {
//       dispatch(
//         loadingShow({
//           opacity,
//         })
//       );
//     } else {
//       dispatch(loadingDismiss());
//     }
//   };

// export default slice.reducer;
const initialState = {
  loading: false,
  access_token: null,
};

const reducer = (state = initialState, action) => {
  // console.log("reducer trigger...", action);
  switch (action.type) {
    case "LOGIN_SEND":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, access_token: action.payload };
    case "NEWS_RECEIVED":
      return { ...state, news: action.json[0], loading: false };
    default:
      return state;
  }
};
export default reducer;
