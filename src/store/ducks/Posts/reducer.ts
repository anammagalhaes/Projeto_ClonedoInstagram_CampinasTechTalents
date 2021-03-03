import reducerUser from "../User/reducer";
import { PostsType, PostItemType, PostEnumType } from "./types";

const initialStatePosts: PostsType = {
    posts: []
}

function reducerPosts(state = initialStatePosts, action: any) {
    switch(action.type) {
        case PostEnumType.GET_POST:
            return{
                ...state,
                posts: action.payload
            }
        default :
            return state
    }
}

export default reducerPosts