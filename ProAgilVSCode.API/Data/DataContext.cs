using Microsoft.EntityFrameworkCore;
using ProAgilVSCode.API.Model;

namespace ProAgilVSCode.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext (DbContextOptions<DataContext> options): base (options) {}       

        public DbSet<Evento> Eventos  {get;set;}
        
    }
}