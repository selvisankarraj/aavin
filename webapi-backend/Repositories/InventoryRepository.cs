using System.Collections.Generic;
using System.Threading.Tasks;
using webapi_backend.Models;

public class InventoryRepository : IInventoryRepository
{
    public Task<IEnumerable<Inventory>> GetAllAsync() => Task.FromResult<IEnumerable<Inventory>>(new List<Inventory>());
    public Task<Inventory?> GetByIdAsync(int id) => Task.FromResult<Inventory?>(null);
    public Task AddAsync(Inventory entity) => Task.CompletedTask;
    public Task UpdateAsync(Inventory entity) => Task.CompletedTask;
    public Task DeleteAsync(int id) => Task.CompletedTask;
}