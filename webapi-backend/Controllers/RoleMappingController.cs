using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using webapi_backend.Models;
using webapi_backend.Repositories;

namespace webapi_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleMappingController : ControllerBase
    {
        private readonly IRoleMappingRepository _roleMappingRepository;

        public RoleMappingController(IRoleMappingRepository roleMappingRepository)
        {
            _roleMappingRepository = roleMappingRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoleMapping>>> GetRoleMappings()
        {
            var roleMappings = await _roleMappingRepository.GetAllAsync();
            return Ok(roleMappings);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RoleMapping>> GetRoleMapping(int id)
        {
            var roleMapping = await _roleMappingRepository.GetByIdAsync(id);
            if (roleMapping == null)
            {
                return NotFound();
            }
            return Ok(roleMapping);
        }

        [HttpPost]
        public async Task<ActionResult<RoleMapping>> CreateRoleMapping(RoleMapping roleMapping)
        {
            await _roleMappingRepository.AddAsync(roleMapping);
            return CreatedAtAction(nameof(GetRoleMapping), new { id = roleMapping.Id }, roleMapping);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRoleMapping(int id, RoleMapping roleMapping)
        {
            if (id != roleMapping.Id)
            {
                return BadRequest();
            }

            await _roleMappingRepository.UpdateAsync(roleMapping);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoleMapping(int id)
        {
            var roleMapping = await _roleMappingRepository.GetByIdAsync(id);
            if (roleMapping == null)
            {
                return NotFound();
            }

            await _roleMappingRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}