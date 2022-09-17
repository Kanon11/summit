const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require('cookie-parser');
const { notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler");
const loginRout = require("./router/loginRoutes");
const userRout = require("./router/userRoutes");
const inboxRout = require("./router/inboxRoutes");

const app = express();
dotenv.config();
//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connection successfull")).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser(process.env.COOKIE_SECRETE));

//routing setup
app.use("/", loginRout);
app.use("/users", userRout);
app.use("/inbox", inboxRout);

//error handling

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})

