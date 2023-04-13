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
            <img src="https://previews.dropbox.com/p/thumb/AB2eaq0cSES4TUSP0AJ3VnDeq1Bb3UzwV2PYX40NW6l-YdR91GEBnh8YQ37-ZCPtOU5rpT0xcQpzSrQ7Gi9OX5v1Vcas1NO0iQHQ3ld8FgUg4aHFEgzJex8JfkyGZ8Xcj6DHinMT2lpyZ5zso-WGolXmjCcfyAF5oib9ey2ZkNyR7C11gFlnfOG4zMg7fI-e5Kuv8sPtbP6LbCz21DJyohbVeHoy_iP-94jAXxtGpEF6dIvyoK_wnqEMwvh0VbDsQAcLurMQvUAxlco5sVll1cToEwo23BuFpxbrBTC5-jeUTBWoSKbCSC2sBfdSiJtBnO15Vuy5SoedCaeMve6Qd_2WbI33dOatKrCnhcw363D19Sl9z2CNRtZA4WukHm4S6PU/p.png" alt="" />
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