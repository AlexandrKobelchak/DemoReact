import {Guid} from "guid-typescript";

export class SocialNetworkViewModel  {

    constructor(
        public id: Guid,
        public name: string,
        public isChecked: boolean)
    {
    }
}