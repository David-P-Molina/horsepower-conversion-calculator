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
    static handleUserFormShow() {
        const userForm =
        `<form id="user-submit-form">
            <label for="username">UserName</label>
            <input type="text" id="username"></input>
            <label for="submit"><input type="submit" value="submit"></label>
        </form>
        `
        userFormDiv.innerHTML = userForm
    }
    getUserConversions() {
        return Conversion.all.filter(convert => this.id === convert.user_id)
    }
    //create a username display and a way to add a new username
}
