import React from 'react'
import { useState } from 'react'
const ShowHide = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
        {
             show?<h1>Asalam-o-Alikoom</h1>:null
        }
       
        {/* <button onClick={()=>setShow(true)}>show</button>
        <button onClick={()=>setShow(false)}>Hide</button> */}
        <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ShowHide