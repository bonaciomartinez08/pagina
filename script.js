function login() {
  let usuario = document.getElementById("usuario").value;
  let clave = document.getElementById("clave").value;
  let mensaje = document.getElementById("mensaje");

  if (usuario === "admin" && clave === "1234") {
    mensaje.textContent = "✅ Bienvenido " + usuario + "!";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
    mensaje.style.color = "red";
  }
  return false; // evita que recargue la página
}
