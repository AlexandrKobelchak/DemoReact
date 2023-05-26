import {SocialNetworkViewModel} from "../_models/SocialNetworkViewModel";
import {Guid} from "guid-typescript";


export class SocialNetworkService {

    networks: SocialNetworkViewModel[]=[];
    constructor() {

       this.networks.push(new SocialNetworkViewModel(Guid.create(), "Viber", false));
       this.networks.push(new SocialNetworkViewModel(Guid.create(), "Telegram", false));
       this.networks.push(new SocialNetworkViewModel(Guid.create(), "WhatsApp", false));
    }
}