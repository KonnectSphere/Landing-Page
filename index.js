const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const model = require("./models/details");
const mailer = require("./services/mailer");
const app = express();

/* Alloting the paths for public and views folders and alloting the middlewares for express to handle post requests */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//this line is specific for external css and js files going to be stored in public folder
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

/* Setting up the connection with mongoose */
main().catch(error => console.log(error));

async function main() {
    await mongoose.connect("mongodb+srv://konnectsphere_admin:We_connect_10424@konnectsphere-initial-l.uogpdwb.mongodb.net/details");
}

/* Main route rendering!! -> index.html (home page) */
app.get("/", (request, response) => {
    response.render("index");
});

/*Contact route rendering!! -> contact.html (contact us page) */
app.get("/contact", (request, response) => {
    response.render("contact");
});

/*Handling the form using mongodb and nodemailer */
app.post("/contact", async (request, response) => {
    let result = request.body;
    let { formtype } = request.query;
    let client = model.Client;
    let influencer = model.Influencer;

    if (formtype == 'client') {
        await client.insertMany([{
            name: result.name,
            email: result.email,
            contact: result.contact,
            message: result.message
        }]);

        await mailer(formtype, result.email, result.name);
    } else {
        await influencer.insertMany([{
            name: result.name,
            email: result.email,
            contact: result.contact,
            youtube: result.youtube,
            facebook: result.facebook,
            instagram: result.instagram
        }]);

        await mailer(formtype, result.email, result.name);
    }

    response.redirect("/contact")
});

/*About us rendering!! -> about.html (about us page) */
app.get("/about", (request, response) => {
    response.render("about");
});

app.listen(8080);
