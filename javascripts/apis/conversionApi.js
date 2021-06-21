class ConversionApi {
    static fetchConversions() {
        fetch('http://localhost:3000/conversions')
        .then(response => response.json())
        .then(json => renderConversions(json))
        .catch(handleError)
    }
    
    static handleError(error) {
        console.log(error)
    }
}