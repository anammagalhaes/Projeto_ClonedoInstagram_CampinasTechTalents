export enum PostEnumType {
    GET_POST = '@GET_POST',
    SET_POST = '@SET_POST'
}

export interface PostItemType {
    id: number
    user: string
    nickName: string
    userPicture: string
    postPicture: string
    description: string
    likes: number
}

export interface  PostsType {
    posts: PostItemType[]
}

export interface PostsState {
    posts: PostsType
}