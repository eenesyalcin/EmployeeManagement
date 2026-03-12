import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentResponseModel } from '../../models/department-response.model';
import { DepartmentService } from '../../services/department-service';

@Component({
  selector: 'department-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './department-add.html',
  styleUrl: './department-add.scss',
})
export class DepartmentAdd {

  isOpen = model(false);

  departmentObject: DepartmentModel = new DepartmentModel();
  departmentService = inject(DepartmentService);

  close() {
    this.isOpen.set(false);
  }

  onSaveDepartment() {
    this.departmentService.saveDepartment(this.departmentObject).subscribe({
      next: (result: DepartmentResponseModel) => {
        alert(result.data.departmentName + " " + result.message);
        this.departmentService.triggerDepartmentRefresh();
        this.close();
      },
      error: (error) => {
        alert(error.error);
        this.close();
      }
    })
  }

}
