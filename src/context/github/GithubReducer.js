const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, //spread what's already in the state then we update with... ->
                users: action.payload, //we're using 'payload' as convention but can also use .users i.e. 'action.users' in githubContext
                loading: false,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading:false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default githubReducer