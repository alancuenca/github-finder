import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
 
    // Clear users from state
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    // Set Loading then we can call this function -> see line 18
    const setLoading = () => dispatch({ type: 'SET_LOADING' })
    // We're using spread operator on state and just dispatch from the component
    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            getUser,
            clearUsers,
            getUserRepos
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext