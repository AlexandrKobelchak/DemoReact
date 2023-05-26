import {Component} from "react";
import {TagViewModel} from "../../_models/TagViewModel";
import {ClientTagsComponent} from "../client-tags/client-tags-component";
import "./client-tag-switch-component.scss";

interface TagSwitchProps {

    tags:TagViewModel[];
    index:number;
    parent: ClientTagsComponent;
}

interface TagSwitchState {

    tag: TagViewModel;
}

export class ClientTagSwitchComponent extends  Component<TagSwitchProps, TagSwitchState>{

    constructor(props:TagSwitchProps) {
        super(props);
        this.state = {tag: props.tags[props.index]};
    }
    render() {
        let tag: TagViewModel = this.props.tags[this.props.index];
        return <div className="Switch">
            <input type="checkbox" id={tag.id.toString()} className="checkbox" name={tag.tagName}
                defaultChecked={this.state.tag.isChecked} onChange={this.handleChange}/>
            <label htmlFor={tag.id.toString()}>{tag.tagName}</label>
        </div>
    }

    handleChange = () => {
        this.props.tags[this.props.index].isChecked = !this.props.tags[this.props.index].isChecked;
        this.setState({tag: this.props.tags[this.props.index]});
        this.props.parent.update();
    }
}