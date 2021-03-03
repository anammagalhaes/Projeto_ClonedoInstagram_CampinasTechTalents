import { action } from "typesafe-actions";
import { UserEnumType, UserType } from "./types";

export const getUser = (payload: UserType) => action(UserEnumType.GET_USER, payload)