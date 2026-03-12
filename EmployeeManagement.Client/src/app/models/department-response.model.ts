import { DepartmentModel } from "./department.model";


export class DepartmentResponseModel {
    message: string;
    data: DepartmentModel;

    constructor() {
        this.message = "";
        this.data = new DepartmentModel();
    }
}
