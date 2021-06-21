class ConversionApi {
    static url = `${baseUrl}/conversions`

    static fetchConversions() {
        fetch(`${url}/conversions`)
        .then(response => response.json())
        .then(json => renderConversions(json))
    }
    
}