import Cookies from 'universal-cookie';
const cookies =new Cookies;

const seteaCokie=(respuesta)=>{
    
    cookies.set("pass",respuesta.pass, {path:"/"}) 
    cookies.set("apellido",respuesta.apellido, {path:"/"}) 
    cookies.set("nombre",respuesta.nombre, {path:"/"}) 
    cookies.set("identificacion",respuesta.id, {path:"/"}) 
    cookies.set("destino",respuesta.identificacion, {path:"/"}) 
    cookies.set("nivel",respuesta.nivel, {path:"/"}) 
    cookies.set("estado",respuesta.estado, {path:"/"}) 
    cookies.set("createdAt",respuesta.createdAt, {path:"/"}) 
    cookies.set("updatedAt",respuesta.updatedAt, {path:"/"}) 
      
}
export default seteaCokie;