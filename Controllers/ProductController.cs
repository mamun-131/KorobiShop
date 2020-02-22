using KorobiShop.Context;
using KorobiShop.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Controllers
{


    [Route("api/")]
    [ApiController]
    public class ProductController : Controller
    {
        private ApplicationDbContext _context;
        public ProductController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllSpecialSalesProduct/{id}")]
        public IEnumerable<Product> GetAllSpecialSalesProduct(int id)
        {


            try
            {

                return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
           "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
           "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
           "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
           "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_category_tag] " +
           "ct ON p.id = ct.product_id where ct.catagory_id = " + id + " ").ToList();

            }
            catch (Exception)
            {

                return null;
            }
            // return _context.Product;
        }


        [HttpGet("GetAllAttributeTagProduct/{id}")]
        public IEnumerable<Product> GetAllAttributeTagProduct(string id)
        {


            try
            {
                Console.WriteLine(id);
                String[] prams = id.Split("-");

                return _context.product.FromSqlRaw($"SELECT distinct ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
           "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
           "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM[korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
           "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
           "sd on sd.product_id = p.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category_tag] " +
           "ct ON p.id = ct.product_id RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_attribute_tags] att ON p.id = att.product_id  where ct.catagory_id = 10000 " +
           "and att.product_attribute = 'Condition' and att.attribute_value = 'Old' and att.attribute_valuetext = 'Old'").ToList();

            }
            catch (Exception)
            {

                return null;
            }
            // return _context.Product;
        }


        [HttpGet("GetProductById/{id}")]
        public IEnumerable<Product> GetProductById(int id)
        {
            try
            {
                return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
           "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
           "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
           "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
           "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id WHERE p.id=" + id + " ").ToList();
            }
            catch (Exception)
            {

                return null;
            }
        }

        [HttpGet("GetProductByCategory/{id}")]
        public IEnumerable<Product> GetProductByCategory(int id)
        {

            try

            {

                    return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
                    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
                    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
                    "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
                    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_category_tag] ct ON ct.product_id = p.id  WHERE ct.catagory_id= " + id + "").ToList();
   
            }
              




            catch (Exception)
            {

                return null;
            }



        }
        [HttpGet("GetProductByWriter/{id}")]
        public IEnumerable<Product> GetProductByWriter(int id)
        {

            try

            {

                return _context.product.FromSqlRaw($"SELECT DISTINCT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
                "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
                "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
                "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
                "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_category_tag] ct ON ct.product_id = p.id  " +
                " RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_writers_tag] wt ON wt.product_id = p.id WHERE wt.writer_id = " + id + "").ToList();

            }





            catch (Exception)
            {

                return null;
            }



        }




        [HttpGet("GetProductByPublisher/{id}")]
        public IEnumerable<Product> GetProductByPublisher(int id)
        {

            try

            {

                return _context.product.FromSqlRaw($"SELECT DISTINCT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
                "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
                "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
                "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
                "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_category_tag] ct ON ct.product_id = p.id  " +
                " RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_publishers_tag] pt ON pt.product_id = p.id WHERE pt.publisher_id = " + id + "").ToList();

            }





            catch (Exception)
            {

                return null;
            }



        }

        [HttpGet("GetProductBySearch/{id}")]
        public IEnumerable<Product> GetProductBySearch(string id)
        {
                        try

            {

                //   return _context.product.FromSqlRaw($"EXECUTE sp_FindStringInTable '%" + id + "%', 'korobi_shop_admin', 'product'").ToList();

                string[] idarr = id.Split("-");
                if(idarr[0] == "")
                {
                    idarr[0] = "%%";
                }
                return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title, '') as name, ISNULL(pr.price, 0) as price, ISNULL(sd.oldPrice, 0) as salePrice, " +
           "ISNULL(sd.discount_Percentage, 0) as discount, ISNULL(p.images, 'assets/images/logo-02-02.png') as pictures, ISNULL(p.producer, '') as producer, " +
           "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM[korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
           "p LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
           "sd on sd.product_id = p.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id where  c.category LIKE N'" + idarr[0] + "' and (p.title LIKE N'%" + idarr[1] + "%' or p.producer LIKE N'%" + idarr[1] + "%' " +
           "or p.shortDetails LIKE N'%" + idarr[1] + "%' or p.description LIKE N'%" + idarr[1] + "%' or p.Brand LIKE N'%" + idarr[1] + "%'  or c.category LIKE N'%" + idarr[1] + "%')").ToList();

            }





            catch (Exception)
            {

                return null;
            }



        }

        //[HttpGet("GetProductBySubCategory/{catid}/{subid}")]
        //public IEnumerable<Product> GetProductByCategory(int catid, int subid)
        //{


        //    try
        //    {
        //        return _context.Product.FromSqlRaw($"SELECT p.id as id, product_name as name, ISNULL(price , 0) as price, ISNULL(saleprice , 0) as salePrice, " +
        //       "ISNULL(discountPercentage , 0) as discount, CASE WHEN images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(images, 'assets/images/logo-02-02.png') END as pictures ,  ISNULL(Writer, '') as author, " +
        //       "ISNULL(shortDetails , '') as shortDetails, ISNULL(description, '') as description, ISNULL(stock, 0) as stock, ISNULL(newprod, 0) as newPro, ISNULL(Brand, 0) as brand, ISNULL(sale, 0) as sale, ISNULL(category, '') as category " +
        //       "FROM  product p LEFT JOIN  productCategory c ON p.catagory_id = c.id LEFT JOIN [korobi_shop_alsaud].[product_details] pd ON p.id = pd.product_details_id " +
        //       "LEFT JOIN  sales_discount sd on sd.product_id = p.id LEFT join price pr on pr.product_id = p.id WHERE p.catagory_id =" + catid  + " AND p.subCategory_id =" + subid + "");

        //    }
        //    catch (Exception)
        //    {

        //        return null;
        //    }
        //}

    }
}



