import {Component} from "react";

export interface MailingProps{


}
export interface MailingState{


}

export class MailingComponent extends Component<MailingProps, MailingState> {

    constructor(props:MailingProps) {
        super(props);
    }

    render() {
        return (
            <div><h1>Mailing</h1></div>
        )}
}