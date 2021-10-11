import {
    DELETE_USER_REQUEST,
    FETCH_USERS_REQUEST,
    FETCH_SINGLE_USER_REQUEST,
    RESET_USER_TO_UPDATE
} from "../actions/UserActions";

const initialState = {
    users: [],
    userToUpdate: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {...state, users: action.payload}
        case FETCH_SINGLE_USER_REQUEST:
            return {...state, userToUpdate: action.payload}
        // case DELETE_USER_REQUEST:
        //     const usersCopy = [...state.users];
        //     const removeIndex = usersCopy.map(user => {
        //         return user.id;
        //     }).indexOf(action.payload);
        //     usersCopy.splice(removeIndex, 1)
        //     return {...state, users: usersCopy}
        case RESET_USER_TO_UPDATE:
            return {...state, userToUpdate: null}
        default:
            return  state;
    }
}

export default userReducer;