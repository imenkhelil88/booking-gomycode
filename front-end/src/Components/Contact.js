import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
    const[email,setEmail]=useState("")
    const[subject,setSubject]=useState("")
    const[text,setText]=useState("")
    const handleClick=()=>{
        axios.post("/sendMail",{
            email:email,
            subject:subject,
            text:text
        }).then((res)=>{
            console.log(res)
            if(res.data.status==="success"){
         setEmail("")
         setSubject("")
         setText("")
         
            }

        })
        
    }

  return (
    <div>
      <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input placeholder="subject" onChange={(e)=>setSubject(e.target.value)} value={subject}/>
      <input placeholder="text" onChange={(e)=>setText(e.target.value)} value={text}/>
      <button onClick={()=>handleClick()}>Enregistrer</button>
    </div>
  )
}

export default Contact
