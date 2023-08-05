const { Schema, model } = require("mongoose");

// Define the User schema using Mongoose's Schema constructor.
const UserSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
});

// Create the UserModel based on the UserSchema. The first argument "users" is the name of the MongoDB collection
// where the documents for this model will be stored. The second argument is the UserSchema that defines the structure
// of the documents in the collection.
const UserModel = model("users", UserSchema);

// Export the UserModel so that it can be used in other parts of the application.
module.exports = UserModel;
