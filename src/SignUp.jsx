import React,{useState} from "react"
import { Navigate,Link,useNavigate} from 'react-router-dom';
import axios from "axios"


export default function SignUp(){
  const navigate= useNavigate()
  const [formData,setFormData] = useState(
    {name:"",
      email:"",
      password:""
    }
  )

  function goHome(){
    navigate("/Home")
  }

  function goLogin(){
    return(<Navigate to="/Login"/>)
  }

  function handleChange(event){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })

  }
  

  function handleSubmit(event){
    event.preventDefault
    axios.post("https://localhost:3001/signup",{
      name : formData.name,
      email: formData.email,
      password: formData.password
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Check In</h1>
        <label>Email</label><br/>
        <input 
          id="email"
          placeholder="Email" 
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        <label>name</label><br/>
        <input 
          id="name" 
          placeholder="Name" 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br/>
        <label>password</label><br/>
        <input 
          id="password" 
          placeholder="password" 
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /><br/>
        <button 
          name="submit"
          id="submit"
          onClick={goHome}
        >submit</button>
       
      </form>
      <Link to="/Login">if already signed in</Link>
    </div>
  )
}