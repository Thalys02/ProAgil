using AutoMapper;
using ProAgil.Domain;
using ProAgilVSCode.API.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAgilVSCode.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            //EventoDto = Classe de Evento para transferencia apenas dos dados necessarios, DTO(Data Transfer Object)
            //OBS: No caso das inversões de mapeamento podem ser feitas de 2 formas rescrevento o codigo Exemplo:linhas 28 e 29! ou utilizando o ReverseMap().
            CreateMap<Evento, EventoDto>().ForMember(dest => dest.Palestrantes, opt =>
            {
                opt.MapFrom(src => src.PalestrantesEventos.Select(x => x.Palestrante).ToList());
            }).ReverseMap();

            CreateMap<Palestrante, PalestranteDto>().ForMember(dest => dest.Eventos, opt =>
            {
                opt.MapFrom(src => src.PalestrantesEventos.Select(x => x.Evento).ToList());
            }).ReverseMap();


            CreateMap<Lote, LoteDto>();
            CreateMap<LoteDto, Lote>();

            CreateMap<RedeSocial, RedeSocialDto>().ReverseMap();
        }
    }
}
