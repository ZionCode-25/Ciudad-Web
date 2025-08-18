// ===== LÓGICA PRINCIPAL DEL JUEGO =====

// --- Estado del juego ---
let totalLevels, currentLevel, gameCompleted;
let cm; // Editor CodeMirror

// --- Elementos del DOM ---
const editorElement = document.getElementById("editor");
const preview = document.getElementById("preview");
const messageEl = document.getElementById("message");
const levelTitleEl = document.getElementById("level-title");
const levelInstrEl = document.getElementById("level-instructions");
const levelGoalsEl = document.getElementById("level-goals");
const levelListEl = document.getElementById("level-list");
const levelTagsEl = document.getElementById("level-tags");
const levelNumEl = document.getElementById("level-num");
const levelTotalEl = document.getElementById("level-total");
const progressBar = document.getElementById("progress-bar");

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar variables después de que levels esté disponible
  totalLevels = levels.length;
  currentLevel = parseInt(localStorage.getItem("cw_currentLevel")) || 0;
  gameCompleted =
    localStorage.getItem("cw_gameCompleted") === "true" ||
    currentLevel >= totalLevels;

  levelTotalEl.textContent = totalLevels;

  // Inicializar CodeMirror
  cm = CodeMirror(editorElement, {
    mode: "htmlmixed",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    lineWrapping: true,
  });

  // Auto-actualizar vista previa
  let autorunTimer;
  cm.on("change", () => {
    if (document.getElementById("autorun").checked) {
      clearTimeout(autorunTimer);
      autorunTimer = setTimeout(() => {
        renderPreview();
      }, 400);
    }
  });

  // Cargar nivel inicial
  loadLevel(currentLevel);
  renderPreview();
  updateProgress();
  checkGameCompletion();
});

// --- Funciones principales del juego ---

function loadLevel(levelIndex) {
  if (levelIndex >= totalLevels) {
    showCompletion();
    return;
  }

  const level = levels[levelIndex];

  levelTitleEl.textContent = level.title;
  levelInstrEl.textContent = level.instructions;

  // Mostrar objetivos
  levelGoalsEl.innerHTML = "";
  level.goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    levelGoalsEl.appendChild(li);
  });

  // Mostrar tags de categoría
  levelTagsEl.innerHTML = `
    <span style="color: ${level.categoryColor}">
      ${level.categoryIcon} ${level.categoryName}
    </span>
  `;

  cm.setValue(level.initialCode);
  messageEl.textContent = "";
  updateProgress();

  // Renderizar la vista previa después de un pequeño delay
  setTimeout(() => {
    renderPreview();
  }, 100);

  renderLevelList();
  highlightLevelList();
}

