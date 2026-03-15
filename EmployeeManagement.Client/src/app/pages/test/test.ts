import { Component, inject } from '@angular/core';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';
import { ToastrPosition } from '../../enums/toastr-position-type';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomSpinnerService } from '../../services/custom-spinner-service';
import { SpinnerSizeType } from '../../enums/spinner-size-type';
import { SpinnerType } from '../../enums/spinner-type';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  customToastrService = inject(CustomToastrService);
  customSpinnerService = inject(CustomSpinnerService);

  constructor() {
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Success);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Info);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Warning);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Error);
  }

  showToastrTopRight() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopRight
    });
  }

  showToastrTopLeft() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopLeft
    });
  }

  showToastrTopCenter() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopCenter
    });
  }

  showToastrTopFullWidth() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopFullWidth
    });
  }

  showToastrBottomRight() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomRight
    });
  }

  showToastrBottomLeft() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomLeft
    });
  }

  showToastrBottomCenter() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomCenter
    });
  }

  showToastrBottomFullWidth() {
    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomFullWidth
    });
  }

  showSpinnerManuel() {
    this.customSpinnerService.showSpinner({
      bdColor: 'rgba(0, 0, 0, 0.5)',
      size: SpinnerSizeType.Large,
      color: '#00ffcc',
      type: SpinnerType.Timer,
      fullScreen: false,
      messageColor: 'red',
      message: 'Veriler yükleniyor...'
    });

    setTimeout(() => {
      this.customSpinnerService.hideSpinner();
    }, 3000);
  }

  showSpinnerWithDurationParameter() {
    this.customSpinnerService.showSpinner({
      size: SpinnerSizeType.Medium,
      type: SpinnerType.Timer,
    }, 3000);
  }

}
