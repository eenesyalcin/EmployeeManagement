import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentResponseModel } from '../../models/department-response.model';
import { DepartmentService } from '../../services/department-service';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';
import { ToastrPosition } from '../../enums/toastr-position-type';
import { CustomSpinnerService } from '../../services/custom-spinner-service';
import { SpinnerSizeType } from '../../enums/spinner-size-type';

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
  customToastrService = inject(CustomToastrService);
  customSpinnerService = inject(CustomSpinnerService);

  constructor() {
    effect(() => {
      const mode = this.modalMode();
      const department = this.selectedDepartment();
      if (mode === "edit" && department) {
        this.departmentObject = { ...department };
      } else {
        this.departmentObject = new DepartmentModel();
      }
    })
  }

  close() {
    this.isOpen.set(false);
  }

  onSaveDepartment() {
    this.customSpinnerService.showSpinner({
      size: SpinnerSizeType.Medium,
    });
    this.departmentService.saveDepartment(this.departmentObject).subscribe({
      next: (successResult: DepartmentResponseModel) => {
        this.customSpinnerService.hideSpinner();
        this.customToastrService.message({
          message: successResult.message,
          title: "Ekleme İşlemi",
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
        this.departmentService.triggerDepartmentRefresh();
        this.close();
      },
      error: (errorResult) => {
        this.customSpinnerService.hideSpinner();
        this.customToastrService.message({
          message: errorResult.error,
          title: "Ekleme İşlemi",
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        });
        this.close();
      }
    })
  }

  onUpdateDepartment() {
    this.customSpinnerService.showSpinner({
      size: SpinnerSizeType.Medium,
    });
    this.departmentService.updateDepartment(this.departmentObject).subscribe({
      next: (successResult: DepartmentResponseModel) => {
        this.customSpinnerService.hideSpinner();
        this.customToastrService.message({
          message: successResult.message,
          title: "Güncelleme İşlemi",
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
        this.departmentService.triggerDepartmentRefresh();
        this.close();
      },
      error: (errorResult) => {
        this.customSpinnerService.hideSpinner();
        this.customToastrService.message({
          message: errorResult.error,
          title: "Güncelleme İşlemi",
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        });
        this.close();
      }
    })
  }

  onSubmit() {
    if (this.modalMode() === "add") {
      this.onSaveDepartment();
    } else {
      this.onUpdateDepartment();
    }
  }

}
