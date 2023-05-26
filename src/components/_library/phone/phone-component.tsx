import {Component, SyntheticEvent} from "react";
import PhoneInput from "react-phone-input-2";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import "./phone-component.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PhoneDataViewModel} from "../../_models/PhoneDataViewModel";
import {AddPhoneComponent} from "../add-phone/add-phone-component";
import {SocialNetworkService} from "../../_services/SocialNetworkService";
import {SocialNetworkViewModel} from "../../_models/SocialNetworkViewModel";
import {Unit} from "../../_unit/unit";

export interface PhoneProps{

    parent:AddPhoneComponent;
    index: number;
}
export interface PhoneState{

    phones:PhoneDataViewModel[];
}

export class PhoneComponent extends Component<PhoneProps,  PhoneState> {
    constructor(props:PhoneProps) {
        super(props);
        this.state={phones: Unit.getPhoneService().phones}
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleRemovePhone = this.handleRemovePhone.bind(this);
        this.handleCheckboxSocialChange = this.handleCheckboxSocialChange.bind(this);
    }
    public handleCheckboxSocialChange(e:SyntheticEvent){

        // @ts-ignore
        let id = e.target.id;
        //debugger;
    }
    public handleRemovePhone(e:SyntheticEvent){

        delete Unit.getPhoneService().phones[this.props.index];
        this.props.parent.update( );
    }

    public handleCheckboxChange(e:SyntheticEvent){
        // @ts-ignore
        Unit.getPhoneService().phones[this.props.index].sendSms=e.target.checked;
    }

    public handlePhoneChange(str:string){

        Unit.getPhoneService().phones[this.props.index].phone=str;
    }

    render() {

        let smsId = "sms_" + this.props.index;
        return(
            <div id={"phone_" + this.props.index} className="row" style={{marginTop:"20px"}}>
                <div className="col-md-1 ">
                    <button id={"r_"+ this.props.index} className="btn btn-light btn-icon" onClick={this.handleRemovePhone}><FontAwesomeIcon icon={"remove"}/></button>
                </div>
                <div className="col-md-6">
                    <PhoneInput
                    country={'ua'}
                    value={this.state.phones[this.props.index].phone}
                    onChange={this.handlePhoneChange}
                    containerClass="my-container-class"
                    inputClass="my-input-class"
                    containerStyle={{
                        left:"-10px"
                    }}
                    inputStyle={{
                        background: "white" }}
                    />
                <div className="row">
                    <div className="offset-5">
                    <input type="checkbox" onChange={this.handleCheckboxChange} className="checkbox"
                           id={smsId} defaultChecked={this.state.phones[this.props.index].sendSms}
                           required/>
                    <label htmlFor={smsId}>Send SMS</label>
                    </div>
                </div>
                </div>
                <div className="col-md-5 row social">
                    {
                        Unit.getSocialService().networks.map((svm : SocialNetworkViewModel, index) => {
                            let id= ["_", svm.id, "_", this.props.index, "_", svm.name,].join("");
                            return (
                                <div className="col-md-6" key={"_social_"+ index}>
                                    <input type="checkbox" onChange={this.handleCheckboxSocialChange} className="checkbox"
                                           id={id} defaultChecked={svm.isChecked}
                                           required/>
                                    <label htmlFor={id}>{svm.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>)
    }
}
