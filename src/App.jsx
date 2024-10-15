import React,{useState} from "react"

export default function App(){
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

  return(
    <div>
      <form>
        <h1>Check In</h1>
        <label>Email</label><br/>
        <input 
          id="email"
          placeholder="Email" 
          type="text"
          name="email"
          onChange={handleChange}
        /><br/>
        <label>name</label><br/>
        <input 
          id="name" 
          placeholder="Name" 
          type="text"
          name="name"
          onChange={handleChange}
        /><br/>
        <label>password</label><br/>
        <input 
          id="password" 
          placeholder="password" 
          type="text"
          name="password"
          onChange={handleChange}
        /><br/>
        <button 
          type="submit" 
          id="submit"
        >submit</button>
      </form>
    </div>
  )
}