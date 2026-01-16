// ===== FUNCIÓN DEL BUSCADOR DE SERVICIOS =====

function buscarServicio(inputId) {
    const searchInput = document.getElementById(inputId);
    const query = searchInput.value.toLowerCase().trim();
    
    // Objeto con las palabras clave y sus URLs correspondientes
    const servicios = {
        // JARDINERÍA
        'jardineria': './jardineria.html',
        'jardinería': './jardineria.html',
        'jardin': './jardineria.html',
        'jardín': './jardineria.html',
        'plantas': './jardineria.html',
        'poda': './jardineria.html',
        'cesped': './jardineria.html',
        'césped': './jardineria.html',
        'riego': './jardineria.html',
        'paisajismo': './jardineria.html',
        'verde': './jardineria.html',
        'zonas verdes': './jardineria.html',
        
        // ASEO
        'aseo': './aseo.html',
        'limpieza': './aseo.html',
        'limpiar': './aseo.html',
        'limpie': './aseo.html',
        'limpio': './aseo.html',
        'limpian': './aseo.html',
        'lavar': './aseo.html',
        'desinfectar': './aseo.html',
        'desinfección': './aseo.html',
        'desinfeccion': './aseo.html',
        
        // PLOMERÍA
        'plomeria': './plomeria.html',
        'plomería': './plomeria.html',
        'plomero': './plomeria.html',
        'tuberia': './plomeria.html',
        'tubería': './plomeria.html',
        'fuga': './plomeria.html',
        'agua': './plomeria.html',
        'tubos': './plomeria.html',
        'caño': './plomeria.html',
        'cano': './plomeria.html',
        'destape': './plomeria.html',
        'desagüe': './plomeria.html',
        'desague': './plomeria.html',
        'instalación': './plomeria.html',
        'instalacion': './plomeria.html'
    };
    
    // Buscar coincidencia exacta o parcial
    for (let palabra in servicios) {
        if (query.includes(palabra)) {
            window.location.href = servicios[palabra];
            return;
        }
    }
    
    // Si no encuentra nada, mostrar mensaje
    alert('No se encontró el servicio. Intenta con: Jardinería, Aseo o Plomería');
}

// Permitir búsqueda con la tecla Enter en ambos inputs
document.addEventListener('DOMContentLoaded', function() {
    // Buscador Desktop
    const searchInputDesktop = document.getElementById('searchInputDesktop');
    if (searchInputDesktop) {
        searchInputDesktop.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarServicio('searchInputDesktop');
            }
        });
    }
    
    // Buscador Móvil
    const searchInputMobile = document.getElementById('searchInputMobile');
    if (searchInputMobile) {
        searchInputMobile.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarServicio('searchInputMobile');
            }
        });
    }
});