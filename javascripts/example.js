dclass Example {
    static handleExampleBtn() {
        const animalButtons = document.getElementById('animal-conversion-options')
        mainDisplay.innerHTML = `
        <div id="animal-conversion-options">
        </div>
        <div id="example-conversion-options">
            <img src="images/apollo11.png" value="">
            <img src="images/fordmustang.png" value="">
            <img src="images/hondacivic.png" value="">
            <img src="images/tesla.png" value="">
        </div>`
    }
}