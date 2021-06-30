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
        let animalPower = Measurement.findByName((submission[8].value +"-Power" ))
        let conversionQuantity = (parseFloat(submission[6].value) * parseFloat(animalPower.hp_equivalent)).toFixed(2)
        let userId = User.findByUsername(submission[9].value).id
        const conversionData = {
            name: submission[2].value,
            user_id: userId,
            hp_quantity: submission[6].value,
            animal_type: submission[8].value,
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