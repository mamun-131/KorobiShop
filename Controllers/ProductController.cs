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

    [HttpGet("GetAllDiscountProduct")]
    public IEnumerable<Product> GetAllDiscountProduct()
    {
            try
            {
                return _context.Product.FromSqlRaw($"SELECT p.id as id, product_name as name, ISNULL(price , 0) as price, ISNULL(saleprice , 0) as salePrice, " +
               "ISNULL(discountPercentage , 0) as discount, CASE WHEN images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(images, 'assets/images/logo-02-02.png') END as pictures , " +
               "ISNULL(shortDetails , '') as shortDetails, ISNULL(description, '') as description, ISNULL(stock, 0) as stock, ISNULL(newprod, 0) as newPro, ISNULL(Brand, 0) as brand, ISNULL(sale, 0) as sale, ISNULL(category, '') as category " +
               "FROM  product p left JOIN  productCategory c ON p.catagory_id = c.id left JOIN [korobi_shop_alsaud].[product_details] pd ON p.product_details_id = pd.product_details_id " +
               "left JOIN  sales_discount sd on sd.product_id = p.id Left join price pr on pr.product_id = p.id where sd.discount = 1 order by sd.displayRank asc").ToList();

            }
            catch (Exception)
            {

                return null;
            }
                // return _context.Product;
        }
        [HttpGet("GetAllOldPopularProduct")]
        public IEnumerable<Product> GetAllOldPopularProduct()
        {
            try
            {
                return _context.Product.FromSqlRaw($"SELECT p.id as id, product_name as name, ISNULL(price , 0) as price, ISNULL(saleprice , 0) as salePrice, " +
               "ISNULL(discountPercentage , 0) as discount, CASE WHEN images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(images, 'assets/images/logo-02-02.png') END as pictures , " +
               "ISNULL(shortDetails , '') as shortDetails, ISNULL(description, '') as description, ISNULL(stock, 0) as stock, ISNULL(newprod, 0) as newPro, ISNULL(Brand, 0) as brand, ISNULL(sale, 0) as sale, ISNULL(category, '') as category " +
               "FROM  product p left JOIN  productCategory c ON p.catagory_id = c.id left JOIN [korobi_shop_alsaud].[product_details] pd ON p.product_details_id = pd.product_details_id " +
               "left JOIN  sales_discount sd on sd.product_id = p.id Left join price pr on pr.product_id = p.id left JOIN oldBookPopular ob on ob.product_id = p.id order by sd.displayRank asc").ToList();

            }
            catch (Exception)
            {

                return null;
            }
            // return _context.Product;
        }

    }
}
