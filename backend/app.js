require("dotenv").config({ path: "./config/config.env" })
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./Db/connectDB");
const { isAuthenticate } = require("./middleware/isAuth");
const cookieParser = require('cookie-parser')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors())


//routes
app.use("/api/v1/user", require("./routes/userRoute"))
app.use("/api/v1/anime", isAuthenticate, require("./routes/animeRoute"))

//database
connectDB();

//server
const PORT = 8000;
app.listen(PORT, () => console.log(`Port no ${PORT}`))
