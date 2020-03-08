//import all the (biult-in and 3rd party) modules
const Products = require("../models/products");

//make visible for other js and create middleware
exports.addForm = (req, res, next) => {
  res.render("addproducts");
};

exports.addItem = (req, res, next) => {
  console.log(req.body);
  const prod = new Products(
    null,
    req.body.title,
    req.body.imageURL,
    req.body.price,
    req.body.description
  );
  console.log(prod.saveProduct());
  res.redirect("/products");
};

exports.displayAll = (req, res, next) => {
  const allProducts = Products.getProducts();
  console.log(allProducts);
  res.render("products", { products: allProducts });
};

exports.viewDetailByID = (req, res, next) => {
  console.log(req.params.prodID);
  const id = req.params.prodID;
  const filterById = Products.findById(id);
  console.log(filterById);
  res.render("viewDetail", { products: filterById[0] });
};

exports.editForm = (req, res, next) => {
  const id = req.params.prodID;
  const filterById = Products.findById(id);
  res.render("edit", { prod: filterById[0] });
};

exports.editProductById = (req, res, next) => {
  console.log(req.body);
  const updatedProduct = new Products(
    req.body.prodId,
    req.body.title,
    req.body.imageURL,
    req.body.price,
    req.body.description
  );
  updatedProduct.edit();
  res.redirect("/products");
};

exports.deleteById = (req, res, next) => {
  const getById=req.body.prodId;
  Products.deleteProduct(getById);
  res.redirect("/products");
};
