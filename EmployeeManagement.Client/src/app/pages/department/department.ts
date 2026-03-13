import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { DepartmentAdd } from '../department-add/department-add';
import { CommonModule } from '@angular/common';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentService } from '../../services/department-service';

@Component({
  selector: 'app-department',
  imports: [CommonModule, DepartmentAdd],
  templateUrl: './department.html',
  styleUrl: './department.scss',
})
export class Department implements OnInit {

  selectedDepartment = signal<DepartmentModel | null>(null);
  isModalOpen = signal(false);
  modalMode = signal<'add' | 'edit'>('add');

  departmentObject: DepartmentModel = new DepartmentModel();
  masterService = inject(DepartmentService)
  departmentList = signal<DepartmentModel[]>([]);

  // ngOnInit mekanizması sayfa açıldığında yalnzıca tek bir defa çalıştığı için, trigger mekanizmasının tetiklenmesi ve verilerin yüklenmesi için constructor mekanizmasının kullanılması daha doğrudur.
  constructor() {
    effect(() => {
      this.masterService.departmentRefresh();
      this.getAllDepartments();
    })
  }

  // ngOnInit mekanizması sayfa açıldığında yalnızca tek bir defa çalışır.
  ngOnInit(): void {

  }

  openModal() {
    this.selectedDepartment.set(null);
    this.modalMode.set("add");
    this.isModalOpen.set(true);
  }

  openEditModal(department: DepartmentModel) {
    this.selectedDepartment.set({ ...department });
    this.modalMode.set("edit");
    this.isModalOpen.set(true);
  }


  getAllDepartments() {
    this.masterService.getAllDepartment().subscribe({
      next: (result: any) => {
        this.departmentList.set(result);
      }
    })
  }

  onDeleteDepartments(departmentId: number) {
    this.masterService.deleteDepartmentById(departmentId).subscribe({
      next: (result: any) => {
        alert("Departman başarıyla silindi.");
        this.masterService.triggerDepartmentRefresh();
      },
      error: (error) => {
        alert(error.error);
      }
    })
  }

}
