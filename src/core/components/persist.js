// uses data from here
// https://stackoverflow.com/questions/52161128/react-redux-state-is-lost-at-page-refresh

/* 
    This is how data is stored across page refreshes
    We minimise refreshes on our end, but the user may do it themselves
    It only stores data for the session, nothing saved inbetween sessions
*/

const initialState = {
    // the initial state, this is what we load on app start
    
}

/**
 * This loads the state out of session storage on app reloads, or uses the initial state if it is first load
 */
const loadState = () => {
    // this will try and load the state out of session storage
    try {
        const serializedState = sessionStorage.getItem('state');
            // saved under item 'state'
        if(serializedState === null) {
            // returns the initial state if there is no state in storage (ie first load of session)
            return initialState;
        }
        // otherwise is parses the stored state and returns that
        return JSON.parse(serializedState);
    } catch (e) {
        // if there are any errors it returns the initial state
        return initialState
    }
};
  
/**
 * This saves the current state to session storage
 * 
 * @param {*} state - This is the current state to be saved to session storage
 */
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (e) {
    // Ignore write errors;
    // Probably need to put some code here
    }
};

export {saveState, loadState, initialState}