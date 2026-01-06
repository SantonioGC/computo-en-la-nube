function ValidacionContacto(valores) {
    let errores = {};
    const PatronDelCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!valores.correo) {
      errores.correo = "El correo no debe estar vacío";
    } else if (!PatronDelCorreo.test(valores.correo)) {
      errores.correo = "El correo no tiene un formato válido";
    } else {
      errores.correo = "";
    }
  
    return errores;
  }
  
  export default ValidacionContacto;
  