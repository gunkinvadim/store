using Microsoft.EntityFrameworkCore;

namespace store.Models
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options)
            : base(options)
        {
        }

        public DbSet<OrderItem> OrderItems { get; set; }
    }
}