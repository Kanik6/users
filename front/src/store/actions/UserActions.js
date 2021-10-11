import axios from "axios";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const fetchUsersSuccess = payload => ({type: FETCH_USERS_REQUEST, payload})
export const fetchUsers = () => {
    return async dispatch => {
        try {
            const usersResponse = await axios.get('https://crudcrud.com/api/c86d79e6e06b44949e8687409ece88d7/users');
            const usersArr = usersResponse.data;
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
            const singleUserResponse = await axios.get(`https://crudcrud.com/api/c86d79e6e06b44949e8687409ece88d7/users/${id}`);
            dispatch(fetchSingleUserSuccess(singleUserResponse.data));
        } catch (e) {

        }
    }
}

export const updateUser = (id, user, history) => {
    return async dispatch => {
        try {
            await axios.put(`https://crudcrud.com/api/c86d79e6e06b44949e8687409ece88d7/users/${id}`, user);
            history.push('/');
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
            await axios.delete(`https://crudcrud.com/api/c86d79e6e06b44949e8687409ece88d7/users/${id}`);
            // dispatch(deleteUserSuccess(id));
        } catch (e) {

        }
    }
}

export const createUser = (user, history) => {
    return async dispatch => {
        try {
            axios.post('https://crudcrud.com/api/c86d79e6e06b44949e8687409ece88d7/users', user);
        } catch (e) {

        }
    }
}