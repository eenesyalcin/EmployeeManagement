using EmployeeManagement.Server.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmployeeMasterController : Controller
{
    private readonly EmployeeDbContext _context;
    
    public EmployeeMasterController(EmployeeDbContext context)
    {
        _context = context;
    }
    
    [HttpGet("GetAllEmployees")]
    public IActionResult GetEmployee()
    {
        var employees = _context.Employees.ToList();
        return Ok(employees);
    }

    [HttpPost("AddEmployee")]
    public IActionResult AddEmployee([FromBody] Employee employee)
    {
        _context.Employees.Add(employee);
        _context.SaveChanges();
        return Ok("Çalışan Başarıyla Eklendi");
    }

    [HttpPut("UpdateEmployee")]
    public IActionResult UpdateEmployee([FromBody] Employee employee)
    {
        var existingEmployee = _context.Employees.Find(employee.employeeId);
        if (existingEmployee == null)
        {
            return NotFound("Çalışan Bulunamadı!");
        }

        existingEmployee.name = employee.name;
        existingEmployee.contactNo = employee.contactNo;
        existingEmployee.email = employee.email;
        existingEmployee.city = employee.city;
        existingEmployee.state = employee.state;
        existingEmployee.pincode = employee.pincode;
        existingEmployee.altContact = employee.altContact;
        existingEmployee.designationId = employee.designationId;
        existingEmployee.createdDate = employee.createdDate;
        existingEmployee.modifiedDate = employee.modifiedDate;
        _context.SaveChanges();
        return Ok("Çalışan Başarıyla Güncellendi");
    }

    [HttpDelete("DeleteEmployee/{employeeId}")]
    public IActionResult DeleteEmployee(int employeeId)
    {
        var existingEmployee = _context.Employees.Find(employeeId);
        if (existingEmployee == null)
        {
            return NotFound("Çalışan Bulunamadı!");
        }
        
        _context.Employees.Remove(existingEmployee);
        _context.SaveChanges();
        return Ok("Çalışan Başarıyla Silindi");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO model)
    {
        try
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var user = await _context.Employees.FirstOrDefaultAsync(x => x.email == model.email && x.contactNo == model.contactNo);

            if (user == null)
                return Unauthorized(new { Message = "Geçersiz Kullanıcı Girişi!" });

            return Ok(new
            {
                message = "Giriş Başarılı",
                data = new
                {
                    user.employeeId,
                    user.name,
                    user.email,
                    user.contactNo,
                    user.designationId,
                    user.role
                }
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { Message = ex.Message });
        }
    }
}