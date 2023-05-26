import React, {Component} from "react";
import "./add-phone-component.scss";
import {PhoneComponent} from "../phone/phone-component";
import {PhoneDataViewModel} from "../../_models/PhoneDataViewModel";
import {Unit} from "../../_unit/unit";
import 'react-phone-input-2/lib/style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




export interface AddPhoneProps{

}
export interface AddPhoneState{

    phones:PhoneDataViewModel[];
}

export class AddPhoneComponent extends Component<AddPhoneProps,  AddPhoneState>
{

    constructor(props:AddPhoneProps) {
        super(props);

        this.addPhone = this.addPhone.bind(this);
        this.state={phones: Unit.getPhoneService().phones};
        this.update=this.update.bind(this);
    }

    public addPhone(){

        this.state.phones.push(new PhoneDataViewModel("",false));
        this.setState(this.state);
    }

    public update(){

        this.setState(this.state);
    }

    render() {
        return(
            <div>
                <div className="row ">
                    <div className="col">
                     <button onClick={this.addPhone} className="btn btn-light btn-icon" type="button">
                        <span className="icon"><FontAwesomeIcon icon={["fas", "plus"]} /></span>
                         <span style={{marginLeft: "10px"}}>Добавить Номер</span>
                        </button>  {
                            this.state.phones.map((phone:PhoneDataViewModel, index:number, arr:PhoneDataViewModel[])=>{
                                return  <PhoneComponent
                                            key={["_phone_", index].join("")}
                                            index={index}
                                            parent={this}
                                        />
                                })
                            }
                    </div>
                </div>
            </div>
        )}
}