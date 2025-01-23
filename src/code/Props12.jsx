import React from 'react'

const Props12 = (props) => {
  return (
    <div style={{backgroundColor: 'skyblue'}}>
        <h1>Props in Reactjs</h1>
        <h2>Name:-{props.name}</h2>
        <h2> Email:-{props.email}</h2>
        <h2>Address:-{props.address.village}</h2>
    </div>
  )
}

export default Props12