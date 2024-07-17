require("dotenv").config({ path: "./config/config.env" })
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./Db/connectDB");
const isAuthenticate = require("./middleware/isAuth");

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/v1/user", require("./routes/userRoute"))
app.use("/api/v1/anime", require("./routes/animeRoute"))
app.use("/api/v1/fav", isAuthenticate, require("./routes/favRoute"))


//database
connectDB();

//server
const PORT = 8000;
app.listen(PORT, () => console.log(`Port no ${PORT}`))
