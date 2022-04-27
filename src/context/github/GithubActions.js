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
export const getUser = async (login) => {

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

        return data
    }
}

// Get user repos
export const getUserRepos = async (login) => {

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

    return data
}

