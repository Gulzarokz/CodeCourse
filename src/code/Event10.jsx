import React from 'react'

const Event10 = () => {
    let name = "Gulzar";
    const Click = () =>{
        name = "khan"         
        alert(name);
    }
  return (
    <div>
        {/* <button onClick={Click}>Click Me</button> it work with normally */}
        {/* <button onClick={Click()}>Click Me</button> it click automatically when the page is refreshing */}
        <button onClick={Click}>{name}</button>
    </div>
  )
}

export default Event10