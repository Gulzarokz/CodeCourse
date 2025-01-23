import React from 'react'
import { useState } from 'react'
const Profile = () => {
    const [logedIn, setLogedIn] = useState(1)
//     if (logedIn) {
//  return (
//    <h1>Welcome back guys</h1>
//   )
  
// }
// else {
//  return (
//    <h1>Welcome back</h1>
//   )
  
// }its not recommended way to use coditional redering like that

return(
    <>
    {
        logedIn==1?<h1>Welcome back 1</h1>
        :logedIn==2?<h1>Welcome back 2</h1>
        :<h1>Welcome to else</h1>
    }
    </>
)

}

export default Profile