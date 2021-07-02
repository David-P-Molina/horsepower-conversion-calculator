class Conversion {
    static all = [];

    constructor({animal_conversion_quantity, animal_type, hp_quantity, id,name, user_id, username}) {
        this.animal_conversion_quantity = animal_conversion_quantity;
        this.animal_type = animal_type,
        this.hp_quantity = hp_quantity;
        this.id = id;
        this.name = name;
        this.user_id = user_id;
        this.username = username;
        Conversion.all.push(this);
    }
    static findById(id) {
        return this.all.find(conversion => conversion.id === id) 
    }
    static findByName(name) {
        return this.all.find(conversion => conversion.name === name) 
    }
    static findOrCreateBy(conversionObj) {
        this.findById(conversionObj.id) || new Conversion(conversionObj)
    }
    static handleConversionForm() {
        const conversionForm =
        `<h3>New Conversion</h3>
        <form id="conversion-submit-form">
            <label for="conversion name">Conversion Name:</label><br>
            <input type="text" name="name" id="conversion-name" class="conversion-inputs" disabled><br>
            <label for="horse-power-value">HP Amount:</label><br>
            <input type="number" name="hp" id="horse-power-entry" class="conversion-inputs" min="1" max="1000000000000" disabled> <br>
            <label for="animal-power-value">Choose An Alternate Animal Power</label>
            <select name="measurements" id="measurements" class="conversion-inputs" disabled>
            <option value="disabled">--Animal Power--</option>
            <option value="Ox">Ox-Power</option>
            <option value="Mule">Mule-Power</option>
            <option value="Squirrel">Squirrel-Power</option>
            <option value="Duck">Duck-Power</option>
            <option value="Man">Man-Power</option>
            <option value="Lion">Lion-Power</option>
            <option value="Donkey">Donkey-Power</option>
            </select>
            <input type="hidden" id="hidden-username-input"></input><br>
            <label for="submit"><input id="conversion-submit-btn" class="conversion-inputs" type="submit" value="submit" disabled></label>
        </form>`
        newConversionForm.innerHTML = conversionForm
        document.getElementById('conversion-submit-form').addEventListener('submit', ConversionApi.submitConversionData)
    }
    static enableConversionForm() {
        for (let i = 0; i < conversionInputs.length; i++) {
            conversionInputs[i].removeAttribute('disabled')
          }
    }
    static displayUserConversion(conversion) {
        const conversionRow = `
        <p><b>${conversion.name}</b> - <br><em>Horse-Power:</e,> ${conversion.hp_quantity} <br><em>${conversion.animal_type}-Power:</em>${conversion.animal_conversion_quantity}</p>`
        userMadeConversionList.innerHTML += conversionRow    
    }
    static renderAll() {
        const conversions = Conversion.all
        for (const element of conversions) {
            element.render()
        }
    }
    render() {
        const div = document.createElement('div')
        div.className = "conversion-section-item"
        const header = document.createElement('h3')
        const line = document.createElement("p")
        const allConversionsList = document.getElementById('all-conversions-list')
        header.innerHTML = `<em>${this.name}</em> created by ${this.username}`
        line.innerHTML = `Horse-Power: ${this.hp_quantity} = ${this.animal_type}-Power: ${this.animal_conversion_quantity}` 
        div.appendChild(header)
        div.appendChild(line)
        allConversionsList.appendChild(div)
    }
}