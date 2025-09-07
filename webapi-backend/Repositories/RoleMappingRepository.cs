using webapi_backend.Data;
using webapi_backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace webapi_backend.Repositories
{
    public class RoleMappingRepository : IRoleMappingRepository
    {
        private readonly ApplicationDbContext _context;

        public RoleMappingRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<IEnumerable<RoleMapping>> GetAllAsync() => Task.FromResult<IEnumerable<RoleMapping>>(new List<RoleMapping>());
        public Task<RoleMapping?> GetByIdAsync(int id) => Task.FromResult<RoleMapping?>(null);
        public Task AddAsync(RoleMapping entity) => Task.CompletedTask;
        public Task UpdateAsync(RoleMapping entity) => Task.CompletedTask;
        public Task DeleteAsync(int id) => Task.CompletedTask;
    }
}