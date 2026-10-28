
const KEY = "bluelock_game_scores_v1";

function obtenerResultados() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function guardarResultado(juego, puntos) {
  const nombre = prompt(
    "¿Qué nombre quieres mostrar en el ranking?",
    "Jugador Blue Lock"
  );

  if (nombre === null) return;

  const registro = {
    nombre: nombre.trim().slice(0, 25) || "Anónimo",
    juego: juego,
    puntos: Math.max(0, Math.round(puntos)),
    fecha: new Date().toISOString()
  };

  const resultados = obtenerResultados();
  resultados.push(registro);

  localStorage.setItem(KEY, JSON.stringify(resultados));
  alert("¡Resultado guardado!");
}
