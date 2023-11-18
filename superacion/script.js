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
    $('.pregunta').html("¿Cómo reaccionas ante el fracaso?");
    $('#azul').html("Lo veo como una oportunidad para aprender");
    $('#rojo').html("Intento de nuevo hasta que tenga éxito");
    $('#amarillo').html("Busco una alternativa o un plan B");
    $('#verde').html("Reflexiono sobre lo que podría haber hecho de manera diferente");
}

function pregunta3(){
    $('.pregunta').html("¿Cómo te motivas para alcanzar tus metas?");
    $('#azul').html("Me imagino a mí mismo alcanzando la meta");
    $('#rojo').html("Divido la meta en pequeños pasos manejables");
    $('#amarillo').html("Busco apoyo y aliento de los demás");
    $('#verde').html("Me recompenso a mí mismo por los pequeños logros en el camino");
}

function pregunta4(){
    $('.pregunta').html("¿Cómo manejas las críticas?");
    $('#azul').html("Las veo como una oportunidad para mejorar");
    $('#rojo').html("Intento entender el punto de vista del otro");
    $('#amarillo').html("Reflexiono sobre si la crítica es justa antes de decidir cómo reaccionar");
    $('#verde').html("Acepto la crítica y decido cómo puedo usarla para crecer");
}