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
    //create a fetch post call that submits a conversion to the db connected to conversionclass with function that renders the added conversion


}