import React,{useState} from "react"
import Home from "./Home";
import { Navigate,Link,useNavigate} from 'react-router-dom'
import axios from "axios";


export default function Login(){
  const navigate = useNavigate()
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
    axios.post("http://localhost:3001/login",{
      name : formData.name,
      email: formData.email,
      password: formData.password
    })
    .then(result=>{
      console.log(result)
      if(result.data === "found"){
        navigate("/home")
      }else{
        navigate("/")
        alert("please register, account not found")
      }
    })
    .catch(error=>console.log(error))

  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <label>Email</label><br/>
        <input 
          id="email"
          placeholder="Email" 
          type="text"
          name="email"
          value={formData.email}
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
          type="submit"
        >submit</button>
      </form>
    </div>
  )
}