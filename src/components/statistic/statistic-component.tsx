import {Component} from "react";

export interface StatisticProps{


}
export interface StatisticState{


}

export class StatisticComponent extends Component<StatisticProps, StatisticState> {

    constructor(props:StatisticProps) {
        super(props);
    }


    render() {
        return (
            <div><h1>Statistic</h1></div>
        )}
}