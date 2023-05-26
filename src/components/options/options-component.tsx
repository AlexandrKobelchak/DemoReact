import {Component} from "react";

export interface OptionsProps{


}
export interface OptionsState{


}

export class OptionsComponent extends Component<OptionsProps, OptionsState> {

    constructor(props:OptionsProps) {
        super(props);
    }

    render() {
        return (
            <div><h1>Options</h1></div>
        )}
}