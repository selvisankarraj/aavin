using System;
using System.Collections.Generic;

namespace webapi_backend.Models
{
    public partial class User
    {
        public User()
        {
            Billings = new HashSet<Billing>();
            RoleMappings = new HashSet<RoleMapping>();
        }

        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }

        public virtual ICollection<Billing> Billings { get; set; }
        public virtual ICollection<RoleMapping> RoleMappings { get; set; }
    }
}
