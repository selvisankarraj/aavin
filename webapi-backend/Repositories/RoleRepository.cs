using System.Collections.Generic;
using System.Threading.Tasks;
using webapi_backend.Models;

public class RoleRepository : IRoleRepository
{
    public Task<IEnumerable<Role>> GetAllAsync() => Task.FromResult<IEnumerable<Role>>(new List<Role>());
    public Task<Role?> GetByIdAsync(int id) => Task.FromResult<Role?>(null);
    public Task AddAsync(Role entity) => Task.CompletedTask;
    public Task UpdateAsync(Role entity) => Task.CompletedTask;
    public Task DeleteAsync(int id) => Task.CompletedTask;
}