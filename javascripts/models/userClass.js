class User {
    static all = [];

    constructor(id, username) {
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
}