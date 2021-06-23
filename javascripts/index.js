document.addEventListener("DOMContentLoaded", () => {
    startHpCounter();
    resetBtn.addEventListener('click', resetHpNumber)
    pauseBtn.addEventListener('click', pauseHpNumber)
    homeBtn.addEventListener('click', handleHomeBtn)
    exampleConversions.addEventListener('click', handleExampleConversions)
    userCreatedConversions.addEventListener('click', User.handleUserFormShow)
    sources.addEventListener('click', Measurement.handleSourceList)
})

const isIncrementing = () => {
    return (pauseBtn.innerText === "Pause") ? true : false
}
const startHpCounter = () => {
    setInterval(addOneHp, 1500)
}
const addOneHp = () => {
    if (isIncrementing()) {
        hpCount.innerText = parseInt(hpCount.innerText) + 1
    } 
}
const resetHpNumber = (e) => {
    hpCount.innerText = "0"
}
const pauseHpNumber = (e) => {
    pauseBtn.innerText = (pauseBtn.innerText === "Pause") ? "Resume" : "Pause"
}

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

