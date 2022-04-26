import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text //text comes from line 18 then params line 25
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            })
        // END fetch

        const { items } = await response.json()

        //dispatch to githubReducer
        dispatch({
            type: 'GET_USERS',
            payload: items, //items we get from api https://api.github.com/search/users?q=searchedname
        })
    }

    // Get search results
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/search/users/${login}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                },
            })
        // if user page error
        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER', // this action is in reducer
                payload: data, // data is the single user return
            })
        }
    }
    // Clear users from state
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    // Set Loading then we can call this function -> see line 18
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            users: state.users, //line 15
            loading: state.loading,
            user: state.user,
            searchUsers,
            getUser,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext