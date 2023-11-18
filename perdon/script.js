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
    $('.pregunta').html("¿Cuándo crees que es apropiado perdonar a alguien?");
    $('#azul').html("Cuando la otra persona se disculpa");
    $('#rojo').html("Cuando siento que estoy listo para hacerlo");
    $('#amarillo').html("Cuando la otra persona ha aprendido de sus errores");
    $('#verde').html("Siempre, porque todos merecen una segunda oportunidad");
}

function pregunta3(){
    $('.pregunta').html("¿Cómo te sientes después de perdonar a alguien?");
    $('#azul').html("Aliviado");
    $('#rojo').html("Feliz de poder avanzar");
    $('#amarillo').html("Todavía un poco herido, pero esperanzado");
    $('#verde').html("Indiferente, el perdón es para mí, no para ellos");
}

function pregunta4(){
    $('.pregunta').html("¿Crees que hay algo que no puedas perdonar?");
    $('#azul').html("No, creo que todo puede ser perdonado con el tiempo");
    $('#rojo').html("Sí, algunas acciones son imperdonables");
    $('#amarillo').html("Depende de la situación y de cómo me afectó");
    $('#verde').html("o estoy seguro, nunca he estado en esa situación");
}