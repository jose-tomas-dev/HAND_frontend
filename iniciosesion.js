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

// ===== VALIDACIÓN DE INICIO DE SESIÓN =====

function validarLogin() {
    event.preventDefault();
    
    var correo = document.getElementById('correo-login').value;
    var contrasena = document.getElementById('contrasena-login').value;
    
    var correoLimpio = sanitizarTexto(correo);
    var contrasenaLimpia = sanitizarTexto(contrasena);
    
    // Validar campos vacíos
    if (!correoLimpio || !contrasenaLimpia) {
        Notiflix.Notify.warning('⚠️ Por favor completa todos los campos');
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
    
    // Validar caracteres peligrosos
    if (!validarCaracteresSeguridad(correoLimpio) || !validarCaracteresSeguridad(contrasenaLimpia)) {
        Notiflix.Notify.failure('❌ Se detectaron caracteres no permitidos');
        return;
    }
    
    // Validación exitosa
    Notiflix.Notify.success('✅ Datos validados correctamente');
    
    console.log('Correo:', correoLimpio);
    console.log('Mantener sesión:', document.getElementById('mantener-sesion').checked);
    
}