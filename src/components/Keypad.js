import React from 'react'

function Keypad() {
    const handleOnchange = (event) => {
        console.log ('Entering password...')
    }

  return (
<> 
    <input type="password" placeholder="enter password" onChange={handleOnchange}/>
  </>
  
  )

}

export default Keypad