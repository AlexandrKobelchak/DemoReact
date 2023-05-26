import {Component} from "react";

export interface PaymentsProps{


}
export interface PaymentsState{


}

export class PaymentsComponent extends Component<PaymentsProps, PaymentsState> {

    constructor(props:PaymentsProps) {
        super(props);
    }


    render() {
        return (
            <div><h1>Payments</h1></div>
        )}
}