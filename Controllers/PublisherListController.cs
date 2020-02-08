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
    public class PublisherListController : ControllerBase
    {
        private ApplicationDbContext _context;
        public PublisherListController(ApplicationDbContext context)
        {
            _context = context;

        }

        [HttpGet("GetAllPublishers")]
        public IEnumerable<PublisherList> GetAllPublishers()
        {


            try
            {

                return _context.publisherList.FromSqlRaw($"SELECT id, name FROM [korobi_shop_maindatabase].[korobi_shop_admin].[publisherList] order by rank").ToList();

            }
            catch (Exception)
            {
                return null;
            }
            // return _context.Product;
        }

    }
}