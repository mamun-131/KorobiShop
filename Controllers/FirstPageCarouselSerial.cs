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
    public class FirstPageCarouselSerialController : Controller
    {
        private ApplicationDbContext _context;
        public FirstPageCarouselSerialController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetFirstPageCarouselSerial")]
        public IEnumerable<FirstPageCarouselSerial> GetFirstPageCarouselSerial()
        {
               
            try
            {

                return _context.firstPageCarouselSerial.FromSqlRaw($"SELECT id, mainSlno, typeSl, caption, type, routerlink FROM [korobi_shop_maindatabase].[korobi_shop_admin].[firstPageCarouselSerial] WHERE isActive = 1 order by mainSlno asc");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
