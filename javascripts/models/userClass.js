class User {
    static all = [];

    constructor({id, username}) {
        this.id = id;
        this.username = username;
        User.all.push(this);
    }
    static getAll() {
        return this.all
    }

    static findByUsername(username) {
        this.all.find(user => user.username=== username) 

    }
    static findOrCreateBy(userObj) {
        this.findByName(userObj.username) || new User(userObj)
    }
    static handleUserFormShow(e) {
        mainDisplay.innerHTML = 
        `<form>
        <label for="username">UserName</label>
        <input type="text" id="username"></input>
        <input type="submit" value="submit">
        </form>`
    }
}
