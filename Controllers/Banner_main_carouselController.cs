
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
    public class Banner_main_carouselController : Controller
    {
        private ApplicationDbContext _context;
        public Banner_main_carouselController(ApplicationDbContext context)
        {
            _context = context;

        }


        [HttpGet("GetAllMain_carousel")]
        public IEnumerable<Banner_main_carousel> GetAllMain_carousel()
        {

            try
            {
                return _context.banner_main_carousel.FromSqlRaw($"SELECT id , ISNULL(title, '') as title , ISNULL(subtitle, '') as subtitle, ISNULL(description, '') as description, " +
             " ISNULL(image, '') as image, ISNULL(link, '') as link  FROM banner_main_carousel WHERE active = 1 ").ToList();

            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("GetAllBanners")]
        public IEnumerable<Banner_main_carousel> GetAllBanners()
        {
            try
            {
                return _context.banner_main_carousel.FromSqlRaw($"SELECT id , ISNULL(title, '') as title , ISNULL(subtitle, '') as subtitle, ISNULL(description, '') as description, " +
          " ISNULL(image, '') as image, ISNULL(link, '') as link  FROM banner_allBanners WHERE active = 1 ").ToList();


            }
            catch (Exception e)
            {

                throw e;
            }
        }


    }
}
