import {Component} from "react";
import {  Link } from 'react-router-dom'
import {HomeComponent} from "../home/home-component";

export class MainNavbar extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">

                <ul className="navbar-nav flex-grow">

                    <li className="nav-item">
                        <Link to="/" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-home'></span> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/buisiness" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-home'></span> Дела
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/clients" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-home'></span> Клиенты
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/payments" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-education'></span> Платежи
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/statistic" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-th-list'></span> Статистика
                        </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/mailing" className="nav-link text-dark">
                            <span className='glyphicon glyphicon-envelope'></span> Рассылки
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/options" className="nav-link text-dark" >
                            <span className='glyphicon glyphicon-cod'></span> Настройка
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-dark">
                            <span className='glyphicon glyphicon-cod'></span> О нас
                        </Link>
                    </li>
                </ul>
    </nav>
        )
    }
}
