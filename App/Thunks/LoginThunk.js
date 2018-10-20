export const LoginThunk = () => {
    return (dispatch, getStore) => {
        // First, dispatch action to respond to UI
        dispatch({
            type: 'LOGIN_INIT'
        });
    }
}