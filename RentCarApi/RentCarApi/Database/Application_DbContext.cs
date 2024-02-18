using Microsoft.EntityFrameworkCore;
using RentCarApi.Model;

namespace RentCarApi.Database
{
    public class Application_DbContext:DbContext
    {
       public Application_DbContext(DbContextOptions<Application_DbContext>options):base(options) { }
        public DbSet<Car> Cars { get; set; }
       
        public DbSet<Rentals> Rentals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Customer>().HasData(new Customer
            {
                Id = 1,
                Name = "User1",
                Password = "user1@123"

            },
            new Customer
            {
                Id = 2,
                Name = "User2",
                Password = "user2@123"

            });
            modelBuilder.Entity<Admin>().HasData(new Admin
            {
                Id = 1,
                Name = "Admin",
                Password = "admin@123"

            });
        }

        public DbSet<RentCarApi.Model.Customer> Customer { get; set; } = default!;

        public DbSet<RentCarApi.Model.Admin> Admin { get; set; } = default!;
        public DbSet<RentCarApi.Model.Return> Returns { get; set; } = default!;






    }
}
