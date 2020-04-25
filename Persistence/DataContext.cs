using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Value> Value { get; set; }

        protected override void OnModelCreating(ModelBuilder builder){

            builder.Entity<Value>().HasData(

                new Value {Id = 1, Name = "stephen"},
                new Value {Id = 2, Name = "corey"},
                new Value {Id = 3, Name = "waller"}
            );

            
        }
    }
}
