class MeasurementApi {
    static url = `${baseUrl}/measurements`
    
    static fetchMeasurements() {
    fetch(MeasurementApi.url)
    .then(response => response.json())
    .then(json => renderMeasurements(json.data))
    .catch(handleError)
    }

    static handleError(error) {
        console.log(error)
    }
    static renderMeasurements(measurements) {
    const main = document.querySelector('main')
    measurements.forEach(measure => {
    const h2 = document.createElement('h2')
    h2.innerHTML = measure.name
    main.appendChild(h2)
  })
    }
}

