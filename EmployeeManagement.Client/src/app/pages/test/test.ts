import { Component, inject } from '@angular/core';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';
import { ToastrPosition } from '../../enums/toastr-position-type';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  customToastrService = inject(CustomToastrService)

  constructor() {

    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Success);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Info);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Warning);
    // this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Error);

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopRight
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopLeft
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopCenter
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopFullWidth
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomRight
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomLeft
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomCenter
    });

    this.customToastrService.message({
      message: "Test mesaj",
      title: "Test Title",
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomFullWidth
    });
  }

}
