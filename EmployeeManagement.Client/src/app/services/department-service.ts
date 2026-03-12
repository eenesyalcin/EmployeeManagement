import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  baseUrl: string = "http://localhost:5073/api/";
  http = inject(HttpClient);

  getAllDepartment() {
    return this.http.get(this.baseUrl + "DepartmentMaster/GetAllDepartments");
  }

}
