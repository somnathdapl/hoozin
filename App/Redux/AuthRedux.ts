// inteface for Authentication reducer
interface authState {
    user: {
        uid: string | null,
        name: string | null,
        email: string | null,
        phone: string | null
    }
}

// Initial state implements the interface
const initialState: authState = {
    user: {
        uid: null,
        name: null,
        email: null,
        phone: null
    }
};

// clone state make deep copies of the initial state object
const cloneState = (state: authState) => JSON.parse(JSON.stringify(state));

// authentication reducer
export const reducer = (state: authState = initialState, action: any) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            const newStateWithLoginSuccess = cloneState(state);
            newStateWithLoginSuccess.user.uid = '123';
            newStateWithLoginSuccess.user.name = 'john';
            return newStateWithLoginSuccess;
        default:
            return state;
    }
}