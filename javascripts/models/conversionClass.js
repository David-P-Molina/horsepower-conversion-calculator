class Conversion {
    static all = [];

    constructor({animal_conversion_quantity, hp_quantity, id,name, user_id, username}) {
        this.animal_conversion_quantity = animal_conversion_quantity;
        this.hp_quantity = hp_quantity;
        this.id = id;
        this.name = name;
        this.user_id = user_id;
        this.username = username;
        Conversion.all.push(this);
        //renders any fetches pulled from db
    }
    static submitConversion(e) {
        e.preventDefault()
        const conversionData = {
            //data
        }
        fetch(ConversionApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(conversionData)
        })
        .then(response => response.json())
        .then(json => {debugger
        })
    }
    static getAll() {
        return this.all
    }
    static findById(id) {
        this.all.find(conversion => conversion.id === id) 
    }

    static findOrCreateBy(conversionObj) {
        this.findByName(conversionObj.name) || new Conversion(conversionObj)
    }
    static handleConversionForm() {
    const conversionForm =
    `<h3>New Conversion</h3>
        <form action="${Conversion.url}" method="POST">
            <label for="conversion name">Conversion Name:</label>
            <input type="text" name="name" id="conversion-name" class="conversion-inputs" disabled><br>
            <label for="horse-power-value">HP Amount:</label>
            <input type="number" name="hp" id="horse-power-entry" class="conversion-inputs" min="1" max="1000000000000" disabled>
            <label for="animal-power-value">Choose An Alternate Animal Power</label>
            <select name="measurements" id="measurements" class="conversion-inputs" disabled>
            <option value="disabled">--Animal Power--</option>
            <option value="oxpower">Ox-Power</option>
            <option value="mulepower">Mule-Power</option>
            <option value="squirrelpower">Squirrel-Power</option>
            <option value="duckpower">Duck-Power</option>
            <option value="manpower">Man-Power</option>
            <option value="lionpower">Lion-Power</option>
            <option value="donkeypower">Donkey-Power</option>
            </select>
            <label for="submit"><input id="conversion-submit-btn" class="conversion-inputs" type="submit" value="submit" disabled></label>
        </form>`
    newConversionForm.innerHTML = conversionForm
    }

    static enableConversionForm() {
        for (let i = 0; i < conversionInputs.length; i++) {
            // Runs 5 times, with values of step 0 through 4.
            conversionInputs[i].removeAttribute('disabled')
          }
    }
    static disableConversionForm() {
        for (let i = 0; i < conversionInputs.length; i++) {
            // Runs 5 times, with values of step 0 through 4.
            conversionInputs[i].setAttribute('disabled','disabled')
          }
    }

    static displayUserConversion(conversion) {
        const conversionRow = `
        <p><b>${conversion.name}</b> - HP: ${conversion.hp_quantity} / ${conversion.animal_conversion_quantity}</p>`
        userMadeConversionList.innerHTML += conversionRow
    }
    renderAll() {
        //will display and render this.(conversion) on the page.
        //append to mainDisplay div to display current conversion
    }

}
