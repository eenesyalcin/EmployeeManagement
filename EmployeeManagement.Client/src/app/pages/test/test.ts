import { Component, inject } from '@angular/core';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';
import { ToastrPosition } from '../../enums/toastr-position-type';
import { SpinnerType } from '../../enums/spinner-type';
import { Base } from '../base/base';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test extends Base {

  customToastrService = inject(CustomToastrService);

  constructor(spinner: NgxSpinnerService) {
    super(spinner);

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

  ballClipRotateShowSpinner() {
    this.showSpinner(SpinnerType.BallClipRotate);
  }

  ballSpinClockwiseShowSpinner() {
    this.showSpinner(SpinnerType.BallSpinClockwise);
  }

  timerShowSpinner() {
    this.showSpinner(SpinnerType.Timer);
  }

}
