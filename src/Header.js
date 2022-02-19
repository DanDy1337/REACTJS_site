import React, { useState } from 'react'
import {
    Container, Navbar, Nav, Form,
    FormControl, Button, Row, Col
} from 'react-bootstrap'
import logo from './paard wandelen.png'
import sear from './lypa.png'
import korz from './korzina.png'
import telef from './telef.png'
import krest from './krest.png'
import gamb from './gamburger.png'
import './style.css'

export default function Header(prop) {
    
    return (
        <div className='Head'>
            <div>
              <img src={logo} className='logo'></img>
                <form className='form1'>
                    <input placeholder='Поиск по сайту...' className='input'></input>
                    <img src={sear} className='inputSear'></img>
                </form>
                <img src={korz} className='korz'></img>
                <img src={telef} className='telef'></img>
                <button className='btn btn-dark butt'>Вход</button>  
            </div>
        </div>
    )

}