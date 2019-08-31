// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using ProAgil.Repository;

// namespace ProAgilVSCode.API.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class PalestranteController:ControllerBase
//     {
//         public IProAgilRepository _repo { get; }
//         public PalestranteController(IProAgilRepository repo)
//         {
//             _repo = repo;
//         }
//         [HttpGet]
//         public async Task<IActionResult> Get()
//         {
//             try
//             {
//                 var results = await _repo.GetPalestranteAsync(PalestranteId, true);
//                 return Ok(results);
//             }
//             catch (System.Exception)
//             {
                
//                 return this.StatusCode(StatusCodes.Status500InternalServerError,"Banco Dados Falhou, By PalestranteController");
//             }    
//         }
//     }
// }