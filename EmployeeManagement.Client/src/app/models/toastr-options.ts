import { ToastrMessageType } from "../enums/toastr-message-type"
import { ToastrPosition } from "../enums/toastr-position-type"

export class ToastrOptions {
    message: string;
    title: string;
    messageType: ToastrMessageType;
    position: ToastrPosition;

    constructor() {
        this.message = "";
        this.title = "";
        this.messageType = ToastrMessageType.Info;
        this.position = ToastrPosition.TopRight;
    }
}