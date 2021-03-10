import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import homepageReducers from "./homepage/slices";
import { postsEpic } from "./homepage/epics";

const epicMiddleware = createEpicMiddleware();
const rootReducer = { homepageReducers };
const rootEpic = combineEpics(postsEpic);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AsyncState<T> = {
  loading?: boolean;
  success?: boolean;
  data: T;
  error?: any; //! TODO farci na pensata
};
