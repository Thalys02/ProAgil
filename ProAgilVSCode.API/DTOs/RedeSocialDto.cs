using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProAgilVSCode.API.DTOs
{
    public class RedeSocialDto
    {
        public int Id { get; set; }
        [Required (ErrorMessage ="O campo {0} é obrigatório")]
        public string Nome { get; set; }
        [Required (ErrorMessage ="O campo {0} é obrigatório")]
        public string URL { get; set; }
       
    }
}
