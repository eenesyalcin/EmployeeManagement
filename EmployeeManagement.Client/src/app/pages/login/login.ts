import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginObject: any = {
    email: '',
    contactNo: ''
  }

  http = inject(HttpClient);
  router = inject(Router);

  onLogin(){
    this.http.post("http://localhost:5073/api/EmployeeMaster/login", this.loginObject).subscribe({
      next: (result: any) => {
        localStorage.setItem('employeeLoginUser', JSON.stringify(result.data));
        this.router.navigateByUrl("dashboard");
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    })
  }

}
