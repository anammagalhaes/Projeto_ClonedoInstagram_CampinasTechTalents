import { action } from "typesafe-actions";

import { PostEnumType, PostsType } from "./types";

export const getPosts = (payload: PostsType) => action(PostEnumType.GET_POST, payload)