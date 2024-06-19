const mongoose = require("mongoose");

/*Setting up the connection with mongoose */
main()
    .catch(error => console.log(error))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/details");
}

const detailsInfluencer = mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    youtube: String,
    facebook: String,
    instagram: {
        type: String,
        required: true
    },
    message: String
});

const detailsUser = mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    message: String
});

const Client = mongoose.model("detailsUser", detailsUser)
const Influencer = mongoose.model("detailsInfluencer", detailsInfluencer)

module.exports = { Client, Influencer };