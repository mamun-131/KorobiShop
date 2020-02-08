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
    public class Product_attribute_tagsController : Controller
    {
        private ApplicationDbContext _context;
        public Product_attribute_tagsController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetProducAttributeTagsById/{id}")]
        public IEnumerable<Product_attribute_tags> GetProducAttributeTagsById(int id)
        {

            try
            {
                return _context.product_attribute_tags.FromSqlRaw($"SELECT ISNULL(id, 0) as id , ISNULL(product_id, 0) as product_id , ISNULL(product_attribute , '') as product_attribute, ISNULL(attribute_value , '') as attribute_value, ISNULL(attribute_valuetext , '') as attribute_valuetext, " +
                    "ISNULL(attribute_stock, 0) as attribute_stock FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product_attribute_tags] WHERE product_id =" + id + " AND display=1 order by product_attribute asc");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}