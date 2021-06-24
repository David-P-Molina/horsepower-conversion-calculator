class ConversionApi {
    static url = `${baseUrl}/conversions`
    static fetchConversions() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => json.data.forEach(obj => {
            let object = obj.attributes
            Conversion.findOrCreateBy(object)
        }))
        // .catch(handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
    static submitConversionData(e) {
        const userId = User.findByUsername(usernameEntry.value).id
        const conversionData = {
            name: conversionNameEntry.value,
            user_id: userId,
            hp_quantity: horsePowerEntry.value,
            animal_conversion_quantity: animalConversionEntry.value
        }
        fetch(ConversionApi.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(conversionData)
          })
          .then(response => response.json())
        .then(json => {
            // with function that renders the added conversion
            debugger
        })
    }


}