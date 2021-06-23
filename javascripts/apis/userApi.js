class UserApi {
    static url = `${baseUrl}/users`

    static fetchUsers() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => {debugger})//new user and provide json
        .catch(handleError)
        }
    static submitUsername(e) {
        const userData = {}
        fetch(UserApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(Need to define user info here)
        })
        .then(response => response.json())
        .then(json => {
            //create a new user
            //remove the form from the page
            //show form for conversion creation
        })
    }
}