using System;
using System.Collections.Generic;

namespace webapi_backend.Models
{
    public partial class Billing
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime? BillingDate { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
