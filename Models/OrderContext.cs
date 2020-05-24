using Microsoft.EntityFrameworkCore;

namespace FTNET.Models
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