class ConversionApi {
    static url = `${baseUrl}/conversions`
    static fetchConversions() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => json.data.forEach(obj => {
            let object = obj.attributes
            Conversion.findOrCreateBy(object)
            //renderAll()
        }))
        // .catch(handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
    static submitConversionData(e) {
        e.preventDefault();
        let submission = e.target.children
        let animalPower = Measurement.findByName((submission[6].value +"-Power" ))
        let conversionQuantity = (parseFloat(submission[4].value) * parseFloat(animalPower.hp_equivalent)).toFixed(2)
        let userId = User.findByUsername(submission[7].value).id
        const conversionData = {
            name: submission[1].value,
            user_id: userId,
            animal_type: submission[6].value,
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
            Conversion.displayUserConversion(json);
            // with function that renders the added conversion
            //{id: 15, name: "Brooklyn Nets", hp_quantity: 9, animal_conversion_quantity: 2700, animal_type: "Duck", …}
        })
    }
}