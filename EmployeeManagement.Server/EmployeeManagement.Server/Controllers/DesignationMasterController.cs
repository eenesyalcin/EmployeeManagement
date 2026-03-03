using EmployeeManagement.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DesignationMasterController : Controller
{
    private readonly EmployeeDbContext _context;
    
    public DesignationMasterController(EmployeeDbContext context)
    {
        _context = context;
    }

    [HttpGet("GetAllDesignations")]
    public IActionResult GetAllDesignations()
    {
        var designations = _context.Designations.ToList();
        return Ok(designations);
    }

    [HttpPost("AddDesignation")]
    public IActionResult AddDesignation([FromBody] Designation designation)
    {
        _context.Designations.Add(designation);
        _context.SaveChanges();
        return Ok("Designation Başarıyla Eklendi");
    }

    [HttpPut("UpdateDesignation")]
    public IActionResult UpdateDesignation([FromBody] Designation designation)
    {
        var existingDesignation = _context.Designations.Find(designation.departmentId);
        if (existingDesignation == null)
        {
            return NotFound("Designation Bulunamadı!");
        }
        
        existingDesignation.designationId = designation.designationId;
        existingDesignation.departmentId = designation.departmentId;
        existingDesignation.designationName = designation.designationName;
        _context.SaveChanges();
        return Ok();
    }

    [HttpDelete("DeleteDesignation/{designationId}")]
    public IActionResult DeleteDesignation(int designationId)
    {
        var existingDesignation = _context.Designations.Find(designationId);
        if (existingDesignation == null)
        {
            return NotFound("Designation Bulunamadı!");
        }
        
        _context.Designations.Remove(existingDesignation);
        _context.SaveChanges();
        return Ok("Designation Başarıyla Silindi");
    }
}