const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const navbarrouter = require("./routers/navbarrouter");
const homerouter = require("./routers/homerouter");
const aboutrouter = require("./routers/aboutrouter");
const compeniesrouter = require("./routers/compeniesrouter")
const serviesrouter = require("./routers/servicesrouter");
const workwithusrouter = require("./routers/workwithusrouter");
const joinrouter = require("./routers/joinrouter");
const reviewsrouter = require("./routers/reviewsrouter");
const blogrouter = require("./routers/blogrouter");
const footerrouter = require("./routers/footerrouter");
const adminrouter = require("./routers/adminrouter");



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB()

//navbar ki api
app.use("/api", navbarrouter);

//home ki api
app.use("/api", homerouter);

//about ki api
app.use("/api", aboutrouter)

//componeies ki api 
app.use("/api", compeniesrouter);

//servies ki api
app.use("/api", serviesrouter);

//workwithus ki api
app.use("/api", workwithusrouter);

//joinus ki api

app.use("/api", joinrouter);

//reviews ki api
app.use("/api", reviewsrouter);

//blog ki api 
app.use("/api", blogrouter);

//footer ki api 
app.use("/api", footerrouter);


//admin ki api
app.use("/api", adminrouter);





app.get("/", (req, res) => {
  res.send("Backend server is running...");
});

// if (process.env.PORT!== "production") {
//   const port = process.env.PORT|| 5000;
//   app.listen(port, () => {
//     console.log(`App running on port ${port}`);
//   });
// }

module.exports = app;
