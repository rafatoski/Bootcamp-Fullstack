// Función para enviar la URL ingresada por el usuario a PageSpeed Insights
function checkPageSpeedForInputUrl() {
    // Obtener el valor de la URL ingresada por el usuario
    const inputUrl = document.getElementById('url').value;

    // Verificar si se ingresó una URL válida
    if (inputUrl.trim() !== '') {
        // Llamar a la función checkPageSpeed con la URL ingresada
        checkPageSpeed(inputUrl);
    } else {
        // Mostrar un mensaje de error si no se ingresó ninguna URL
        alert('Por favor, ingresa una URL válida.');
    }
}

// Capturar el evento de enviar el formulario
document.getElementById('searchForm').addEventListener('submit', function(event) {
    // Evitar que se envíe el formulario de manera predeterminada
    event.preventDefault();

    // Llamar a la función para verificar la velocidad de la página
    checkPageSpeedForInputUrl();
});

document.getElementById("searchBtn").addEventListener("click", function() {
    // Obtener el valor del campo de entrada donde se ingresa la URL
    var url = document.getElementById("url").value;

    // Construir la URL de Google PageSpeed Insights con el parámetro de consulta
    var pageSpeedURL = "https://developers.google.com/speed/pagespeed/insights/?url=" + encodeURIComponent(url);

    // Abrir la página de destino en una nueva pestaña
    window.open(pageSpeedURL, '_blank');
});
