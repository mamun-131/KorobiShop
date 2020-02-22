﻿using KorobiShop.Context;
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
    public class Product_CategoryController : Controller
    {
        private ApplicationDbContext _context;
        public Product_CategoryController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllCategory")]
        public IEnumerable<Product_Category> GetAllCategory()
        {

            try
            {
                return _context.product_Category.FromSqlRaw($"SELECT id, category FROM [korobi_shop_maindatabase].[korobi_shop_admin].[product_mainCategory]");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
