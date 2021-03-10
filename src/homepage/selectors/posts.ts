import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectPostsReducer = (state: RootState) =>
  state.homepageReducers.postReducer;

export const selectPostsData = createSelector(
  selectPostsReducer,
  ({ data }) => data
);
export const selectPostsError = createSelector(
  selectPostsReducer,
  ({ error }) => error
);
export const selectPostsRequest = createSelector(
  selectPostsReducer,
  ({ loading, success }) => ({ loading, success })
);
