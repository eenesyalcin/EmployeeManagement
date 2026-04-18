import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { DepartmentAdd } from '../department-add/department-add';
import { CommonModule } from '@angular/common';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentService } from '../../services/department-service';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';
import { ToastrPosition } from '../../enums/toastr-position-type';
import { Base } from '../base/base';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../enums/spinner-type';

@Component({
  selector: 'app-department',
  imports: [CommonModule, DepartmentAdd],
  templateUrl: './department.html',
  styleUrl: './department.scss',
})
export class Department extends Base implements OnInit {

  selectedDepartment = signal<DepartmentModel | null>(null);
  isModalOpen = signal(false);
  modalMode = signal<'add' | 'edit'>('add');

  departmentObject: DepartmentModel = new DepartmentModel();
  masterService = inject(DepartmentService)
  departmentList = signal<DepartmentModel[]>([]);
  customToastrService = inject(CustomToastrService);

  // ngOnInit mekanizması sayfa açıldığında yalnzıca tek bir defa çalıştığı için, trigger mekanizmasının tetiklenmesi ve verilerin yüklenmesi için constructor mekanizmasının kullanılması daha doğrudur.
  constructor(spinner: NgxSpinnerService) {
    super(spinner);

    // "effect" kullanımı bazı yerlerde sıkıntı çıkarabiliyor!!!
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
    this.showSpinner(SpinnerType.BallClipRotate);
    this.masterService.getAllDepartment().subscribe({
      next: (result: any) => {
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.departmentList.set(result);
      },
      error: () => {
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.customToastrService.message({
          message: "Servis dışı",
          title: "Silme İşlemi",
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        });
      }
    })
  }

  onDeleteDepartments(departmentId: number) {
    this.showSpinner(SpinnerType.BallClipRotate);
    this.masterService.deleteDepartmentById(departmentId).subscribe({
      next: (successResult: any) => {
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.customToastrService.message({
          message: successResult,
          title: "Silme İşlemi",
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
        this.masterService.triggerDepartmentRefresh();
      },
      error: (errorResult) => {
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.customToastrService.message({
          message: errorResult.error,
          title: "Silme İşlemi",
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        });
      }
    })
  }

}
