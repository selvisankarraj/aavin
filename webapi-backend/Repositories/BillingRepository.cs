using webapi_backend.Data;
using webapi_backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace webapi_backend.Repositories
{
    public class BillingRepository : GenericRepository<Billing>, IBillingRepository
    {
        private readonly ApplicationDbContext _context;

        public BillingRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Billing>> GetBillingsWithDetailsAsync()
        {
            return await _context.Billings
               // .Include(b => b.Inventory) // Assuming Billing has a navigation property to Inventory
                .ToListAsync();
        }
    }

    public interface IBillingRepository : IRepository<Billing>
    {
        Task<IEnumerable<Billing>> GetBillingsWithDetailsAsync();
    }
}