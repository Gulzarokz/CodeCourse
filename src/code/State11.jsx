import React, {useState} from 'react'

const State11 = () => {
const [data, setData] = useState("GUlzar")
    const Click = () => {
        setData("Khan")
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={Click}>update</button>
    </div>
  )
}

export default State11