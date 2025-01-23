import React, { useState } from 'react'

const GetingInputBox = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    
    
    function getData(event) {
        setData(event.target.value);
        setPrint(false);
        console.log(event.target.value);
        
    }
        

    
  return (
    <div>
        <h1>
            {
                print? <h1>{data}</h1> :null
            }
        </h1>
        <input type="text" 
               onChange={getData} />
               <button onClick={()=>{setPrint(true)}}>Print</button>
    </div>
  )
}

export default GetingInputBox