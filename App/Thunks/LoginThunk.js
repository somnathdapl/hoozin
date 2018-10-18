export const LoginThunk = () => {
    return (dispatch, getStore) => {
        return dispatch({
            type: 'LOGIN'
        });
    }
}