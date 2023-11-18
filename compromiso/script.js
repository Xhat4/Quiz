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
    $('.pregunta').html("¿Cómo demuestras tu compromiso con algo o alguien?");
    $('#azul').html("Siendo constante y confiable");
    $('#rojo').html("Dando lo mejor de mí en todo momento");
    $('#amarillo').html("Siendo honesto y transparente sobre mis intenciones");
    $('#verde').html("Haciendo sacrificios cuando es necesario");
}

function pregunta3(){
    $('.pregunta').html("¿Qué te motiva a comprometerte con algo o alguien?");
    $('#azul').html("Creer en la causa o en la persona");
    $('#rojo').html("Ver resultados positivos de mi esfuerzo");
    $('#amarillo').html("Sentir que estoy haciendo una diferencia");
    $('#verde').html("La satisfacción personal que obtengo");
}

function pregunta4(){
    $('.pregunta').html("¿Has tenido alguna vez dificultades para mantenerte comprometido?");
    $('#azul').html("Sí, a veces es difícil mantener el compromiso cuando las cosas se ponen difíciles");
    $('#rojo').html("No, cuando me comprometo con algo, siempre lo sigo hasta el final");
    $('#amarillo').html("A veces, depende de la situación");
    $('#verde').html("No estoy seguro, tendría que pensar en ello");
}