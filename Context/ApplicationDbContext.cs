using KorobiShop.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Main_carousel> Main_carousel { get; set; }
        public DbSet<Product> Product { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context)
        {
            // "MyTasteDatabase": "Server=DESKTOP-K0O55OV\\SQLEXPRESS;Database=TasteDatabase;Trusted_Connection=True;"
        }


    }
}
