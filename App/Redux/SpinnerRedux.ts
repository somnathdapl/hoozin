// inteface for Spinner reducer
interface loaderState {
    shouldShowSpinner: boolean 
}

// Initial state implements the interface
const initialState: loaderState = {
    shouldShowSpinner: false
};

// clone state make deep copies of the initial state object
const cloneState = (state: loaderState) => JSON.parse(JSON.stringify(state));

// spinner reducer
export const reducer = (state: loaderState = initialState, action: any) => {
    switch (action.type) {
        case 'SHOW_LOADER':
            const newStateWithSpinner: loaderState = cloneState(state);
            newStateWithSpinner.shouldShowSpinner = true;
            return newStateWithSpinner;
            
        case 'DISMISS_LOADER':
            const newStateWithNoSpinner: loaderState = cloneState(state);
            newStateWithNoSpinner.shouldShowSpinner = false;
            return newStateWithNoSpinner;
        default:
            return state;
    }
}