using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WBL;
using Entity;
namespace WebApp.Pages.Inquilino
{
    public class EditModel : PageModel
    {

        private readonly IInquilinoService inquilinoService;

        


        public EditModel(IInquilinoService inquilinoService)
        {
            this.inquilinoService = inquilinoService;
            
        }
        [BindProperty]
        public InquilinoEntity Entity { get; set; } = new InquilinoEntity();

        

        public async Task<IActionResult> OnGet()
        {
            try
            {
                if (id.HasValue)
                {
                    Entity = await InquilinoService.GetByID(new() { Id_TipoInquiulino = id });
                }
                
                return Page();
            }
            catch (Exception ex)
            {

                return Content(content: ex.Message);
            }
        }

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                if (Entity.Id_TipoInquilino.HasValue)
                {
                    //actualizar
                    var result = await inquilinoService.Update(Entity);
                    if (result.CodeError != 0) throw new Exception(message: result.MsgError);
                    TempData["Msg"] = "Se actualizo correctamente";
                }

                else
                {

                    //nuevo
                    var result = await inquilinoService.Create(Entity);
                    if (result.CodeError != 0) throw new Exception(message: result.MsgError);
                    TempData["Msg"] = "Se agrego correctamente";

                }
                return RedirectToPage("Grid");
            }
            catch (Exception ex)
            {

                return Content(content: ex.Message);
            }
        }

    }
}

