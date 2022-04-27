import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
 

    // We're using spread operator on state and just dispatch from the component
    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext