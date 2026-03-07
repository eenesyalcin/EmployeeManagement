using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagement.Server.Model;

[Table("employeeTbl")]
public class Employee
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int employeeId { get; set; }
    
    [Required, MaxLength(50)]
    public string name { get; set; } = string.Empty;
    
    [Required, MaxLength(10), MinLength(10)]
    public string contactNo { get; set; } = string.Empty;
    
    public string email { get; set; } = string.Empty;
    
    public string city { get; set; } = string.Empty;
    
    public string state { get; set; } = string.Empty;
    
    public string pincode { get; set; } = string.Empty;
    
    public string altContact { get; set; } = string.Empty;
    
    public int designationId { get; set; }
    
    public DateTime createdDate { get; set; }
    
    public DateTime modifiedDate { get; set; }
    
    public string role { get; set; } = string.Empty;
}

public class LoginDTO
{
    [Required]
    [EmailAddress]
    public string email { get; set; } = string.Empty;
    
    [Required]
    public string contactNo { get; set; } = string.Empty;
}