import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'
import slider from './slider.svg'
import senseLogo from './sense_logo.png'
import insta from './footer-instagram.png'
import telegram from './footer-telegram.png'
import viber from './footer-viber.png'
import facebook from './footer-facebook.png'
import visa from './visa.png'
import mastercard from './mastercard.png'
var height = 528.5
var TT = false

export default function LastBodyMobile(){
    const [Menu0, setMenu0] = useState('MobM0')
    const [Menu1, setMenu1] = useState('MobM1')
    const [Menu2, setMenu2] = useState('MobM2')
    const [Menu3, setMenu3] = useState('MobM3')
    const [reload, setReload] = useState(0)

    function change(a){
        if(a == 0){
            if(Menu0 == 'MobM0_act'){
                setTimeout(()=>height -= 232.5,1000)
                setMenu0('MobM0')
            }
            else{
                height += 232.5
                setMenu0('MobM0_act') 
            }
        }
        else if(a == 1){
            if(Menu1 == 'MobM1_act'){
                height -= 232.5
                setMenu1('MobM1')
            }
            else{
                height += 232.5
                setMenu1('MobM1_act') 
            }
        }
        else if(a == 2){
            if(Menu2 == 'MobM2_act'){
                height -= 163
                setMenu2('MobM2')
            }
            else{
                height += 163
                setMenu2('MobM2_act')  
            }
        }
        else{
            if(Menu3 == 'MobM3_act'){
                height -= 240.5
                setMenu3('MobM3') 
            }
            else{
                height += 240.5
                setMenu3('MobM3_act')  
            }
        }
    }

    useEffect(()=>{
        if(Menu0 == 'MobM0' & Menu1 == 'MobM1' & Menu2 == 'MobM2' & Menu3 == 'MobM3' & height > 528.5){
           height = 528.5 
           setReload(reload + 1)
        }
    })


    return(
        <div className='BGDiv' style={{height: height + 'px'}}>
            <div className="LastBodyMobile" tabIndex={1}>
                <div tabIndex={1} className={Menu0} onClick={()=> change(0)}><p>Каталог товаров</p><img src={slider}></img>
                    <div className="MB0">
                        <Link to='/ERROR'>Товары Для Коней</Link>
                        <Link to='/ERROR'>Товары для Пони </Link>
                        <Link to='/ERROR'>Товары для Людей </Link>
                        <Link to='/ERROR'>Товары для Инопланетян </Link>
                        <Link to='/ERROR'>Товары для Грызунов </Link>
                        <Link to='/ERROR'>Товары для Настоящих Мужчин </Link>
                    </div>
                </div>
                <div tabIndex={2} className={Menu1} onClick={()=> change(1)}><p>Клиентам</p><img src={slider}></img>
                    <div>
                        <Link to='/ERROR'>Доставка</Link>
                        <Link to='/ERROR'>Возврат и обмен </Link>
                        <Link to='/ERROR'>Аренда </Link>
                        <Link to='/ERROR'>Блог </Link>
                        <Link to='/ERROR'>О компании</Link>
                        <Link to='/ERROR'>Бонусная Программа </Link>
                    </div>
                </div>
                <div tabIndex={3} className={Menu2} onClick={()=> change(2)}><p>Полезное</p><img src={slider}></img>
                    <div>
                        <Link to='/ERROR'>Договор общественной оферты </Link>
                        <Link to='/ERROR'>Политика Конфиденциальности </Link>
                        <Link to='/ERROR'>Политика  безопасности</Link>
                        <Link to='/ERROR'>Карта Сайта </Link>
                    </div>
                </div>
                <div tabIndex={4} className={Menu3} onClick={()=> change(3)}><p>Контакты</p><img src={slider}></img>
                    <div>
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
                <div className='BGDownDiv' style={{color: 'gray', position:'relative', 
                zIndex:'1',
                margin:'0px 0px 0px 0px',
                background:'white'}}>
                    © E-Horse.com.ua 2010-2022. Все права защищены
                    <br/>
                    <img src={senseLogo}></img>Designed by Sense Production</div>
            </div>
        </div>
        
    )
}