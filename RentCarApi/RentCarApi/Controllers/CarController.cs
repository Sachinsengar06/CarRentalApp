using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentCarApi.Database;
using RentCarApi.Model;
using System.Numerics;

namespace RentCarApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly Application_DbContext _context;
        private IQueryable<Car> cars;

        public CarController(Application_DbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var cars = _context.Cars.ToList();
                {
                    if (cars.Count == 0)
                    {
                        return NotFound();
                    }
                    return Ok(cars);
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

       

[HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var car = _context.Cars.Find(id);
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


        [HttpGet("GetByColor/{id}")]
        public IActionResult GetByColor(string id)
        {
            try
            {
                var car = _context.Cars.Where(c => c.Color == id);
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


        [HttpGet("GetByBrand/{id}")]
        public IActionResult GetByBrand(string id)
        {
            try
            {
                var car = _context.Cars.Where(c => c.Brand == id);
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

        [HttpPost]
        public IActionResult Post(Car car)
        {
            try
            {
                _context.Add(car);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> PutCustomer(int id, Car car)
        {
            if (id != car.Id)
            {
                return BadRequest();
            }

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            if (_context.Cars == null)
            {
                return NotFound();
            }
            var car = await _context.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool CarExists(int id)
        {
            return (_context.Cars?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }

}
