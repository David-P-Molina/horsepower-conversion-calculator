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
}
