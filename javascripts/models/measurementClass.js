class Measurement {
    static all = [];
    
    constructor(id, animal_power_to_hp, hp_equivalent, source, standard) {
        this.id = id;
        this.animal_power_to_hp = animal_power_to_hp;
        this.hp_equivalent = hp_equivalent;
        this.source = source;
        this.standard = standard
    }
}