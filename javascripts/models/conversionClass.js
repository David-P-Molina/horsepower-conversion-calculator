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
        mainDisplay.innerHTML = `
        <h1>New Conversion</h1>
        <form action="${ConversionApi.url} method="POST">
        <label for="username">UserName</label>
        <label for="conversion name">Conversion Name:</label>
        <label for="horse-power-value">HP Amount:</label>
        <label for="animal-power-value">Alternate Animal Power</label>
        </form>`
    }
    render() {
        //will display and render this.(conversion) on the page.
        //append to mainDisplay div to display current conversion
    }
        //checks to see if a current user is available if so show form as well as any conversions belonging to that user
        //create a form that appears after user has been submitted
}
