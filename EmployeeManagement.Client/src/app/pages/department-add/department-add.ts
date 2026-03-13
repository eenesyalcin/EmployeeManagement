import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, model } from '@angular/core';
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

  selectedDepartment = input<DepartmentModel | null>(null);
  modalMode = input<'add' | 'edit'>('add');
  isOpen = model(false);

  departmentObject: DepartmentModel = new DepartmentModel();
  departmentService = inject(DepartmentService);

  constructor() {
    effect(() => {
      const mode = this.modalMode();
      const department = this.selectedDepartment();
      if(mode === "edit" && department){
        this.departmentObject = { ...department };
      }else{
        this.departmentObject = new DepartmentModel();
      }
    }) 
  }

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

  onUpdateDepartment() {
    this.departmentService.updateDepartment(this.departmentObject).subscribe({
      next: (result: DepartmentResponseModel) => {
        alert(result.message);
        this.departmentService.triggerDepartmentRefresh();
        this.close();
      },
      error: (error) => {
        alert(error.error);
        this.close();
      }
    })
  }

  onSubmit(){
    if(this.modalMode() === "add"){
      this.onSaveDepartment();
    }else{
      this.onUpdateDepartment();
    }
  }

}
