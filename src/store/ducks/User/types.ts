export enum UserEnumType {
    GET_USER = '@GET_USER',
}

export interface UserType {
    name: string
    username: string
    userPicture: string
}

export interface UserState {
    user: UserType
}