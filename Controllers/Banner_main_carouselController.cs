
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

        [HttpGet]
        [Route("getCarousels")]
        //POST : /api/getCarousels
        public async Task<List<FirstPageCarouselList>> getCarousels()
        {
            try
            {
                return await _context.FirstPageCarouselList.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("getCarouselSerials")]
        //POST : /api/getCarouselSerials
        public async Task<List<FirstPageCarouselSerial>> getCarouselSerials()
        {
            try
            {
                return await _context.firstPageCarouselSerial.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        [Route("saveCarousel")]
        //POST : /api/saveCarousel
        public async Task<FirstPageCarouselList> SaveCarousel(FirstPageCarouselList model)
        {
            try
            {
                await _context.FirstPageCarouselList.AddAsync(model);
                await _context.SaveChangesAsync();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        [Route("saveCarouselSerial")]
        //POST : /api/saveCarouselSerial
        public async Task<FirstPageCarouselSerial> SaveCarouselSerial(FirstPageCarouselSerial model)
        {
            try
            {
                await _context.firstPageCarouselSerial.AddAsync(model);
                await _context.SaveChangesAsync();
                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
