import {Guid} from "guid-typescript";

export class PhoneDataViewModel {

    public id;
    constructor(public phone: string = "", public sendSms: boolean = true) {

        this.id = Guid.create();
    }
}

