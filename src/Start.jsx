import React, { useState } from 'react'
import Validate from './Validate';

function Start() {

  const[connect,setConnect]=useState(false)

function HandleConnect(){
    setConnect(true)
}


  return (
    <div id='Starting-wrapper'>
      {!connect &&(
        <div>
            <img src='pika5.jpg'></img>
            <div className='info'>
              <h1>Do you like me?</h1>
              <p>Let's connect!!!</p>
              <button className='click-to-connect' onClick={HandleConnect}>Connect</button>
            </div>
        </div>
      )}
        {connect && <Validate/>}
    </div>
  )
}

export default Start