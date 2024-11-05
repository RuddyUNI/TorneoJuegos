
// Función para alternar el modo oscuro
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Cambia la clase y el texto del botón
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Modo Claro";
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeToggle.textContent = "Modo Oscuro";
    localStorage.setItem("darkMode", "disabled");
  }
}

// Cargar el modo oscuro si estaba activado en la última visita
document.addEventListener("DOMContentLoaded", () => {
  const darkModeStatus = localStorage.getItem("darkMode");
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (darkModeStatus === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Modo Claro";
  } else {
    darkModeToggle.textContent = "Modo Oscuro";
  }
});

// Asignar el evento al botón
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
