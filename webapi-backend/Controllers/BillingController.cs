using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using webapi_backend.Models;
using webapi_backend.Repositories;

namespace webapi_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingController : ControllerBase
    {
        private readonly IBillingRepository _billingRepository;

        public BillingController(IBillingRepository billingRepository)
        {
            _billingRepository = billingRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Billing>>> GetBillings()
        {
            var billings = await _billingRepository.GetAllAsync();
            return Ok(billings);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Billing>> GetBilling(int id)
        {
            var billing = await _billingRepository.GetByIdAsync(id);
            if (billing == null)
            {
                return NotFound();
            }
            return Ok(billing);
        }

        [HttpPost]
        public async Task<ActionResult<Billing>> CreateBilling(Billing billing)
        {
            await _billingRepository.AddAsync(billing);
            return CreatedAtAction(nameof(GetBilling), new { id = billing.Id }, billing);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBilling(int id, Billing billing)
        {
            if (id != billing.Id)
            {
                return BadRequest();
            }

            await _billingRepository.UpdateAsync(billing);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBilling(int id)
        {
            var billing = await _billingRepository.GetByIdAsync(id);
            if (billing == null)
            {
                return NotFound();
            }

            await _billingRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}