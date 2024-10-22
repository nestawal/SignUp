import React from "react"
import { useLocation } from "react-router-dom"

export default function Home(){
    const location = useLocation();
    const {formData} = location.state || {};
    return(
        <><h1>Hello and welcome {formData.name}</h1></>
    )
}