class Measurement {
    static all = [];

    constructor({id, name, animal_power_to_hp, hp_equivalent, source, standard}) {
        this.id = id;
        this.name = name;
        this.animal_power_to_hp = animal_power_to_hp;
        this.hp_equivalent = hp_equivalent;
        this.source = source;
        this.standard = standard;
        Measurement.all.push(this);
    }
    static getAll() {
        return this.all
    }

    static findByName(name) {
        this.all.find(measurement => measurement.name === name) 

    }
    static findOrCreateBy(measureObj) {
        this.findByName(measureObj.name) || new Measurement(measureObj)
    }
    static handleSourceList(e) {
        if (sourceLinkList.length < 8) {
            mainDisplay.innerHTML = ""
            let measureArray = Measurement.all
            for( const element of measureArray) {
                const listLine = document.createElement('h3')
                const sourceLink = document.createElement('a')
                listLine.id = `${element.name}-header`
                sourceLink.href = element.source
                sourceLink.id =`${element.name}-power-source`
                sourceLink.className = "source-link-list"
                sourceLink.innerHTML = `Website Link for ${element.name}`
                listLine.appendChild(sourceLink)
                mainDisplay.appendChild(listLine)
            }
    }}
}