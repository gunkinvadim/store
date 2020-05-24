using Microsoft.EntityFrameworkCore;

namespace FTNET.Models
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