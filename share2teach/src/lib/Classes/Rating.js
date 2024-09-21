class Rating {
    constructor(ratingID, rate, fileID) {
        this._ratingID = ratingID;
        this._rate = rate;
        this._fileID = fileID;
    }

    // Getters
    get ratingID() {
        return this._ratingID;
    }

    get rate() {
        return this._rate;
    }

    get fileID() {
        return this._fileID;
    }

    // Setters
    set ratingID(value) {
        this._ratingID = value;
    }

    set rate(value) {
        this._rate = value;
    }

    set fileID(value) {
        this._fileID = value;
    }
}
