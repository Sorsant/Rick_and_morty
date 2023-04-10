import { useState } from 'react';
import style from './Form.module.css'



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
       <div className={style.fondo}>
            <img src="https://previews.dropbox.com/p/thumb/AB1AT9sjFOTVDnIYl_epJXWtuQAiKEDr-3okhv5vUSaS9A2T_4V4QDpeaQcn0aGl0kqkkQDc7UiQPR1LVI3y3-0vNqYQlpMEE6M7JKD1iw2nqN9gauZZ7SxOsvhETG2y9xhN958u_eAsCMhNNfZw93uPkGs9DzhSO66HRglM12xvCiE8iWKZve8247pu1jGY_--SMb2s6ecFNeaPJGvOibRvWt1Y0YS8I4Ku2jsguWq8Rkui8wFjCd3DKB79ga0QjoRalv0T8emZZ_HVk8ZjSmSr3Ql9XSuBPzbawDt5kJxmKtEyt82EIfxDnTQ377uhUfQDO26PTSrsT1fq0TTfPPm_N5Q9LTm9HWzCt9TkN8g1dVfvH2xlR_CFejG7WH5oTrU/p.png" alt="" />
        <div className={style.cajita}>
        <form onSubmit={handleOnSubmit}>
            <br />
            <label className={style.label}>Email</label>
            <br />
            <input  className={style.input}  name="email" type="email" placeholder='Ingresa Tu Email' onChange={HandleonChange}/>
            <br />
            {errors.email && <span className={style.span}>{errors.email}</span>}
            <hr />
            <label className={style.label}>Password</label>
            <br />
            <input className={style.input}   name="password" type="text" placeholder='Ingresa tu contraseña'onChange={HandleonChange} />
            <br />
            {errors.password && <span className={style.span}>{errors.password}</span>}
            <hr />
            <button className={style.miBoton} disabled={!userData.email|| ! userData.password|| errors.email||errors.password}>Enviar</button>
        </form>
              </div>
    
           
       </div>
    )
    }
export default From