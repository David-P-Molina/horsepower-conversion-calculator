class measurementApi {
    static url = `${baseUrl}/measurements`
    
    static fetchMeasurements() {
    fetch(MeasurementApi.url)
    .then(response => response.json())
    .then(json => {debugger})
    .catch(handleError)
    }

    static handleError(error) {
        console.log(error)
    }
}

