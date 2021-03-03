import { UserType, UserEnumType } from './types'

const initialStateUser: UserType = {
    name: "Joel Thomas Zimmerman",
    username: "DEADMAU5",
    userPicture: "https://pbs.twimg.com/profile_images/1296188634404737031/RUJOD0mL_400x400.jpg"
}

function reducerUser(state = initialStateUser, action: any) {
    switch(action.type) {
        case UserEnumType.GET_USER:
            return {
                name: action.payload.name,
                username: action.payload.username,
                userPicture: action.payload.userPicture,
            }
        default :
            return state
    }
}

export default reducerUser