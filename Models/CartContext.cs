using Microsoft.EntityFrameworkCore;

namespace store.Models
{
    public class CartContext : DbContext
    {
        public CartContext(DbContextOptions<CartContext> options)
            : base(options)
        {
        }

        public DbSet<CartItem> CartItems { get; set; }
    }
}