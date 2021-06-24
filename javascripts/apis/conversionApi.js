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
        const conversionData = {
            name: ,
            username: ,
            hp_quantity: ,
            animal_conversion_quantity:
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

        })
    }
    //create a fetch post call that submits a conversion to the db connected to conversionclass with function that renders the added conversion


}