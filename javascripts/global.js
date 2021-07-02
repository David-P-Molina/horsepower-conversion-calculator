//Main Display Variables
const mainDisplay = document.getElementById('main-display')
const mainConversions = document.getElementById('conversion-data')
const errorDisplay = document.querySelector("#error")
const baseUrl = "http://localhost:3000/"
const homeBtn = document.getElementById('home-btn')
const exampleConversions = document.getElementById('example-conversions')
const submittedConversions = document.getElementById('submitted-conversions')
const sources = document.getElementById('sources')

//Form Variables
const userFormDiv = document.getElementById('new-user')
const usernameEntry = document.getElementById('username')
const newConversionForm = document.getElementById('new-conversion')
const userCreatedConversions = document.getElementById('new-conversions')
const userMadeConversionList = document.getElementById('user-made-conversions')
const submitConversion = document.getElementById('conversion-submit-btn')
const conversionInputs = document.getElementsByClassName('conversion-inputs')

//Sidebar Variables
const sidebar = document.getElementById('sidebar-comparison')
const table = document.getElementsByTagName('table')
const hpCount = document.getElementById('hp-number')
const resetBtn = document.getElementById('reset-btn')
const pauseBtn = document.getElementById('pause-btn')
const animalRatioArray = document.getElementsByClassName('ratio-to-hp')
const hpEquivalentArray = document.getElementsByClassName('hp-equivalent')
const sourceLinkList = document.getElementsByClassName('source-link-list')