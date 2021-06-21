const baseUrl = "http://localhost:3000/"
const homeBtn = document.getElementById('home-btn')
const exampleConversions = document.getElementById('example0conversions')
const userCreatedConversions = document.getElementById('create-ur-own-conversions')
const sources = document.getElementById('sources')

homeBtn.addEventListener('click', handleHomeBtn)
exampleConversions.addEventListener('click', () => {})
userCreatedConversions.addEventListener('click', () => {})
sources.addEventListener('click', () => {})

function handleHomeBtn(e) {
    //
}
const sidebar = document.getElementsByClassName('sidebar-comparison')
const hpInput = document.getElementById('horsepower-number-input')
const table = document.getElementsByTagName('table')

hpInput.addEventListener('input', updateAnimalPowerValue);
let animals = []
const updateAnimalPowerValue = (e) => {
    animals.calculateHpValue = // eventlistener
}

const calculateHpValue = (array) => {
    array.map // takes each animal object and multiply the input by the animals hp equivalent 
    // & sets table column value to that  
}