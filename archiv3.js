function validarNIT(nit) {
    var regex = /^[0-9]{1,10}-[0-9]{1}$/;
    return regex.test(nit);
}

function validarCodigoPostal(codigoPostal) {
    var regex = /^[0-9]{5}$/;
    return regex.test(codigoPostal);
}

function validarCorreoElectronico(correo) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

function validarNumeroTelefono(numero) {
    var regex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return regex.test(numero);
}

function validarURL(url) {
    var regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

function validarNombreUsuario(nombreUsuario) {
    var regex = /^[a-z0-9]{3,10}$/;
    return regex.test(nombreUsuario);
}

function validarDireccionIP(ip) {
    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
}

function validarFecha(fecha) {
    var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    return regex.test(fecha);
}

function validarContrasena(contrasena) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(contrasena);
}