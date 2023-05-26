import {ClientPhoneService} from "../_services/ClientPhoneService";
import {SocialNetworkService} from "../_services/SocialNetworkService";
import {ClientTagService} from "../_services/ClientTagService";


export class Unit{

    static instance = new Unit();

    private phoneService : ClientPhoneService = new ClientPhoneService();
    private socialService : SocialNetworkService = new SocialNetworkService();
    private tagService : ClientTagService=new ClientTagService();

    private constructor() {
    }

    public static getPhoneService () : ClientPhoneService { return this.instance.phoneService;}
    public static getSocialService () : SocialNetworkService { return this.instance.socialService;}
    public static getTagService () : ClientTagService { return this.instance.tagService;}
}