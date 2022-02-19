import React, { useState, useEffect } from 'react'
import './style.css'
import zvezda from './zvezda.png'
import horse1 from './horse1.jpg'
import horse2 from './horse2.jpg'
import horse3 from './horse3.jpg'
import strela from './strela.png'
var [Dar,Kar,Stla,Mar,Par] = [0, 199,false,0,'strela']


export default function Body1( prop ) {
    const [sec, setSec] = useState(0)
    const [sstrela, setStrela] = useState('strela')

    if(prop.str == true & sstrela != 'inviz'){
        setStrela('inviz')
    }
    else if(prop.str == false & sstrela == 'inviz'){
        setStrela(Par)
    }
    const Sroll =()=> {
        if(Mar+Dar<2){
            if(sec > 397){
                Mar = setInterval(()=>{setSec((sec) => {return sec - 10})},10)
            }
            else{
                if(Stla == true){
                   Dar = setInterval(()=>{setSec((sec) => {return sec + 5})},30) 
                }
                else{
                    Dar = setInterval(()=>{setSec((sec) => {return sec + 10})},20)
                }
            } 
        }
        else{return 0}
    }
    useEffect(()=>{
        if(sec > Kar){
            Par = 'strelaReverse'
            if(sec==400){setStrela('strelaReverse')}
            console.log(sec,Kar)
            clearInterval(Dar)
            Dar = 0
            Kar += 200
            console.log(sec,Kar,Dar)
        }
        else if(sec < 0){
            Par = 'strela'
            setStrela('strela')
            Kar = 199
            console.log(sec,Kar)
            clearInterval(Mar)
            Mar = 0
        }
        if(document.documentElement.clientWidth<520){
            Stla = true
            console.log('efj')
            document.getElementById('er').scrollLeft=sec*3.5
        }
        else{
            Stla = false
            document.getElementById('er').scrollLeft=sec
        }
        }
    )
    
    return (
        <div className='BodyStyle1'>
            <div className='B1Title'>
               <span>ТОП</span><span>продаж</span>
            </div>
            <div style={{width: '70%',height:'20%'}}>
                <img src={zvezda} className='zvezda'></img>
            </div>
            <div className='B1Menu' id='er'>
                <div className='Card1'>
                    <img src={horse1} className='horse1'></img>
                    <br/>
                    <h2 style={{marginLeft: '15%'}}>1000$</h2>
                    <p>Невероятный конь 
                        в пальто! 
                    </p>
                   
                </div>
                <div className='Card1'>
                    <img src={horse2} className='horse1'></img>
                    <br/>
                    <h2 style={{marginLeft: '15%'}}>500$</h2>
                    <p>Конь просто бомба, торг уместен. 
                    </p>
                    
                </div>
                <div className='Card1'>
                    <img src={horse3} className='horse1'></img>
                    <br/>
                    <h2 style={{marginLeft: '15%'}}>1999$</h2>
                    <p>Белые кони из подмосковья, для вас
                        и вашей семьи.
                    </p>
                </div>
                <div className='Card1'>
                    <img src={horse3} className='horse1'></img>
                    <br/>
                    <h2 style={{marginLeft: '15%'}}>1999$</h2>
                    <p>Белые кони из подмосковья, для вас
                        и вашей семьи.
                    </p>
                </div>
                <img src={strela} className={sstrela}  onClick={Sroll}></img>
            </div >
        </div>
        
    )
}