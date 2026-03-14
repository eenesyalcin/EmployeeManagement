import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrMessageType } from '../enums/toastr-message-type';
import { ToastrOptions } from '../models/toastr-options';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {

  toastr = inject(ToastrService);

  message(toastrOptions: ToastrOptions) {
    this.toastr[toastrOptions.messageType](
      toastrOptions.message,
      toastrOptions.title,
      { positionClass: toastrOptions.position }
    )
  }

}
