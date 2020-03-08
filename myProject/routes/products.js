//make visible for other js and create middleware
const express = require("express");
const homeController = require("../controller/productsController");

//create a router
const router = express.Router();

//get the form by using get method
router.get("/form", homeController.addForm);

//create/edit a data in side our array
router.post("/addProduct", homeController.addItem);

//display all the products by using get method
router.get("/products", homeController.displayAll);

// get product by id
router.get("/products/:prodID", homeController.viewDetailByID);

//display the editing form
router.get("/editProduct/:prodID", homeController.editForm);

//edit the product by using the random id
router.post("/editProduct", homeController.editProductById);

//delete product by id
router.post("/delete", homeController.deleteById);

//make visible for other js
module.exports = router;
