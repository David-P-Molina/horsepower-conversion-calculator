const baseUrl = "http://localhost:3000/"
const homeBtn = document.getElementById('home-btn')
const exampleConversions = document.getElementById('example0conversions')
const userCreatedConversions = document.getElementById('create-ur-own-conversions')
const sources = document.getElementById('sources')
const sidebar = document.getElementById('sidebar-comparison')
const hpInput = document.getElementById('horsepower-number-input')
const table = document.getElementsByTagName('table')

homeBtn.addEventListener('click', handleHomeBtn)
exampleConversions.addEventListener('click', handleExampleConversions)
userCreatedConversions.addEventListener('click', handleUserFormShow)
sources.addEventListener('click', handleSourceList)

function handleHomeBtn(e) {
    //
}
function handleExampleConversions(e) {
    //
}
function handleUserFormShow(e) {
    //
}
function handleSourceList(e) {
    //
}

// hpInput.addEventListener('input', updateAnimalPowerValue);
// let animals = []
// const updateAnimalPowerValue = (e) => {
//     animals.calculateHpValue = 1// event listener
// }

const calculateHpValue = (array) => {
    array.map // takes each animal object and multiply the input by the animals hp equivalent 
    // & sets table column value to that  
}