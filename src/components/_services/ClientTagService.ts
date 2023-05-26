import {TagViewModel} from "../_models/TagViewModel";
import {Guid} from "guid-typescript";

export class ClientTagService{

    public clientTags: TagViewModel[];

    constructor() {
        this.clientTags=[
            new TagViewModel(Guid.create(), "VIP", true),
            new TagViewModel(Guid.create(), "Горнолыжный отдых", false),
            new TagViewModel(Guid.create(), "Постоянный клиент", true),
            new TagViewModel(Guid.create(), "Эконом", true),
            new TagViewModel(Guid.create(), "Активный отдых", false),
            new TagViewModel(Guid.create(), "Ездит один", true),
            new TagViewModel(Guid.create(), "Семья", true),
            new TagViewModel(Guid.create(), "Экскурсионный отдых", false),
        ];
    }
}