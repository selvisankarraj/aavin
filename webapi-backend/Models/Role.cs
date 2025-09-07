using System;
using System.Collections.Generic;

namespace webapi_backend.Models
{
    public partial class Role
    {
        public Role()
        {
            RoleMappings = new HashSet<RoleMapping>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<RoleMapping> RoleMappings { get; set; }
    }
}
