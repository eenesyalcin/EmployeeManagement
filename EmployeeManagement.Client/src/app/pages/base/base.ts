import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../enums/spinner-type';


export class Base {

  constructor(private spinner: NgxSpinnerService) {
     
  }

  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType);
    setTimeout(() => this.hideSpinner(spinnerNameType), 3000);
  }

  hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType);
  }

}
