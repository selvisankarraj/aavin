using System;
using System.Collections.Generic;

namespace webapi_backend.Models
{
    public partial class Inventory
    {
        public int Id { get; set; }
        public string ItemName { get; set; } = null!;
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
