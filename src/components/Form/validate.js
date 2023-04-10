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
export default validate