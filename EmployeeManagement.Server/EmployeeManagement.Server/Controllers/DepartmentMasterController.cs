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
        bool exists = _context.Departments.Any(d => d.departmentName.ToLower() == department.departmentName.ToLower());

        if (exists)
        {
            return BadRequest("Aynı isimde departman mevcut!");
        }
        
        _context.Departments.Add(department);
        _context.SaveChanges();
        return Ok(new
        {
            message = "departmanı başarıyla kaydedildi.",
            data = department
        });
    }

    [HttpPut("UpdateDepartment")]
    public IActionResult UpdateDepartment([FromBody] Department department)
    {
        bool isDepartmentNameExists = _context.Departments.Any(d => d.departmentName.ToLower() == department.departmentName.ToLower());
        if (isDepartmentNameExists)
        {
            return BadRequest("Aynı isimde departman mevcut!");
        }
        
        var departmentFromDatabase = _context.Departments.Find(department.departmentId);
        if (departmentFromDatabase == null)
        {
            return NotFound("Departman bulunamadı!");
        }

        departmentFromDatabase.departmentName = department.departmentName;
        departmentFromDatabase.isActive = department.isActive;
        _context.SaveChanges();
        return Ok(new
        {
            message = "departmanı başarıyla güncellendi.",
            data = departmentFromDatabase
        });
    }

    [HttpDelete("DeleteDepartment/{departmentId}")]
    public IActionResult DeleteDepartment(int departmentId)
    {
        var existingDepartment = _context.Departments.Find(departmentId);
        if (existingDepartment == null)
        {
            return NotFound("Departman Bulunamadı!");
        }
        
        bool hasRelatedDesignation = _context.Designations.Any(x => x.departmentId == departmentId);
        if (hasRelatedDesignation)
        {
            return BadRequest("Bu departmana bağlı unvan kayıtları olduğu için silinemez.");
        }
        
        _context.Departments.Remove(existingDepartment);
        _context.SaveChanges();
        return Ok("Departman Başarıyla Silindi");
    }
    
}