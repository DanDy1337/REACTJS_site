import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import insta from './footer-instagram.png'
import telegram from './footer-telegram.png'
import viber from './footer-viber.png'
import facebook from './footer-facebook.png'
import visa from './visa.png'
import mastercard from './mastercard.png'

export default function LastBody(){
    

    return(
        <div className="LSTDiv">
            <div>
                <p>Каталог Товаров</p>
                <Link to='/ERROR'> Товары Для Коней</Link>
                <Link to='/ERROR'>Товары для Пони </Link>
                <Link to='/ERROR'>Товары для Людей </Link>
                <Link to='/ERROR'>Товары для Инопланетян </Link>
                <Link to='/ERROR'>Товары для Грызунов </Link>
                <Link to='/ERROR'>Товары для Настоящих Мужчин </Link>
            </div>
            <div>
                <p>Клиентам</p>
                <Link to='/ERROR'>Доставка</Link>
                <Link to='/ERROR'>Возврат и обмен </Link>
                <Link to='/ERROR'>Аренда </Link>
                <Link to='/ERROR'>Блог </Link>
                <Link to='/ERROR'>О компании</Link>
                <Link to='/ERROR'>Бонусная Программа </Link>
            </div>
            <div>
                <p>Полезное</p>
                <Link to='/ERROR'>Договор общественной оферты </Link>
                <Link to='/ERROR'>Политика Конфиденциальности </Link>
                <Link to='/ERROR'>Политика  безопасности</Link>
                <Link to='/ERROR'>Карта Сайта </Link>
            </div>
            <div>
                <p>Контакты</p>
                <li style={{fontSize: '17px',fontWeight: 'bolder',marginBottom:'16px'}}>0 800 555 35 35</li>
                <li style={{color: 'gray',fontSize:'13px'}}>Бесплатно по Украине</li>
                <li style={{height: '20px',color: 'gray',fontSize:'13px'}}>График работы call-центра</li>
                <li style={{fontSize: '14px'}}>ПН - ПТ: 09:00 - 20:00 </li>
                <li style={{fontSize: '14px'}}>СБ: 09:00 - 18:00</li>
                <li style={{fontSize: '14px'}}>ВС: 10:00 - 17:00</li>
                <div className="LSTDivImg">
                    <img src={insta}></img>
                    <img src={viber}></img>
                    <img src={facebook}></img>
                    <img src={telegram}></img>
                    <img src={mastercard}></img>
                    <img src={visa}></img>
                </div>
            </div>
        </div>
    )
}

