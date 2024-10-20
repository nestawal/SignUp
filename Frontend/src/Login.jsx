import React,{useState} from "react"
import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Home from "./Home";

export default function Login(){
  const [formData,setFormData] = useState(
    {name:"",
      email:"",
      password:""
    }
  )

  function handleChange(event){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })

  }
  console.log(formData)

  function handleSubmit(event){
    event.preventDefault()
    

  }

  return(
    <div>
      <form>
        <h1>LOGIN</h1>
        <label>Email</label><br/>
        <input 
          id="email"
          placeholder="Email" 
          type="text"
          name="email"
          value={formData.email}
          //onChange={handleChange}
        /><br/>
        
        <label>password</label><br/>
        <input 
          id="password" 
          placeholder="password" 
          type="text"
          name="password"
          value={formData.password}
          //onChange={handleChange}
        /><br/>
        <button 
          name="submit"
          id="submit"
        >submit</button>
      </form>
    </div>
  )
}