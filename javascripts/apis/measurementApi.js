class MeasurementApi {
    static url = `${baseUrl}/measurements`
    static fetchMeasurements() {
    fetch(this.url)
    .then(response => response.json())
    .then(json => json.data.forEach(obj => {
        Measurement.findOrCreateBy(obj.attributes)
        }))
    .catch(this.displayError)
    }
    static displayError(error) {
        errorDisplay.innerText = error
        errorDisplay.classList.remove("hide")
        setTimeout(() => {
            errorDisplay.innerText = ""
            errorDisplay.classList.add("hide")
        }, 3000)
    }
}