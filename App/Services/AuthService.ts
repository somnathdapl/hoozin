import firebase from "react-native-firebase";
import GoogleSignIn from 'react-native-google-sign-in';

export const loginWithGoogle = async () => {
    await GoogleSignIn.configure({
        // iOS
        clientID: '377447420217-dbhi0p1stcgfb1v8r6t988dp40i6esnc.apps.googleusercontent.com',
        // iOS, Android
        // https://developers.google.com/identity/protocols/googlescopes
        scopes: ['openid', 'email', 'profile'],

        // iOS, Android
        // Whether to request email and basic profile.
        // [Default: true]
        // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
        shouldFetchBasicProfile: true,
    });

    return await GoogleSignIn.signInPromise()
        .then((data: any) => {
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

            return firebase
                .auth()
                .signInAndRetrieveDataWithCredential(credential);
        })
        .then((currentUser: any) => {
            console.log('@@Current user', currentUser);
            return currentUser;
        })
        .catch((error: any) => {
            console.log(`Google login fail with error: ${error}`);
        });
}