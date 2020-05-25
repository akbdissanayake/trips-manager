using Microsoft.EntityFrameworkCore;

namespace Trips.Data
{
    public class TripDbContext : DbContext
    {
        public DbSet<Trip> Trips { get; set; }

        public TripDbContext(DbContextOptions<TripDbContext> options): base(options)
        {
             Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=ASUSI55TH;Database=TripDB;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}