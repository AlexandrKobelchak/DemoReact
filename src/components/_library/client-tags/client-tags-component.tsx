import {Component} from "react";
import {ClientTagService} from "../../_services/ClientTagService";
import {TagViewModel} from "../../_models/TagViewModel";
import {ClientTagSwitchComponent} from "../client-tag-switch/client-tag-switch-component";
import {Unit} from "../../_unit/unit";


interface ClientTagsProps {

    parent:Component;
}

interface ClientTagsService {

    tags: TagViewModel[];
}

export class ClientTagsComponent extends Component<ClientTagsProps, ClientTagsService>{

    constructor(props :  ClientTagsProps) {
        super(props);
        this.state={tags: Unit.getTagService().clientTags}
    }

    public update = ()=>{

        this.setState(this.state);
        // @ts-ignore
        this.props.parent.update();
    }

    render() {
        return (
            <div className="row" style={{textAlign:"left"}}>
                {
                    this.state.tags.map((tag, index, array)=>{
                        return (
                            <div className="col-md-6 float-left" key = {"_"+ tag.id}>
                                <ClientTagSwitchComponent tags={array} index={index} parent={this}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}