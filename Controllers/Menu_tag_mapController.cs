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
    public class Menu_tag_mapController : Controller
    {
        private ApplicationDbContext _context;
        public Menu_tag_mapController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetMenuTagMapById/{id}")]
        public IEnumerable<Menu_tag_map> GetMenuTagMapById(string id)
        {

            try
            {
                return _context.menu_tag_map.FromSqlRaw($"SELECT * FROM [korobi_shop_maindatabase].[korobi_shop_admin].[menu_tag_map] WHERE menu_id = " + id + "");

            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
