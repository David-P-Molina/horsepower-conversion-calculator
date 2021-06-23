class MeasurementApi {
    static url = `${baseUrl}/measurements`
    
    static fetchMeasurements() {
    fetch(this.url)
    .then(response => response.json())
    .then(json => json.data.forEach(obj => {
        MeasurementApi.findOrCreateBy(obj.attributes)
    }))
    .catch(handleError)
    }

    static handleError(error) {
        console.log(error)
    }
    }


