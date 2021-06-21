class ConversionApi {
    static fetchConversions() {
        fetch('http://localhost:3000/conversions')
        .then(response => response.json())
        .then(json => {debugger}json.data.forEach(conversionObj => Conversion.findOrCreateBy(conversionObj)))
        .catch(this.handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
}