function renderPreview() {
  const code = cm.getValue();

  // Crear documento HTML completo para el iframe
  const iframeDoc = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 14px;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          line-height: 1.6;
          color: #333;
          background: white;
        }
        * { box-sizing: border-box; }
        h1, h2, h3, h4, h5, h6 { margin-top: 0; margin-bottom: 0.5em; }
        p { margin-top: 0; margin-bottom: 1em; }
        img { max-width: 100%; height: auto; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        input, button { padding: 8px; margin: 4px; border: 1px solid #ddd; border-radius: 4px; }
        button { background-color: #007bff; color: white; cursor: pointer; }
        button:hover { background-color: #0056b3; }
        ul, ol { padding-left: 20px; }
        a { color: #007bff; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      ${code}
    </body>
    </html>
  `;

  // Escribir el contenido en el iframe
  const iframeDocument =
    preview.contentDocument || preview.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(iframeDoc);
  iframeDocument.close();
}

function checkLevel() {
  const code = cm.getValue().trim();

  if (!code) {
    messageEl.textContent = "❌ Escribe algo de código primero";
    messageEl.style.color = "#fb7185";
    return;
  }

  const validator = levels[currentLevel].validate;
  try {
    const ok = validator(code);
    if (ok) {
      messageEl.textContent = "✅ ¡Nivel completado!";
      messageEl.style.color = "#4ade80";

      // Guardar progreso
      localStorage.setItem(`level-${currentLevel}`, "completed");

      if (currentLevel < totalLevels - 1) {
        currentLevel++;
        localStorage.setItem("cw_currentLevel", currentLevel);
        setTimeout(() => {
          loadLevel(currentLevel);
        }, 900);
      } else {
        setTimeout(() => {
          showCompletion();
        }, 800);
      }
      renderLevelList();
      highlightLevelList();
    } else {
      messageEl.textContent =
        "❌ Aún no cumple los objetivos. Revisa las metas del nivel.";
      messageEl.style.color = "#fb7185";
    }
  } catch (error) {
    messageEl.textContent = "❌ Error en el código: " + error.message;
    messageEl.style.color = "#fb7185";
  }
}

function showCompletion() {
  gameCompleted = true;
  localStorage.setItem("cw_gameCompleted", "true");

  levelTitleEl.textContent = "🎉 ¡Has completado la Ciudad Web!";
  levelInstrEl.textContent =
    "Todos los niveles superados. Puedes reiniciar o volver a repasar cualquier nivel que quieras.";
  levelGoalsEl.innerHTML = "";
  cm.setValue(
    "<!-- ¡Felicidades! -->\n<h1>Ciudad completada 🏆</h1>\n<p>Vuelve a practicar los niveles que quieras.</p>"
  );
  renderPreview();
  messageEl.textContent = "¡Juego completado!";
  messageEl.style.color = "#7dd3fc";
  progressBar.style.width = "100%";

  // Actualizar la lista para mostrar todos los niveles como accesibles
  highlightLevelList();

  // Mostrar sección de compartir
  showShareSection();
}

function renderLevelList() {
  levelListEl.innerHTML = "";

  let currentCategory = "";
  levels.forEach((level, i) => {
    // Agregar header de categoría si es nueva
    if (level.category !== currentCategory) {
      currentCategory = level.category;
      const categoryHeader = document.createElement("li");
      categoryHeader.className = "category-header";
      categoryHeader.innerHTML = `<strong>${level.categoryIcon} ${level.categoryName}</strong>`;
      categoryHeader.style.color = level.categoryColor;
      categoryHeader.style.marginTop = i > 0 ? "16px" : "0";
      categoryHeader.style.marginBottom = "8px";
      categoryHeader.style.fontSize = "14px";
      categoryHeader.style.cursor = "default";
      levelListEl.appendChild(categoryHeader);
    }

    // Crear elemento de nivel
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${level.title}`;

    const isCompleted = localStorage.getItem(`level-${i}`) === "completed";
    const isAccessible = i <= currentLevel || gameCompleted;

    if (isCompleted) {
      li.innerHTML += ' <span class="badge">✓</span>';
      li.style.color = "#4ade80";
    }

    if (isAccessible) {
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        if (i <= currentLevel || gameCompleted) {
          currentLevel = i;
          loadLevel(i);
        }
      });
    } else {
      li.style.opacity = "0.5";
      li.style.cursor = "not-allowed";
    }

    levelListEl.appendChild(li);
  });
}

function highlightLevelList() {
  const items = levelListEl.querySelectorAll("li:not(.category-header)");
  items.forEach((item, i) => {
    item.style.fontWeight = i === currentLevel ? "bold" : "normal";
    item.style.background =
      i === currentLevel ? "rgba(125, 211, 252, 0.1)" : "transparent";
  });
}

function updateProgress() {
  const completedCount = Object.keys(localStorage).filter(
    (key) => key.startsWith("level-") && localStorage[key] === "completed"
  ).length;

  const progressPercent = (completedCount / totalLevels) * 100;
  progressBar.style.width = `${progressPercent}%`;

  levelNumEl.textContent = currentLevel + 1;
}

function checkGameCompletion() {
  const totalLevels = Object.values(categories).reduce(
    (sum, cat) => sum + cat.levels.length,
    0
  );
  const completedLevels = Object.keys(localStorage).filter(
    (key) => key.startsWith("level-") && localStorage[key] === "completed"
  ).length;

  if (completedLevels === totalLevels) {
    showShareSection();
  }
}
