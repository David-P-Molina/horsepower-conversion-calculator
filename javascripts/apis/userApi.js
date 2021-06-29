class UserApi {
    static url = `${baseUrl}users`

    // static fetchUsers() {
    //     fetch(this.url)
    //     .then(response => response.json())
    //     .then(json => {debugger})//new user and provide json
    //     .catch(handleError)
    //     }
    static submitUsername(e) {
        e.preventDefault()
        const userData = {
            username: e.target.children[1].value
        }
        fetch(UserApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(json => {
            let currentUser = User.findOrCreateBy(json.data.attributes)
            User.displayUsername(currentUser.username);
            Conversion.enableConversionForm();
            json.data.attributes.conversions.forEach(convert => {
                Conversion.displayUserConversion(convert); //conversion class static
            })
            //remove the form from the page and replace with welcome 
            //user and add name to conversion params
            //show form for conversion creation
        })
    }
    //create function that either welcomes a specific user or a generic welcome
}