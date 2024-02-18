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
    public class RentalsController : ControllerBase
    {
        private readonly Application_DbContext _context;

        public RentalsController(Application_DbContext context)
        {
            _context = context;
        }

        // GET: api/Rentals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rentals>>> GetRentals()
        {
          if (_context.Rentals == null)
          {
              return NotFound();
          }
            return await _context.Rentals.ToListAsync();
        }

        // GET: api/Rentals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rentals>> GetRentals(int id)
        {
          if (_context.Rentals == null)
          {
              return NotFound();
          }
            var rentals = await _context.Rentals.FindAsync(id);

            if (rentals == null)
            {
                return NotFound();
            }

            return rentals;
        }

        [HttpGet("GetByCarId/{id}")]
        public IActionResult GetByCarId(int id)
        {
            try
            {
                var car = _context.Rentals.Where(c => c.CarId == id);
                if (car == null)
                {
                    return NotFound($"Car detail not found with id {id}");
                }
                return Ok(car);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpGet("GetByUserId/{id}")]
        public IActionResult GetByUserId(int id)
        {
            try
            {
                var car = _context.Rentals.Where(c => c.CoustomerId == id);
                if (car == null)
                {
                    return NotFound($"Car detail not found with id {id}");
                }
                return Ok(car);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }



        // PUT: api/Rentals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentals(int id, Rentals rentals)
        {
            if (id != rentals.Id)
            {
                return BadRequest();
            }

            _context.Entry(rentals).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalsExists(id))
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

        // POST: api/Rentals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rentals>> PostRentals(Rentals rentals)
        {
          if (_context.Rentals == null)
          {
              return Problem("Entity set 'Application_DbContext.Rentals'  is null.");
          }
            _context.Rentals.Add(rentals);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentals", new { id = rentals.Id }, rentals);
        }

        // DELETE: api/Rentals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRentals(int id)
        {
            if (_context.Rentals == null)
            {
                return NotFound();
            }
            var rentals = await _context.Rentals.FindAsync(id);
            if (rentals == null)
            {
                return NotFound();
            }

            _context.Rentals.Remove(rentals);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RentalsExists(int id)
        {
            return (_context.Rentals?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
