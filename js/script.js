// Función para obtener y mostrar el clima
function mostrarClima() {
    const apiKey = "2583a6df3ee5e58416707951552540a8"; // Reemplaza con tu API Key
    const ciudad = "San Jose Iturbide"; // Cambia por la ciudad que desees
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta de la API");
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos del clima:", data); // Depuración
            const clima = data.weather[0].description;
            const temperatura = data.main.temp;
            const icono = data.weather[0].icon;

            // Mostrar el clima en el contenedor lateral
            document.getElementById("clima").innerHTML = `
                <img src="http://openweathermap.org/img/wn/${icono}.png" alt="Icono del clima">
                <span>${temperatura}°C - ${clima}</span>
            `;
        })
        .catch(error => {
            console.error("Error al obtener el clima:", error);
            document.getElementById("clima").textContent = "No se pudo cargar el clima.";
        });
}

// Función para inicializar el calendario
function inicializarCalendario() {
    flatpickr("#calendario", {
        inline: true, // Muestra el calendario siempre visible
        static: true, // Evita que el calendario se abra en un modal
        locale: "es", // Idioma español
        dateFormat: "d/m/Y", // Formato de fecha
    });
}

// Llamar a las funciones cuando la página cargue
document.addEventListener("DOMContentLoaded", function() {
    mostrarClima();
    inicializarCalendario();
});