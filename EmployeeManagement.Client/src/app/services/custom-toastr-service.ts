import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrMessageType } from '../enums/toastr-message-type';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {

  toastr = inject(ToastrService);

  message(message: string, title: string, messageType: ToastrMessageType) {
    this.toastr[messageType](message, title);
  }

}
