// ===== FUNCIONES DE VALIDACIÓN =====
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarCaracteresSeguridad(texto) {
    const caracteresProhibidos = /<script|<\/script|javascript:|onerror=|onload=|<iframe|eval\(|alert\(|SELECT.*FROM|DROP TABLE|INSERT INTO|DELETE FROM|UPDATE.*SET/gi;
    return !caracteresProhibidos.test(texto);
}

function sanitizarTexto(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

function validarNombre(nombre) {
    // Solo letras, espacios y acentos
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre) && nombre.length >= 2;
}

function validarDireccion(direccion) {
    // Letras, números, espacios y caracteres comunes en direcciones
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s#\-,.]+$/;
    return regex.test(direccion) && direccion.length >= 5;
}

// ===== VALIDACIÓN DE REGISTRO =====
function validarRegistro() {
    event.preventDefault();

    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var departamento = document.getElementById('departamento').value;
    var ciudad = document.getElementById('ciudad').value;
    var direccion = document.getElementById('direccion').value;
    var terminos = document.getElementById('terminos').checked;

    // Sanitizar textos
    var nombreLimpio = sanitizarTexto(nombre);
    var apellidoLimpio = sanitizarTexto(apellido);
    var correoLimpio = sanitizarTexto(correo);
    var contrasenaLimpia = sanitizarTexto(contrasena);
    var departamentoLimpio = sanitizarTexto(departamento);
    var ciudadLimpia = sanitizarTexto(ciudad);
    var direccionLimpia = sanitizarTexto(direccion);

    // Validar campos vacíos
    if (!nombreLimpio || !apellidoLimpio || !correoLimpio || !contrasenaLimpia || 
        !departamentoLimpio || !ciudadLimpia || !direccionLimpia) {
        Notiflix.Notify.warning('⚠️ Por favor completa todos los campos');
        return;
    }

    // Validar nombre
    if (!validarNombre(nombreLimpio)) {
        Notiflix.Notify.failure('❌ El nombre solo debe contener letras y tener al menos 2 caracteres');
        return;
    }

    // Validar apellido
    if (!validarNombre(apellidoLimpio)) {
        Notiflix.Notify.failure('❌ El apellido solo debe contener letras y tener al menos 2 caracteres');
        return;
    }

    // Validar formato de email
    if (!validarEmail(correoLimpio)) {
        Notiflix.Notify.failure('❌ El correo electrónico no es válido');
        return;
    }

    // Validar longitud de contraseña
    if (contrasenaLimpia.length < 6) {
        Notiflix.Notify.failure('❌ La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Validar dirección
    if (!validarDireccion(direccionLimpia)) {
        Notiflix.Notify.failure('❌ La dirección contiene caracteres no válidos o es muy corta');
        return;
    }

    // Validar caracteres peligrosos en todos los campos
    if (!validarCaracteresSeguridad(nombreLimpio) || 
        !validarCaracteresSeguridad(apellidoLimpio) ||
        !validarCaracteresSeguridad(correoLimpio) || 
        !validarCaracteresSeguridad(contrasenaLimpia) ||
        !validarCaracteresSeguridad(departamentoLimpio) ||
        !validarCaracteresSeguridad(ciudadLimpia) ||
        !validarCaracteresSeguridad(direccionLimpia)) {
        Notiflix.Notify.failure('❌ Se detectaron caracteres no permitidos');
        return;
    }

    // Validar aceptación de términos
    if (!terminos) {
        Notiflix.Notify.warning('⚠️ Debes aceptar las políticas de privacidad para continuar');
        return;
    }

    // Validación exitosa
    Notiflix.Notify.success('✅ Registro exitoso. ¡Bienvenido a Hand!');
    
    console.log('Datos del registro:');
    console.log('Nombre:', nombreLimpio);
    console.log('Apellido:', apellidoLimpio);
    console.log('Correo:', correoLimpio);
    console.log('Departamento:', departamentoLimpio);
    console.log('Ciudad:', ciudadLimpia);
    console.log('Dirección:', direccionLimpia);

    
}