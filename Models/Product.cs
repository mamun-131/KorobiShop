using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Models
{
    public class Product
    {
       

        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public double salePrice { get; set; }
        public double discount { get; set; }
        public string pictures { get; set; }
        public string producer  { get; set; }
        public string shortDetails { get; set; }
        public string description { get; set; }
        public int stock { get; set; }
        //public bool newPro { get; set; }
        public string brand { get; set; }
        
        //public bool sale { get; set; }
        public string category { get; set; }      
        //public string subcategory { get; set; }
        //public string subsubcategory { get; set; }

        //public IList<ProductTags> tags { get; set; }
        //public IList<ProductColors> colors { get; set; }

        //public int id { get; set; }
        //public string name { get; set; }
        //public DateTime created { get; set; }
        //public string SKU { get; set; }
        //public string short_description { get; set; }
        //public string description { get; set; }
        ////public bool Active { get; set; }
        //public DateTime updated { get; set; }
        //public int catagory_id { get; set; }
        //public int subCategory_id { get; set; }
        //public int subSubCategory_id { get; set; }
        //public int price_id { get; set; }
        //public int product_details_id { get; set; }



    }

   

    public class ProductTags
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public string tags { get; set; }
    }
    public class ProductColors
    {
        public string colors { get; set; }
    }

    public class Product_image
    {
        
        public int id { get; set; }
        public int product_id { get; set; }
        public string imagePath { get; set; }
        public string imagePathThumb { get; set; }

    }
    public class Product_attribute_tags
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public string product_attribute { get; set; }
        public string attribute_value { get; set; }
        public string attribute_valuetext { get; set; }
        public int attribute_stock { get; set; }
    }
    public class Menu_tag_map
    {
        public int id { get; set; }
        public string menu_id { get; set; }
        public string tagType { get; set; }
        public int tagValue { get; set; }


    }
    public class Product_Category
    {
        public int id { get; set; }
        public string category { get; set; }

    }
    public class Product_Attribute_Brand
    {
        public int id { get; set; }
        public string brand { get; set; }

    }
}
