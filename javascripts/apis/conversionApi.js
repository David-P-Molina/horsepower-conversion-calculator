class ConversionApi {
    static fetchConversions() {
        fetch('http://localhost:3000/conversions')
        .then(response => response.json())
        .then(json => json.data.forEach(conversionObj => Conversion.findOrCreateBy(conversionObj)))
        .catch(handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
}