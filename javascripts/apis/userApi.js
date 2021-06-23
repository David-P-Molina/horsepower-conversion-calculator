class UserApi {
    static url = `${baseUrl}/users`

    static fetchUsers() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => {debugger})//new user and provide json
        .catch(handleError)
        }
}