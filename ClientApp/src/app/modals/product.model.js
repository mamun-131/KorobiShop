"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export type pictures = 'assets/images/korobi/book/0001.jpeg' | 'assets/images/korobi/book/0001-1.jpeg' | 'assets/images/korobi/book/0001-2.jpeg';
var Product = /** @class */ (function () {
    function Product(id, name, price, salePrice, discount, pictures, producer, shortDetails, description, stock, 
    //newPro?: boolean,
    brand, 
    //sale?: boolean,
    category, 
    //subcategory?: string,
    //  subsubcategory?: string,
    tags, atrributes, colors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.salePrice = salePrice;
        this.discount = discount;
        this.pictures = pictures;
        this.producer = producer;
        this.shortDetails = shortDetails;
        this.description = description;
        this.stock = stock;
        //this.newPro = newPro;
        this.brand = brand;
        //this.sale = sale;
        this.category = category;
        //this.subcategory = subcategory;
        //this.subsubcategory = subsubcategory;
        this.tags = tags;
        this.atrributes = atrributes;
        this.colors = colors;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map