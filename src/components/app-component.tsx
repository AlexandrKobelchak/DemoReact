import React, {Component} from 'react';
import './app-component.scss';
import {MainNavbar} from "./navbar/main.navbar-component";
import {ClientTagService} from "./_services/ClientTagService";
import { ClientComponent } from './clientage/client-component';
import {HomeComponent} from "./home/home-component";
import {MailingComponent} from "./mailing/mailing-client";
import {OptionsComponent} from "./options/options-component";
import {StatisticComponent} from "./statistic/statistic-component";
import {BusinessComponent} from "./business/business-component";
import {PaymentsComponent} from "./payments/payments-component";
import {AboutComponent} from "./about/about-component";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {faCheckSquare, faMinus, faPlus, faEdit, faRemove, fas} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(fas, faCheckSquare, faPlus, faMinus, faEdit, faRemove);

export interface AppProps{


}
export interface AppState{


}

export default class AppComponent extends Component<AppProps, AppState> {

  constructor(props:AppProps) {
    super(props);
  }

    render() {

      return (
          <BrowserRouter>
              <MainNavbar />
              <Routes>
                  <Route path="/" element={<HomeComponent />} />
                  <Route path="/clients" element={<ClientComponent />} />
                  <Route path="/mailing" element={<MailingComponent />} />
                  <Route path="/options" element={<OptionsComponent />} />
                  <Route path="/statistic" element={<StatisticComponent />} />
                  <Route path="/buisiness" element={<BusinessComponent />} />
                  <Route path="/payments" element={<PaymentsComponent />} />
                  <Route path="/about" element={<AboutComponent />} />
              </Routes>
          </BrowserRouter>
    )
  }
}
