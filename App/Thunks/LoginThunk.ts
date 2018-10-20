import { loginWithGoogle } from '../Services/AuthService';

export const LoginThunk = () => {
    return (dispatch: any, getStore: any) => {
        loginWithGoogle();
        // First, dispatch action to respond to UI
        dispatch({
            type: 'SHOW_LOADER'
        });

        // invoke login process and dispatch another action in return
        // loginWithGoogle();
            // .then((authResult: any) => {
            //     console.log("@@Current user from thunk", authResult);
            //     // return dispatch({
            //     //     type: 'LOGIN_SUCCESS',
            //     //     data: authResult
            //     // });
            // });
    }
}