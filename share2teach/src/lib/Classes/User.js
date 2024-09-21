class User {
    constructor(userID, fName, lName, email, password, role, gender, createdAt, updatedAt) {
        this._userID = userID;
        this._fName = fName;
        this._lName = lName;
        this._email = email;
        this._password = password;
        this._role = role;
        this._gender = gender;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    // Getters
    get userID() {
        return this._userID;
    }

    get fName() {
        return this._fName;
    }

    get lName() {
        return this._lName;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get role() {
        return this._role;
    }

    get gender() {
        return this._gender;
    }

    get createdAt() {
        return this._createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    // Setters
    set userID(value) {
        this._userID = value;
    }

    set fName(value) {
        this._fName = value;
    }

    set lName(value) {
        this._lName = value;
    }

    set email(value) {
        this._email = value;
    }

    set password(value) {
        this._password = value;
    }

    set role(value) {
        this._role = value;
    }

    set gender(value) {
        this._gender = value;
    }

    set createdAt(value) {
        this._createdAt = value;
    }

    set updatedAt(value) {
        this._updatedAt = value;
    }
}

module.exports = User;
