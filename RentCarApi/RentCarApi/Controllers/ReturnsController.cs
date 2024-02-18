using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentCarApi.Database;
using RentCarApi.Model;

namespace RentCarApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReturnsController : ControllerBase
    {
        private readonly Application_DbContext _context;

        public ReturnsController(Application_DbContext context)
        {
            _context = context;
        }

        // GET: api/Returns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Return>>> GetReturns()
        {
          if (_context.Returns == null)
          {
              return NotFound();
          }
            return await _context.Returns.ToListAsync();
        }

        // GET: api/Returns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Return>> GetReturn(int id)
        {
          if (_context.Returns == null)
          {
              return NotFound();
          }
            var @return = await _context.Returns.FindAsync(id);

            if (@return == null)
            {
                return NotFound();
            }

            return @return;
        }

        // PUT: api/Returns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReturn(int id, Return @return)
        {
            if (id != @return.id)
            {
                return BadRequest();
            }

            _context.Entry(@return).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReturnExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Returns
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Return>> PostReturn(Return @return)
        {
          if (_context.Returns == null)
          {
              return Problem("Entity set 'Application_DbContext.Returns'  is null.");
          }
            _context.Returns.Add(@return);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReturn", new { id = @return.id }, @return);
        }

        // DELETE: api/Returns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReturn(int id)
        {
            if (_context.Returns == null)
            {
                return NotFound();
            }
            var @return = await _context.Returns.FindAsync(id);
            if (@return == null)
            {
                return NotFound();
            }

            _context.Returns.Remove(@return);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReturnExists(int id)
        {
            return (_context.Returns?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
