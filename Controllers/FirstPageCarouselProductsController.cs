using KorobiShop.Context;
using KorobiShop.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KorobiShop.Controllers
{


    [Route("api/")]
    [ApiController]
    public class FirstPageCarouselProductsController : Controller
    {
        private ApplicationDbContext _context;
        public FirstPageCarouselProductsController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllFirstPageCarouselDisplay")]
        public IEnumerable<FirstPageCarouselProducts> GetAllFirstPageCarouselDisplay()
        {
            try
            {
                return _context.firstPageCarouselProducts.FromSqlRaw($"SELECT ISNULL(fcd.idd , 0) as idd, ISNULL(fcd.product_id , 0) as id, ISNULL(fcd.carouselList_id , 0) as cId,  ISNULL(title , '') as name, ISNULL(pr.price , 0) as price, ISNULL(sd.oldPrice , 0) as salePrice, " +
            "ISNULL(sd.discount_Percentage, 0) as discount, CASE WHEN p.images = '' THEN 'assets/images/logo-02-02.png' ELSE ISNULL(p.images, 'assets/images/logo-02-02.png') " +
            "END as pictures, ISNULL(p.producer, '') as producer, ISNULL(p.shortDetails, '') as shortDetails, ISNULL(p.description, '') as description, ISNULL(p.stock, 0) as stock, " +
            "ISNULL(p.Brand, '') as brand, ISNULL(c.category, '') as category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[firstPageCarouselDisplay] fcd " +
            "LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product] p ON  p.id = fcd.product_id  LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[product_category] c " +
            "ON  c.id = p.catagory_id LEFT JOIN [korobi_shop_maindatabase].[korobi_shop_admin].[display_specialSales] sd on sd.product_id = fcd.product_id  LEFT JOIN " +
            "[korobi_shop_maindatabase].[korobi_shop_admin].[product_price] pr ON pr.product_id = fcd.product_id  where fcd.display = 1 order by fcd.carouselList_id asc, fcd.displayRank asc").ToList();

            }
            catch (Exception)
            {

                return null;
            }
            // return _context.Product;
        }
    }
}
