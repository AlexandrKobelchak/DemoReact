import {Component} from "react";
import {TagViewModel} from "../_models/TagViewModel";
import {ClientTagsComponent} from "../_library/client-tags/client-tags-component";
import {ClientTagService} from "../_services/ClientTagService";
import { Guid } from "guid-typescript";

import {AddPhoneComponent} from "../_library/add-phone/add-phone-component";
import {Unit} from "../_unit/unit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./client-component.scss";

export interface ClientProps{

}

export interface ClientState{

    clientTagService: ClientTagService;
}

export class ClientComponent extends Component<ClientProps, ClientState> {

    phone: string = "";

    constructor(props:ClientProps) {
        super(props);
        this.state = {clientTagService:Unit.getTagService()};
    }


    public update=()=>{
        this.setState(this.state);
    }

    addTag = ()=> {
        this.state.clientTagService.clientTags.push(new TagViewModel(Guid.create(), "Test", true));
        this.update();
    }

    checkChange = ()=>{

        this.state.clientTagService.clientTags[0].isChecked = ! this.state.clientTagService.clientTags[0].isChecked;
        this.update();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6"><h1>Новый клиент</h1></div>
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <div className="form-group row m-t-20">
                        <label htmlFor="lastName" className="col-3 col-form-label">Фамилия</label>
                        <div className="col-8">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={["fas", "edit"]} />
                                </span>
                                <input id="lastName" name="lastName" type="text" className="form-control"
                                       placeholder="Введите фамилию здесь" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row  m-t-20">
                        <label htmlFor="firstName" className="col-3 col-form-label">Имя</label>
                        <div className="col-8">
                            <div className="input-group">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={["fas", "edit"]} />
                                    </div>
                                <input id="firstName" name="firstName" type="text" className="form-control"
                                       placeholder="Введите имя здесь" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row  m-t-20">
                        <label htmlFor="middleName" className="col-3 col-form-label">Отчество</label>
                        <div className="col-8">
                            <div className="input-group">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={["fas", "edit"]} />
                                    </div>
                                <input id="middleName" name="middleName" type="text" className="form-control"
                                       placeholder="Введите отчество здесь" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row m-t-20">
                        <label htmlFor="mail" className="col-3 col-form-label">Е-Маил</label>
                        <div className="col-8">
                            <div className="input-group">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={["fas", "edit"]} />
                                    </div>
                                <input id="mail" name="phone" type="tel" className="form-control"
                                       placeholder="Введите адрес электронной почты здесь" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8 offset-6">
                            <input type="checkbox" className="checkbox" id="noSendStatus" required/>
                            <label htmlFor="noSendStatus">Не отправлять статус заявки</label>
                        </div>
                    </div>
                </div>
                    <div className="col-md-6" >
                        <ClientTagsComponent parent={this}/>
                    </div>

                    <div className="col-md-6" >
                        <AddPhoneComponent />
                   </div>
                    <div className="col-md-6">

                    </div>

                <div className="row" style={{marginTop: "50px", visibility:"hidden"}}>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-primary" style={{width:"100px", margin:"10px"}} onClick={this.addTag}>Add Tag</button>
                        <button type="button" className="btn btn-primary" style={{width:"100px", margin:"10px"}}  onClick={this.checkChange}>Change</button>
                    </div>
                    <div className="col-md-2">
                        {
                            this.state.clientTagService.clientTags.map((tag:TagViewModel)=>{
                                return <div key={"__"+ tag.id}>
                                    <span style={tag.isChecked ? {color: "red"} : {color: "black"}}>{tag.tagName}</span>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        )}
}