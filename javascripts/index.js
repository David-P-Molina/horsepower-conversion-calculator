const mainDisplay = document.getElementById('main-display')
const baseUrl = "http://localhost:3000/"
const homeBtn = document.getElementById('home-btn')
const exampleConversions = document.getElementById('example-conversions')
const userCreatedConversions = document.getElementById('create-ur-own-conversions')
const sources = document.getElementById('sources')
const sidebar = document.getElementById('sidebar-comparison')
const table = document.getElementsByTagName('table')
const hpCount = document.getElementById('hp-number')

homeBtn.addEventListener('click', handleHomeBtn)
exampleConversions.addEventListener('click', handleExampleConversions)
userCreatedConversions.addEventListener('click', User.handleUserFormShow)
sources.addEventListener('click', Measurement.handleSourceList)

function handleHomeBtn(e) {
    //
    mainDisplay.innerHTML = "<h1>Thank You for using the Horse-Power Converter! </h1>"

    }
function handleExampleConversions(e) {
    //
    mainDisplay.innerHTML = ""
    Conversion.getAll().forEach(conv => conv.render())
}

// hpInput.addEventListener('input', updateAnimalPowerValue);
// let animals = []
// const updateAnimalPowerValue = (e) => {
//     animals.calculateHpValue = 1// event listener
// }

