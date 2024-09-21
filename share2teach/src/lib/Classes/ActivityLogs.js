class ActivityLog {
    constructor(UserId, activity_type, activity_description) {
        this._UserId = UserId;
        this._activityType = activity_type;
        this._activityDescription = activity_description;
        this._createdAt = new Date(); // Captures the current date and time
    }

    // Getters
    get UserId() {
        return this._UserId;
    }

    get activity_type() {
        return this._activityType;
    }

    get activity_description() {
        return this._activityDescription;
    }

    // Setters
    set UserId(value) {
        this._UserId = value;
    }

    set activity_type(value) {
        this._activityDescription = value;
    }

}

