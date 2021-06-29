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
        e.preventDefault();
        let submission = e.target.children
        let animalPower = Measurement.findByName(submission[6].value)
        let conversionQuantity = parseInt(submission[4].value) * parseInt(animalPower.hp_equivalent)
        const userId = User.findByUsername(submission[7].value).id
        const conversionData = {
            name: submission[1].value,
            user_id: userId,
            animal_type: ,
            hp_quantity: submission[4].value,
            animal_conversion_quantity: conversionQuantity
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