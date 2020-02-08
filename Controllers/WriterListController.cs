using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KorobiShop.Context;
using KorobiShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KorobiShop.Controllers
{
    [Route("api/")]
    [ApiController]
    public class WriterListController : ControllerBase
    {
        private ApplicationDbContext _context;
        public WriterListController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllWriters")]
        public IEnumerable<WriterList> GetAllWriters()
        {


            try
            {

                return _context.writerList.FromSqlRaw($"SELECT id, name FROM [korobi_shop_maindatabase].[korobi_shop_admin].[writerList] order by rank").ToList();

            }
            catch (Exception)
            {
                return null;
            }
            // return _context.Product;
        }

    }
}