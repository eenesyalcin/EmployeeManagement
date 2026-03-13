import { Component, inject } from '@angular/core';
import { CustomToastrService } from '../../services/custom-toastr-service';
import { ToastrMessageType } from '../../enums/toastr-message-type';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  customToastrService = inject(CustomToastrService)

  constructor() {

    this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Success);
    this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Info);
    this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Warning);
    this.customToastrService.message("Test mesaj", "Test Title", ToastrMessageType.Error);

  }

}
