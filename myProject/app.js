//import all the (biult-in and 3rd party) modules 
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//emport the routers
const homeRouters = require("./routes/homeRouter");
const productRouters = require("./routes/products");


//set engine(egs template)
//use the css,images from the public folder
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public',express.static(path.join(__dirname, "public")));


//use the routers
app.use(homeRouters);
app.use(productRouters);


//connect the server
app.listen(2300, () => {
  console.log("server is running on 2300.....");
});
