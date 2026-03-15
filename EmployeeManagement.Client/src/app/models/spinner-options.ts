import { SpinnerSizeType } from "../enums/spinner-size-type";
import { SpinnerType } from "../enums/spinner-type";

export class SpinnerOptions{
    bdColor: string;
    size: SpinnerSizeType;
    color: string;
    type: SpinnerType;
    fullScreen: boolean;
    messageColor: string;
    message: string;

    constructor() {
        this.bdColor = "rgba(0,0,0,0.8)";
        this.size = SpinnerSizeType.Default;
        this.color = "#fff";
        this.type = SpinnerType.BallClipRotate;
        this.fullScreen = true;
        this.messageColor = "white";
        this.message = "Lütfen Bekleyiniz..."
    }
}
