const mongoose = require("mongoose");

/* Setting up the connection with mongoose */
main().catch(error => console.log(error));

async function main() {
    await mongoose.connect("mongodb+srv://konnectsphere_admin:We_connect_10424@konnectsphere-initial-l.uogpdwb.mongodb.net/details");
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

const Client = mongoose.model("detailsUser", detailsUser);
const Influencer = mongoose.model("detailsInfluencer", detailsInfluencer);

module.exports = { Client, Influencer };
