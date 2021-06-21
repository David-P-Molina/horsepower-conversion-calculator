class UserApi {
    static url = `${baseUrl}/users`

    static fetchUsers() {
        fetch(UserApi.url)
        .then(response => response.json())
        .then(json => {debugger})//new user and provide json
        .catch(handleError)
        }
}