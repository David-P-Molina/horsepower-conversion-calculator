class Conversion {
    static all = [];

    constructor(id, name, hp_quantity, animal_conversion_quantity, user_id) {
        this.id = id;
        this.name = name;
        this.hp_quantity = hp_quantity;
        this.animal_conversion_quantity = animal_conversion_quantity;
        this.user_id = user_id;
        Conversion.all.push(this);
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

    render() {
        //will display and render this.(conversion) on the page.
        //append to mainDisplay div to display current conversion
    }
    
}
