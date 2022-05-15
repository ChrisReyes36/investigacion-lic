const info = document.getElementById("info");
const btnAccesar = document.getElementById("btnIngresar");
const form = document.getElementById("formulario");
const contenedor = "";

function validar() {
    if (form.pass.value != form.cpass.value) {
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        return true;
    }
}

function llenardatos() {
    localStorage.setItem("nombres", form.nombres.value);
    localStorage.setItem("apellidos", form.apellidos.value);
    localStorage.setItem("email", form.email.value);
}

btnAccesar.addEventListener("click", function (e) {
    e.preventDefault();
    if (validar()) {
        alert("Datos guardados");
        llenardatos();
        location.href = "vista.html";
    }
});
