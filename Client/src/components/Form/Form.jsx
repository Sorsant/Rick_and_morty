import { useState } from 'react';
import style from './Form.module.css'
import validate from './validate';


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


const handleOnSubmit = (event) => {
    event.preventDefault()
    login(userData)
}
    return(
       <div className={style.fondo}>
            <img src="https://previews.dropbox.com/p/thumb/AB5XIqU_Am6lfUHLGWdwfQkblqYlNhiGkKS4gO2GYS0jVQQzBa96CFn1xLgpYNrF46U4ybCSlyfVfVOMJrNuEAsLxgJVj2uJ_Tlz_M8My_YRGd-WaHrKNTHOL-oG9JLinSIgp4UwIC_BSlgX_bLBsqJNxq00UKr9H0TXzCJ-rYeuDrXiMly65SXxlzPkx3zlyJFjk5zRjAY4TEwGx1U9zaOlNd9hkaLhBzrfbUiXDOucj4zfaeYMD4V1S6jHGJrxhsVxUBXmkeeb_ajbNjLKvamrpK5U0U39U-anZQXOaax5bqAbb33p4d2Tmdv5T3UDuDzQiiG7lkosu-on9aEJZIQaK0TyE33OgAtsdHflk50lFpNO5fyHuAD3gKhhmLVF2kw/p.png" alt="" />
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