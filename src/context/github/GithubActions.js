const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

   // Get search results
   export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
    // END fetch

    const { items } = await response.json()

    //return the data
    return items
}

   // Get search results & 'login' is the users' name on github
   const getUser = async (login) => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${login}`,
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

    // Get user repos
const getUserRepos = async (login) => {
    setLoading()
    // Get the top repos
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    // ?${params} added to accompany the top repos
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, 
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()

        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }

