import {Component} from "react";

export interface BusinessProps{


}
export interface BusinessState{


}

export class BusinessComponent extends Component<BusinessProps, BusinessState> {

    constructor(props:BusinessProps) {
        super(props);
    }

    render() {
        return (
            <div><h1>Business</h1></div>
        )}
}