import React,{ useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './paard wandelen.png'
import gambM from './gamburger.png'
import './style.css'
import Body1M from "./Body1M";
import Body1 from "./Body1";
var a = false

export default function BodyMobile(){

    const [Menu, setMenu] = useState('gambMM')

    function menu(){
        setMenu('gambMM_act')
        return false
    }

    return(
        <div className="Mob" onClick={()=> {if(Menu == 'gambMM_act'){
            setMenu('gambMM')
        }}}>
            <div style={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width:'100%'}}>
                <img src={logo} className="logoM"></img>
                <img src={gambM} className="gambM" onClick={menu}></img>
                <div className={Menu} id='id_name'>
                    <li>Поиск</li>
                    <li>Товары</li>
                    <li>Корзина</li>
                    <li>Отзывы</li>
                </div>
            </div>
            <Body1M />
        </div>
    )
}