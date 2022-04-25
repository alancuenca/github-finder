import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            })
        // END fetch

        const data = await response.json()

        //dispatch to githubReducer
        dispatch({
            type: 'GET_USERS',
            payload: data, //data we get from api
        })
    }
    // Set Loading then we can call this function -> see line 18
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            users: state.users, //line 15
            loading: state.loading,
            fetchUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext