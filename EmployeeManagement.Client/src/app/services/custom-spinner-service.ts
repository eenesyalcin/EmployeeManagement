import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerOptions } from '../models/spinner-options';

@Injectable({
  providedIn: 'root',
})
export class CustomSpinnerService {

  spinnerService = inject(NgxSpinnerService);
  currentSpinnerOptions: SpinnerOptions = new SpinnerOptions();

  showSpinner(options?: Partial<SpinnerOptions>, duration?: number) {
    this.currentSpinnerOptions = new SpinnerOptions();

    // Eğer varsa gelen değerleri üstüne yazıyoruz.
    if (options) {
      Object.assign(this.currentSpinnerOptions, options);
    }

    this.spinnerService.show(undefined, {
      bdColor: this.currentSpinnerOptions.bdColor,
      size: this.currentSpinnerOptions.size,
      color: this.currentSpinnerOptions.color,
      type: this.currentSpinnerOptions.type,
      fullScreen: this.currentSpinnerOptions.fullScreen
    });

    if (duration) {
      setTimeout(() => {
        this.hideSpinner();
      }, duration);
    }
  }

  hideSpinner() {
    this.spinnerService.hide();
  }

}
