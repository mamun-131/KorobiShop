// Product Tag
//export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';
export type ProductTags = [];
export type ProductAtrributes = [];
// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

//export type pictures = 'assets/images/korobi/book/0001.jpeg' | 'assets/images/korobi/book/0001-1.jpeg' | 'assets/images/korobi/book/0001-2.jpeg';


export class Product {
    id?: number;
    cId?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  producer?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  //newPro?: boolean;
  brand?: string;
  //sale?: boolean;
  category?: string;
  //subcategory?: string;
  //subsubcategory?: string;
  tags?: ProductTags[];
    atrributes?: ProductAtrributes[];
    colors?: ProductColor[];

  constructor(
      id?: number,
      cId?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
      pictures?: string,
      producer?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    //newPro?: boolean,
    brand?: string,
    //sale?: boolean,
      category?: string,
    //subcategory?: string,
    //  subsubcategory?: string,
    tags?: ProductTags[],
      atrributes?: ProductAtrributes[],
        colors?: ProductColor[]
  ) {
      this.id = id;
      this.cId = cId;
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

 }
   //Color Filter
  export interface ColorFilter {
    color?: ProductColor;
  }


