import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { DepartmentModel } from '../models/department.model';
import { Observable } from 'rxjs';
import { DepartmentResponseModel } from '../models/department-response.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  baseUrl: string = "http://localhost:5073/api/";
  http = inject(HttpClient);
  departmentRefresh = signal(0);

  triggerDepartmentRefresh() {
    this.departmentRefresh.update(value => value + 1);
  }

  getAllDepartment() {
    return this.http.get(this.baseUrl + "DepartmentMaster/GetAllDepartments");
  }

  saveDepartment(object: DepartmentModel): Observable<DepartmentResponseModel> {
    return this.http.post<DepartmentResponseModel>(this.baseUrl + "DepartmentMaster/AddDepartment", object);
  }

}
