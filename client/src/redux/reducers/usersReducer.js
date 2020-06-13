import {REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from "../actions/actionTypes";


const initialState = {
    currentUser: {},
    loading: false,
    error: null
};

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case REGISTER_USER_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                currentUser: action.payload.user,
                loading: false,
            };

        case REGISTER_USER_ERROR:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentUser: {}
            };

        case LOGIN_USER_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case LOGIN_USER_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                currentUser: action.payload.user,
                loading: false,
            };

        case LOGIN_USER_ERROR:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentUser: {}
            };


        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}






// export default function (state = initialState, action) {
//     switch (action.type) {
//         case ADD_CURRENT_USER: {
//             const user = action.payload;
//
//             return {
//                 ...state,
//                 currentUser: {user}
//             };
//         }
//         default:
//             return state;
//     }
// }