var question = 0;
var contadores = [0, 0, 0, 0];  // Un array para almacenar los contadores

$(document).ready(function(){
    $('#azul').click(function(){
        contadores[0]++;  // Incrementar el contador azul
        nextquestion();
    });
    $('#rojo').click(function(){
        contadores[1]++;  // Incrementar el contador rojo
        nextquestion();
    });
    $('#verde').click(function(){
        contadores[2]++;  // Incrementar el contador verde
        nextquestion();
    });
    $('#amarillo').click(function(){
        contadores[3]++;  // Incrementar el contador amarillo
        nextquestion();
    });
});

function nextquestion(){
    if (question === 3) {
        // Encontrar el índice del contador más grande
        var indiceMaximo = contadores.indexOf(Math.max(...contadores));

        // Mostrar el resultado
        $("body").html('<p class="resultado">Has obtenido '+obtenerNombreColor(indiceMaximo)+'</p>');
    } else {
        question++;
        showquestion();
    }
}

function showquestion(){
    switch (question) {
        case 0:
            break;
        case 1:
            pregunta2();
            break;
        case 2:
            pregunta3();
            break;
        case 3:
            pregunta4();
            break;
        default:
            return "Desconocido";
    }
}

function obtenerNombreColor(indice) {
    // Función para obtener el nombre del color basado en el índice
    switch (indice) {
        case 0:
            return "Azul";
        case 1:
            return "Rojo";
        case 2:
            return "Verde";
        case 3:
            return "Amarillo";
        default:
            return "Desconocido";
    }
}

function pregunta2(){
    $('.pregunta').html("¿Cómo demuestras tu fe en tu vida diaria?");
    $('#azul').html("A través de la oración o la meditación");
    $('#rojo').html("Tratando a los demás con bondad y respeto");
    $('#amarillo').html("Siguiendo los principios de mi religión");
    $('#verde').html("Manteniendo una actitud positiva");
}

function pregunta3(){
    $('.pregunta').html("¿Cómo te ayuda la fe en los momentos difíciles?");
    $('#azul').html("Me da esperanza y fuerza para seguir adelante");
    $('#rojo').html("Me recuerda que no estoy solo");
    $('#amarillo').html("Me ayuda a encontrar significado y propósito");
    $('#verde').html("Me proporciona consuelo y paz");
}

function pregunta4(){
    $('.pregunta').html("¿Crees que la fe puede cambiar con el tiempo?");
    $('#azul').html("Sí, creo que la fe puede evolucionar a medida que crecemos y cambiamos");
    $('#rojo').html("No, creo que la fe es constante y no cambia");
    $('#amarillo').html("Depende de la persona y de sus experiencias de vida");
    $('#verde').html("No estoy seguro, todavía estoy explorando lo que significa la fe para mí");
}