$(document).ready(function() {

    // Función para generar un color aleatorio en formato hexadecimal
    function randomColor() {
        var hex = Math.floor(Math.random() * 16777216).toString(16); // Genera un número aleatorio entre 0 y 16777215 y lo convierte a hexadecimal
        return "#" + ("000000" + hex).slice(-6); // Añade ceros a la izquierda si el número es menor a 6 dígitos y devuelve el color con el símbolo #
    }

    // Función para cambiar el color de las velas de forma aleatoria cada segundo
    function changeColor() {
        $(".vela").each(function() { // Para cada elemento con la clase vela
            var color = randomColor(); // Genera un color aleatorio
            $(this).css("filter", "drop-shadow(0px 0px 100px " + color + ")"); // Aplica un filtro de sombra con el color aleatorio
        });
        setTimeout(changeColor, 600); // Vuelve a llamar a la función después de un segundo
    }

    changeColor(); // Llama a la función por primera vez

    // Función para rotar las calaveritas al hacer clic sobre ellas
    $(".calavera").click(function() { // Cuando se hace clic en un elemento con la clase calavera
        var angle = Math.floor(Math.random() * 360); // Genera un ángulo aleatorio entre 0 y 359 grados
        $(this).css("transform", "rotate(" + angle + "deg)"); // Aplica una transformación de rotación con el ángulo aleatorio
    });

});
