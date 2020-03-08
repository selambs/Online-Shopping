let products = [];
module.exports = class Products {
  constructor(id, title, imageURL, price, description) {
    this.prodId = id;
    this.title = title;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
  }

  saveProduct() {
    this.prodId = Math.floor(Math.random() * 100000);
    products.push(this);
  }

  static getProducts() {
    return products;
  }

  static findById(Id) {
    // console.log(Id)
    return products.filter(item => item.prodId == Id);
  }

  edit() {
    const findTheIndex = products.findIndex(item => item.prodId == this.prodId);
    products[findTheIndex] = this;
    console.log(products);
  }
  static deleteProduct(Id) {
    products = products.filter(item => item.prodId != Id);
  }
};
