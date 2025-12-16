function confirmarReserva() {
    var fecha = document.getElementById('fecha-cita').value;
    var hora = document.getElementById('hora-cita').value;
    
    if (!fecha || !hora) {
        Notiflix.Notify.info('⚠️ Por favor selecciona fecha y hora');
        return;
    }
    
    var fechaSeleccionada = new Date(fecha + 'T00:00:00');
    var diaSemana = fechaSeleccionada.getDay();
    var horaNum = parseInt(hora.split(':')[0]);
    
    if (diaSemana === 0) {
        Notiflix.Notify.failure('❌ Los domingos no hay servicio disponible');
        return;
    }
    
    if (diaSemana === 6) {
        if (horaNum < 10 || horaNum >= 14) {
            Notiflix.Notify.failure('❌ Los sábados solo hay servicio de 10:00am a 2:00pm');
            return;
        }
    }
    
    if (diaSemana >= 1 && diaSemana <= 5) {
        if (horaNum < 8 || horaNum >= 18) {
            Notiflix.Notify.failure('❌ De lunes a viernes el servicio es de 8:00am a 6:00pm');
            return;
        }
    }
    
    Notiflix.Notify.success('✅ ¡Reserva confirmada para el ' + fecha + ' a las ' + hora + '!');
}