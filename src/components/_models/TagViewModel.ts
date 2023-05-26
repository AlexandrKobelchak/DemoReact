import {Guid} from "guid-typescript";

export class TagViewModel{

    constructor(
        public id : Guid,
        public tagName: string,
        public  isChecked: boolean
    ) {
    }
}