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
    public class Product_Attribute_BrandController : Controller
    {
        private ApplicationDbContext _context;
        public Product_Attribute_BrandController(ApplicationDbContext context)
        {
            _context = context;

        }
        [HttpGet("GetAllBrand")]
        public IEnumerable<Product_Attribute_Brand> GetAllBrand()
        {

            try
            {
                return _context.product_Attribute_Brand.FromSqlRaw($"SELECT id, brand FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product_attribute_brand]");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
