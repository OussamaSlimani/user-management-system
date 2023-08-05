// CREATE SERVER
const express = require("express");
const app = express();
const _PORT = process.env.PORT;
const cors = require("cors");

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from other domains.
app.use(cors());

// Parse incoming JSON data in request bodies.
app.use(express.json());

// CONNECT TO DB
const DATABASE_URI = process.env.DATABASE_URI;
const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided URI.
mongoose.connect(DATABASE_URI);

// USER MODEL
const UserModel = require('./models/Users');

// get request
app.get("/users", async (req, res) => {
    // Retrieve all users from the database using the UserModel and send them as a JSON response.
    const users = await UserModel.find();
    res.json(users);
});

// create user
app.post("/createUser", async (req, res) => {
    // Create a new user based on the data in the request body and save it to the database using the UserModel.
    const newUser = new UserModel(req.body);
    await newUser.save();

    // Send the request body as the JSON response, confirming the details of the newly created user.
    res.json(req.body);
});

// Start the server and listen on the specified port (_PORT).
app.listen(_PORT, () => {
    console.log("Server Works");
});
