using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProAgilVSCode.API.DTOs
{
    public class PalestranteDto
    {

        public int Id { get; set; }
        [Required(ErrorMessage ="Campo {0} Obrigatório")]
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }
        public string ImageURL { get; set; }
        [Phone(ErrorMessage ="Informe um telefone!")]
        public string Telefone { get; set; }
        public string Email { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<EventoDto> Eventos { get; set; }
    }
}
