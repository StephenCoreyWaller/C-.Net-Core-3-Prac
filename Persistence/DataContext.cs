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

        public DbSet<Activity> Activities { get; set; }

        public DbSet<Test> Tester {get; set; }

        protected override void OnModelCreating(ModelBuilder builder){

            builder.Entity<Value>().HasData(

                new Value {Id = 1, Name = "stephen"},
                new Value {Id = 2, Name = "corey"},
                new Value {Id = 3, Name = "waller"},
                new Value {Id = 4, Name = "Daniel"}
            );}
    }
}
