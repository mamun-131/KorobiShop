using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KorobiShop.Models
{
    public class Banner_main_carousel
    {
        
        public int id { get; set; }
        public string title { get; set; }
        public string subtitle { get; set; }
        public string description { get; set; }
        public string image { get; set; }
        public string link { get; set; }
    }

    public class FirstPageCarouselList
    {
        public int id { get; set; }
        public string caption { get; set; }

    }
    public class FirstPageCarouselSerial{
        public int id { get; set; }
        public int mainSlno { get; set; }
        public int typeSl { get; set; }
        public string caption { get; set; }
        public string type { get; set; }
        public string routerlink { get; set; }
        public bool isActive { get; set; }
    }

    public class FirstPageCarouselProducts
    {
        [Key]
        public int idd { get; set; }
        public int id { get; set; }
       
        public int cId { get; set; }
        public string name { get; set; }
      
        public double price { get; set; }
        public double salePrice { get; set; }
        public double discount { get; set; }
        public string pictures { get; set; }
        public string producer { get; set; }
        public string shortDetails { get; set; }
        public string description { get; set; }
        public int stock { get; set; }
        public string brand { get; set; }
        public string category { get; set; }
    }

}
