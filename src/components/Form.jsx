import { useState } from 'react';




const From =({login})=>{
const [userData,setUserdata]=useState({
    email:'',
    password:''
})
const [errors,setErrors]=useState({
    email:'',
    password:''
})
const HandleonChange = (event)=>{
    setUserdata({
        ...userData,
        [event.target.name]:event.target.value
    })
    setErrors(
        validate({
          ...userData,[event.target.name]: event.target.value
        })
      )
}
const validate = (userData) => {
    let errors={}
    if(!/\S+@\S+\.\S+/.test(userData.email)){
      
    errors.email= 'Debe ser un correo electrónico con @ y .com'
        }
    if(userData.email.length >35){
        errors.email= 'Debe ser menor a 35'
    }
   if(userData.email.length ===''){
    errors.email= 'Se requiere el correo electrónico'
   }
  
   if(userData.password.length < 6 ){
    errors.password= 'Debe ser mayor a 6 digitos'
 } else if(userData.password.length > 10) {
     errors.password= 'Debe ser menor a 10 digitos'
 }
    if(!/\d/.test(userData.password)){
        errors.password='Debe tener minimo un caracter numerico'
    }
    return errors
}

const handleOnSubmit = (event) => {
    event.preventDefault()
    login(userData)
}
    return(
       <div>
            <img src="https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383" alt="" />
        <form onSubmit={handleOnSubmit}>
            <br />
            <label>Email</label>
            <br />
            <input name="email" type="email" placeholder='Ingresa Tu Email' onChange={HandleonChange}/>
            <br />
            {errors.email && <span>{errors.email}</span>}
            <hr />
            <label>Password</label>
            <br />
            <input name="password" type="text" placeholder='Ingresa tu contraseña'onChange={HandleonChange} />
            <br />
            {errors.password && <span>{errors.password}</span>}
            <hr />
            <button disabled={!userData.email|| ! userData.password|| errors.email||errors.password}>Enviar</button>
        </form>
       </div>
    )
    }
export default From
