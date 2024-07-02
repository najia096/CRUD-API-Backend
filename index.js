const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.listen(3000, () => {
  console.log("Server is running in port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node api server yay!!");
});


mongoose
  .connect(
    "mongodb+srv://<YOURUSERNAME>:<YOURPASSWORD>@backenddb.z5aqyzo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Yayy connected to the database!");
  })
  .catch(() => {
    console.log("Ooops connection failed!");
  });


