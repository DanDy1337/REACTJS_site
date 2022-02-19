import React, { useState, useEffect } from 'react'
import './style.css'
import Hors from './fonHor.jpg'

export default function Body2(){

    const [Register, setRegister] = useState(<div style={{marginBottom: '1200px'}}></div>)

    function Scroll(){
        if(window.scrollY > 150){
            setRegister(
                <div className='B2Div' style={{marginTop: '230px'}}>
                    <button className="btn btn-dark">Зарегистрироваться</button>
                    <img src={Hors} className='HorseJpg_active'></img>
                    <p className='lop'>Стань одним  из нас!</p>
                </div>
            )
        }
    }

    useEffect(()=> {
       window.onscroll = Scroll 
    })

    return(
        <div>
            {Register}
        </div>
    )
}