const initialState = {
    user: {
        uid: null,
        name: null,
        email: null,
        phone: null
    }
};

const cloneState = (state) => JSON.parse(JSON.stringify(state));

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            const newState = cloneState(state);
            newState.user.uid = '123';
            newState.user.name = 'john';
            console.log("hello", newState);
            return newState;
        default:
            return state;
    }
}