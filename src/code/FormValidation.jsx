import React, { useState } from 'react'

const FormValidation = () => {
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passward, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const loginhandler = (e) => {
    if (user.length < 4 || passward.length < 4) {
      alert("Enter invalid password and user")
    }
    else {
      alert("Login successfully")
    }



    e.preventDefault();
  }
  const userHandler = (e) => {
    let item = e.target.value;

    if (item.length < 4) {
      setUserErr(true)
    }
    else {
      setUserErr(false)
    }
    setUser(item)
  }
  const passwardHandler = (e) => {
    let item = e.target.value;
    if (item.length < 4) {
      setPasswordErr(true)
    }
    else {
      setPasswordErr(false)
    }
    setPassword(item)
  }
  return (
    <div>
      <form onSubmit={loginhandler}>
        Name:<input type="text" placeholder='Enter user name' onChange={userHandler} />
        {userErr ? <span>invalid</span> : null}
        <br /><br />
        Password: <input type="password" placeholder='Enter user passward' onChange={passwardHandler} />
        {passwordErr ? <span>invalid</span> : null}
        <br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default FormValidation