document.addEventListener("DOMContentLoaded", () => {
    startHpCounter();
    resetBtn.addEventListener('click', resetHpNumber)
    pauseBtn.addEventListener('click', pauseHpNumber)
    homeBtn.addEventListener('click', handleHomeBtn)
    exampleConversions.addEventListener('click', handleExampleConversions)
    userCreatedConversions.addEventListener('click', User.handleUserFormShow)
    sources.addEventListener('click', Measurement.handleSourceList)
})
//Main-Section Functionality

//Side-Bar Functionality
const isIncrementing = () => {
    return (pauseBtn.innerText === "Pause") ? true : false
}
const startHpCounter = () => {
    setInterval(addOneHp, 1500)
    setInterval(multiplyAnimalHpEquivalent,1500)
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

const multiplyAnimalHpEquivalent = () => {
    for (i = 0; i < animalRatioArray.length; i++) {
    hpEquivalentArray[i].innerText = (parseInt(hpCount.innerText) * parseFloat(animalRatioArray[i].innerText)).toFixed(2)
    }
}
