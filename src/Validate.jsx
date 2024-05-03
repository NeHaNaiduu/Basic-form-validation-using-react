import React, { useState } from 'react'

function Validate() {

const[name,setName]=useState("")
const[address,setAddress]=useState("")
const[contact,setContact]=useState("")

function HandleName(e){
    setName(e.target.value)
}
function HandleAddress(e){
    setAddress(e.target.value)
}
function HandleContact(e){
    setContact(e.target.value)
}

function HandleSubmit(e){
    e.preventDefault();
    alert(`Mubarak ho ${name}. I'm coming to ${address} soon. Will call you today on ${contact}`);
    document.querySelector('body').innerHTML=`<div id=thanks>
    <img src="pika3.jpg"/>
    </div>`
}

  return (
    <div id='validation-wrapper'>
        <form onSubmit={HandleSubmit}>
            <input type='text' 
            placeholder='Your good name :'
            value={name}
            onChange={HandleName}
            /><br/>
            <input type='text' 
            placeholder='Where do you reside?'
            value={address}
            onChange={HandleAddress}
            /><br/>
            <input type='tel' 
            placeholder='Contact no.'
            value={contact}
            onChange={HandleContact}
            /><br/>
            <button type='submit'>Toh hum rishta pkka smjhe?</button>
        </form>
    </div>
  )
}

export default Validate