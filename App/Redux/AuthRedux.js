const initialState = {
    user: {
        uid: null,
        name: null,
        email: null,
        phone: null
    },
    shouldShowSpinner: false
};

const cloneState = (state) => JSON.parse(JSON.stringify(state));

export const reducer = (state=initialState, action) => {
    let newState = cloneState(state);
    switch(action.type) {
        case 'LOGIN_INIT':
            newState = cloneState(state);
            newState.shouldShowSpinner = true;
            return newState;

        case 'LOGIN_SUCCESS':
            newState = cloneState(state);
            newState.user.uid = '123';
            newState.user.name = 'john';
            console.log("hello", newState);
            return newState;
        default:
            return state;
    }
}