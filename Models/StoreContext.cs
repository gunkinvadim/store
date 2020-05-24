using Microsoft.EntityFrameworkCore;

namespace store.Models
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        {
        }

        public DbSet<StoreItem> StoreItems { get; set; }
    }
}