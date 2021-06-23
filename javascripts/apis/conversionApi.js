class ConversionApi {
    static url = `${baseUrl}/conversions`
    static fetchConversions() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => json.data.forEach(conversionObj =>{
            const conversion = Conversion.findOrCreateBy(conversionObj)
            conversion.render()
        }))
        .catch(handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
    
}