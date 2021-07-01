class UserApi {
    static url = `${baseUrl}/users`
    static submitUsername(e) {
        e.preventDefault();
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
            currentUser.displayUsername();
            Conversion.enableConversionForm();
            json.data.attributes.conversions.forEach(convert => {
                Conversion.displayUserConversion(convert);
            })
        })
        .catch(this.displayError)
    }
    static displayError(error) {
        errorDisplay.innerText = error
        errorDisplay.classList.remove("hide")
        setTimeout(() => {
            errorDisplay.innerText = ""
            errorDisplay.classList.add("hide")
        }, 3000)
    }
}