// Función para alternar entre fondo negro y blanco
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Cambiar el texto del botón
    const themeToggle = document.getElementById("themeToggle");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Cambiar a Fondo Negro";
    } else {
        themeToggle.textContent = "Cambiar a Fondo Blanco";
    }
});
