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
    $('.pregunta').html("¿Cómo demuestras empatía hacia los demás?");
    $('#azul').html("Escuchando activamente cuando alguien me habla");
    $('#rojo').html("Ofreciendo apoyo cuando alguien está pasando por un momento difícil");
    $('#amarillo').html("Tratando de entender el punto de vista de los demás");
    $('#verde').html("Validando los sentimientos de los demás, incluso si no los comparto");
}

function pregunta3(){
    $('.pregunta').html("¿Cómo te sientes cuando alguien muestra empatía hacia ti?");
    $('#azul').html("Me siento comprendido y validado");
    $('#rojo').html("Me siento más conectado con la otra persona");
    $('#amarillo').html("Me siento aliviado de poder compartir mis sentimientos");
    $('#verde').html("Me siento agradecido de tener a alguien que se preocupa por mí");
}

function pregunta4(){
    $('.pregunta').html("¿Crees que es importante practicar la empatía? ¿Por qué?");
    $('#azul').html("Sí, porque ayuda a construir relaciones más fuertes y saludables");
    $('#rojo').html("Sí, porque nos hace más humanos y compasivos");
    $('#amarillo').html("Depende de la situación, pero en general, creo que es beneficioso");
    $('#verde').html("No estoy seguro, todavía estoy aprendiendo sobre la empatía");
}