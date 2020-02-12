using KorobiShop.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Banner_main_carousel> banner_main_carousel { get; set; }
        public DbSet<Product> product { get; set; }

        public DbSet<Product_attribute_tags> product_attribute_tags { get; set; }
        public DbSet<Product_image> product_image { get; set; }

        public DbSet<Menu_tag_map> menu_tag_map { get; set; }
        public DbSet<FirstPageCarouselSerial> firstPageCarouselSerial { get; set; }
        public virtual DbSet<FirstPageCarouselList> FirstPageCarouselList { get; set; }
        public DbSet<FirstPageCarouselProducts> firstPageCarouselProducts { get; set; }
        public DbSet<WriterList> writerList { get; set; }
        public DbSet<PublisherList> publisherList { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context)
        {
            // "MyTasteDatabase": "Server=DESKTOP-K0O55OV\\SQLEXPRESS;Database=TasteDatabase;Trusted_Connection=True;"
        }
    }
}
