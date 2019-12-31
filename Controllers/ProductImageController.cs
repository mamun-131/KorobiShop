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
    public class ProductImageController : Controller
    {
        private ApplicationDbContext _context;
        public ProductImageController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetProductImagesById/{id}")]
        public IEnumerable<Product_image> GetProductImagesById(int id)
        {
            try
            {
                return _context.product_image.FromSqlRaw($"SELECT ISNULL(id, 0) as id , ISNULL(product_id, 0) as product_id, ISNULL(imagePath , '') " +
            "as imagePath, ISNULL(imagePathThumb , '') as imagePathThumb FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product_image] WHERE product_id =" + id + " AND active=1");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
