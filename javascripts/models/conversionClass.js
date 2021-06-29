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

    static getAll() {
        return this.all
    }

    static findByName(name) {
        this.all.find(conversion => conversion.name === name) 
    }
    static findById(id) {
        this.all.find(conversion => conversion.id === id) 
    }

    static findOrCreateBy(conversionObj) {
        this.findByName(conversionObj.name) || new Conversion(conversionObj)
    }
    static handleConversionForm() {
    const conversionForm =
    `<fieldset disabled="disabled">
        <h1>New Conversion</h1>
        <form action="${Conversion.url}" method="POST">
            <label for="username">UserName</label>
            <label for="conversion name">Conversion Name:</label>
            <input type="text" name="name" id="conversion-name"><br>
            <label for="horse-power-value">HP Amount:</label>
            <input type="number" name="hp" id="horse-power-entry" min="1" max="1000000000000">
            <label for="animal-power-value">Alternate Animal Power</label>
            <label for="cars">Choose a car:</label>
            <select name="measurements" id="measurements">
            <option value=""></option>
            </select>
            <label for="submit"><input type="submit" value="submit"></label>
        </form>
    </fieldset>`
    newConversionForm.innerHTML = conversionForm
    }
    static displayUserConversion() {
        userMadeConversionList.innerHTML = ``
    }
    render() {
        //will display and render this.(conversion) on the page.
        //append to mainDisplay div to display current conversion
    }
        //checks to see if a current user is available if so show form as well as any conversions belonging to that user
        //create a form that appears after user has been submitted
}