//[HttpGet("GetAllOldPopularProduct")]
//public IEnumerable<Product> GetAllOldPopularProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//    "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id  LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_oldBookPopular] obp ON obp.product_id = p.id where obp.display = 1 order by obp.displayRank asc").ToList();

//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}

//[HttpGet("GetAllMostSoldProduct")]
//public IEnumerable<Product> GetAllMostSoldProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//    "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_mostSoldBook] msp ON msp.product_id = p.id where msp.display = 1 order by msp.displayRank asc").ToList();

//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}

//[HttpGet("GetAllPreorderProduct")]
//public IEnumerable<Product> GetAllPreOrderProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//    "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_preOrderBook] pob ON pob.product_id = p.id where pob.display = 1 order by pob.displayRank asc").ToList();

//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}

//[HttpGet("GetAllStationeryProduct")]
//public IEnumerable<Product> GetAllStationeryProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//      "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//      "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//      "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//      "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_stationery] stp ON stp.product_id = p.id where stp.display = 1 order by stp.displayRank asc").ToList();


//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}


//[HttpGet("GetAllArtAndCraftProduct")]
//public IEnumerable<Product> GetAllArtAndCraftProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//    "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_artAndCraft] aac ON aac.product_id = p.id where aac.display = 1 order by aac.displayRank asc").ToList();

//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}





//[HttpGet("GetAllOrgOrderProduct")]
//public IEnumerable<Product> GetAllOrgOrderProduct()
//{
//    try
//    {
//        return _context.product.FromSqlRaw($"SELECT ISNULL(p.id , 0) as id, ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
//    "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') END as pictures, ISNULL(p.producer, '') as producer, " +
//    "ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product] " +
//    "p RIGHT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c ON p.catagory_id = c.id LEFT JOIN[korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] " +
//    "sd on sd.product_id = p.id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = p.id RIGHT JOIN  [korobi_shop_maindatabase].[korobi_shop_admin].[display_orgOrder] oor ON oor.product_id = p.id where oor.display = 1 order by oor.displayRank asc").ToList();

//    }
//    catch (Exception)
//    {

//        return null;
//    }
//    // return _context.Product;
//}