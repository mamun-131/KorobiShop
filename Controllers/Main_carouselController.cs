
using KorobiShop.Context;
using KorobiShop.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Controllers
{
    [Route("api/")]
    [ApiController]
    public class Main_carouselController : Controller
    {
        private ApplicationDbContext _context;
        public Main_carouselController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllMain_carousel")]
        public IEnumerable<Main_carousel> GetAllMain_carousel()
        {
            return _context.Main_carousel;
        }


    }
}
