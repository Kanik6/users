import axios from "axios";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const fetchUsersSuccess = payload => ({type: FETCH_USERS_REQUEST, payload})
export const fetchUsers = () => {
    return async dispatch => {
        try {
            const usersResponse = await axios.get('https://testtt-6ac00-default-rtdb.firebaseio.com/users.json');
           
            const usersArr = Object.keys(usersResponse.data).map(user => (
                {...usersResponse.data[user], id: user}
            ));
            
            dispatch(fetchUsersSuccess(usersArr));
        } catch (e) {

        }
    }
}

export const FETCH_SINGLE_USER_REQUEST = 'FETCH_SINGLE_USER_REQUEST';
export const fetchSingleUserSuccess = payload => ({type:FETCH_SINGLE_USER_REQUEST, payload});
export const fetchSingleUser = (id) => {
    return async dispatch => {
        try {
            const singleUserResponse = await axios.get(`https://testtt-6ac00-default-rtdb.firebaseio.com/users/${id}.json`);
            dispatch(fetchSingleUserSuccess(singleUserResponse.data));
        } catch (e) {

        }
    }
}

export const updateUser = (id, user, history) => {
    return async dispatch => {
        try {
            await axios.put(`https://testtt-6ac00-default-rtdb.firebaseio.com/users/${id}.json`, user);
            history.push("/");
        } catch (e) {

        }
    }
}

export const RESET_USER_TO_UPDATE = 'RESET_USER_TO_UPDATE';
export const resetContactToUpdate = () => ({type: RESET_USER_TO_UPDATE});

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const deleteUserSuccess = payload => ({type: DELETE_USER_REQUEST, payload});
export const deleteUser = (id, history) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://testtt-6ac00-default-rtdb.firebaseio.com/users/${id}.json`);
            dispatch(deleteUserSuccess(id));
        } catch (e) {

        }
    }
}

export const createUser = (user, history) => {
    return async dispatch => {
        try {
            await axios.post('https://testtt-6ac00-default-rtdb.firebaseio.com/users.json', user);
            history.push("/");
        } catch (e) {

        }
    }
}