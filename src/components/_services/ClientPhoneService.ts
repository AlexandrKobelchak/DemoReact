import {PhoneDataViewModel} from "../_models/PhoneDataViewModel";


export class ClientPhoneService{

    public phones:PhoneDataViewModel[]=[];
    constructor() {
        this.phones.push(new PhoneDataViewModel("", true));
    }
}