export default function ValidacionUsuario(valores) {
  let errores = {};

  if (!valores.nombre) errores.nombre = "Nombre requerido";
  if (!valores.apellidos) errores.apellidos = "Apellidos requeridos";
  if (!valores.correo.includes("@")) errores.correo = "Correo inválido";
  if (!valores.fecha) errores.fecha = "Fecha requerida";
  if (valores.contrasena.length < 8) errores.contrasena = "Mínimo 8 caracteres";

  return errores;
}
