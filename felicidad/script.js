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
    $('.pregunta').html("¿Qué te hace feliz?");
    $('#azul').html("Pasar tiempo haciendo lo que me gusta");
    $('#rojo').html("Ayudar a los demás y hacerlos felices");
    $('#amarillo').html("Estar en paz conmigo mismo");
    $('#verde').html("Aprender y crecer como persona");
}

function pregunta3(){
    $('.pregunta').html("¿Crees que la felicidad es un destino o un viaje?");
    $('#azul').html("Un destino, porque creo que hay un punto de llegada donde puedo decir que soy completamente feliz");
    $('#rojo').html("Un viaje, porque creo que la felicidad se encuentra en el proceso y no necesariamente en el resultado");
    $('#amarillo').html("Ambos, porque creo que la felicidad puede ser tanto un estado de ser como un proceso continuo");
    $('#verde').html("No estoy seguro, todavía estoy descubriendo lo que significa la felicidad para mí");
}

function pregunta4(){
    $('.pregunta').html("¿Cómo manejas los momentos en los que no te sientes feliz?");
    $('#azul').html("Trato de recordar que está bien no estar siempre feliz");
    $('#rojo').html("Busco apoyo en mis amigos y familiares");
    $('#amarillo').html("Intento cambiar mi perspectiva y buscar el lado positivo");
    $('#verde').html("Me permito sentirme triste y espero que pase");
}