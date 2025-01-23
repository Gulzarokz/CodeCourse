import React, { useState } from 'react'

const FormHindling = () => {
    const [name, setName] = useState("");
    const [interest, setInterest] = useState("");
    const [TnC, setTnC] = useState(true);


    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log("All the Data", name, interest, TnC);
        

    }
  return (
    <div>
        <form onClick={handlesubmit} >
        <input type="text"  onChange={(e)=> setName(e.target.value)} /> <br /> <br/>

        <select  onChange={(e)=> setInterest(e.target.value)} >
            <option>Cs</option>
            <option>SE</option>
            <option>Law</option>
        </select> <br /> <br />

        <input type="checkbox"  value= "checked"  onChange={(e)=> setTnC(e.target.checked)}/> <span>Agree with term and conditions</span> <br /> <br />

        <button type='submit'>submit</button>

        </form>
    </div>
  )
}

export default FormHindling