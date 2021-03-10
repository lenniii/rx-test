import { Action } from "redux";
import { ActionsObservable, ofType } from "redux-observable";
import { from } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import wretchInstance from "../../wretchInstance";
import { postRequest, postSuccess } from "../slices";
import { PostModel } from "../types";

const getPosts = () => wretchInstance.url("posts").get().json<PostModel[]>();

export const postsEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(postRequest.type),
    switchMap(() =>
      from(getPosts()).pipe(map((response) => postSuccess(response)))
    )
  );
