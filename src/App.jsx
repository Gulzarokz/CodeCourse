import { useState } from 'react'
import Event10 from './code/Event10'
import State11 from './code/State11'
import Props12 from './code/Props12'
import GetingInputBox from './code/GetingInputBox'
import ShowHide from './code/ShowHide'
// import './App.css'

function App() {
const [name, setName] = useState("Gulzar")

  return (
    <>
{/* <Profile /> */}
      {/* <Event10   /> */}
      {/* <State11 /> */}
      {/* <Props12 name={name} email="test@123" address = {{village: "khairmatoo", city: "kohat"}} />
      <button onClick={()=>{setName("Aiza")}}>Update</button> */}
    {/* <GetingInputBox /> */}
    <ShowHide />


    </>
      
  )
}

export default App
