import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  selectPostsData,
  selectPostsError,
  selectPostsRequest,
} from "../selectors";
import isEqual from "lodash/isEqual";
import { postRequest } from "../slices";
import { useCallback } from "react";

const usePosts = () => {
  const { loading = false, success = false } = useSelector(
    selectPostsRequest,
    shallowEqual
  );
  const posts = useSelector(selectPostsData, isEqual);
  const error = useSelector(selectPostsError, shallowEqual);
  const dispatch = useDispatch();
  const getPosts = useCallback(() => {
    dispatch(postRequest());
  }, [dispatch]);

  return { getPosts, loading, success, posts, error } as const;
};
export default usePosts;
