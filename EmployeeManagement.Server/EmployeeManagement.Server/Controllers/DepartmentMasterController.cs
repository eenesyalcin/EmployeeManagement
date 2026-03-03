using EmployeeManagement.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DepartmentMasterController : ControllerBase
{
    private readonly EmployeeDbContext _context;
    
    public DepartmentMasterController(EmployeeDbContext context)
    {
        _context = context;
    }
    
    [HttpGet("GetAllDepartments")]
    public IActionResult GetDepartment()
    {
        var departments = _context.Departments.ToList();
        return Ok(departments);
    }

    [HttpPost("AddDepartment")]
    public IActionResult AddDepartment([FromBody] Department department)
    {
        _context.Departments.Add(department);
        _context.SaveChanges();
        return Ok("Departman Başarıyla Eklendi");
    }

    [HttpPut("UpdateDepartment")]
    public IActionResult UpdateDepartment([FromBody] Department department)
    {
        var existingDepartment = _context.Departments.Find(department.departmentId);
        if (existingDepartment == null)
        {
            return NotFound("Departman Bulunamadı!");
        }

        existingDepartment.departmentName = department.departmentName;
        existingDepartment.isActive = department.isActive;
        _context.SaveChanges();
        return Ok("Departman Başarıyla Güncellendi");
    }

    [HttpDelete("DeleteDepartment/{departmentId}")]
    public IActionResult DeleteDepartment(int departmentId)
    {
        var existingDepartment = _context.Departments.Find(departmentId);
        if (existingDepartment == null)
        {
            return NotFound("Departman Bulunamadı!");
        }
        
        _context.Departments.Remove(existingDepartment);
        _context.SaveChanges();
        return Ok("Departman Başarıyla Silindi");
    }
    
}