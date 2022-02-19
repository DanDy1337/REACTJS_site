import React, { useState, useEffect } from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
import Header from './Header'
import Body1 from './Body1'
import Body2 from './Body2'
import LastBody from './LastBody'
import krest from './krest.png'
import gamb from './gamburger.png'
import BodyMobile from './BodyMobile'
import LastBodyMobile from './LastBodyMobile'

var [State,check] = ['Head',false]

export default function App() {
  const [gambur, setGambur] = useState(<img src={gamb} className='gamb' onClick={menu}></img>)

  function menu() {
    check = true
    State = 'HeadBlur'
    setGambur(<div className='gambMenu'>
      <img src={krest} className='krest' onClick={menu1}></img>
      <p>Search</p>
      <p className='pKorz'>korzina</p>
      <p>Svyaz</p>
      <p>glavv</p>
    </div>)
  }

  function menu1(){
    check = false
    State = 'Head'
    setGambur(<img src={gamb} className='gamb' onClick={menu}></img>)
  }

  // if(document.documentElement.clientWidth<526){
  //   console.log('jhe')
  //   return (
  //     <div>
  //       <BodyMobile />
  //     </div>
  //   )
  // }
  return (
    <div>
      <div className={State}>
        <Header />
        <div style={{width: '111%'}}>
          <Body1 str={check}/>
        </div>
        <div style={{width: '111%'}}>
          <Body2 />
        </div>
        <div style={{width: '111%'}}>
          <LastBody />
          <LastBodyMobile />
        </div>
      </div>
      {gambur}
    </div>
  )
}

