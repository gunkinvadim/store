using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using store.Models;

namespace store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreItemsController : ControllerBase
    {
        private readonly StoreContext _context;

        public StoreItemsController(StoreContext context)
        {
            _context = context;

            if (!_context.StoreItems.Any())
            {
                _context.StoreItems.Add(new StoreItem {
                    itemNumber = 1,
                    name = "бумага",
                    price = 1000,
                    color = "белый",
                    format = "A4"
                });
                _context.StoreItems.Add(new StoreItem {
                    itemNumber = 2,
                    name = "бумага",
                    price = 2000,
                    color = "белый",
                    format = "A3"
                });
                _context.SaveChanges();
            }
        }

        // GET: api/StoreItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StoreItem>>> GetStoreItems()
        {
            return await _context.StoreItems.ToListAsync();
        }

        // GET: api/StoreItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StoreItem>> GetStoreItem(int id)
        {
            var storeItem = await _context.StoreItems.FindAsync(id);

            if (storeItem == null)
            {
                return NotFound();
            }

            return storeItem;
        }

        // PUT: api/StoreItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStoreItem(int id, StoreItem storeItem)
        {
            if (id != storeItem.id)
            {
                return BadRequest();
            }

            _context.Entry(storeItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoreItemExists(id))
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

        // POST: api/StoreItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<StoreItem>> PostStoreItem(StoreItem storeItem)
        {
            _context.StoreItems.Add(storeItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoreItem", new { id = storeItem.id }, storeItem);
        }

        // DELETE: api/StoreItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StoreItem>> DeleteStoreItem(int id)
        {
            var storeItem = await _context.StoreItems.FindAsync(id);
            if (storeItem == null)
            {
                return NotFound();
            }

            _context.StoreItems.Remove(storeItem);
            await _context.SaveChangesAsync();

            return storeItem;
        }

        private bool StoreItemExists(int id)
        {
            return _context.StoreItems.Any(e => e.id == id);
        }
    }
}
