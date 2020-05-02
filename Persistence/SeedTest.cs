using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class SeedTest
    {
        public static void SeedTheTest(DataContext context){

            if(!context.Tester.Any()){

                var TestList = new List<Test>{

                    new Test { Number = 1, AnotherNumbr = 2},
                    new Test { Number = 3, AnotherNumbr = 4},
                    new Test { Number = 5, AnotherNumbr = 6},
                    new Test { Number = 7, AnotherNumbr = 8},
                    new Test { Number = 9, AnotherNumbr = 10},
                    new Test { Number = 11, AnotherNumbr = 12}, 
                };
                context.Tester.AddRange(TestList); 
                context.SaveChanges(); 
            }
        }        
    }
}