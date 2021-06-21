class measurementApi {
    // static url = `${baseUrl}/measurements`
    
    static fetchMeasurements() {
    fetch('http://localhost:3000/measurements')
    .then(response => response.json())
    .then(json => {debugger})
    .catch(handleError)
    }

    static handleError(error) {
        console.log(error)
    }
}

