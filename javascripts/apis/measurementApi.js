class MeasurementApi {
    static url = `${baseUrl}/measurements`
    static fetchMeasurements() {
    fetch(this.url)
    .then(response => response.json())
    .then(json => json.data.forEach(obj => {
        Measurement.findOrCreateBy(obj.attributes)
        }))
    // .catch(handleError)
    }
}