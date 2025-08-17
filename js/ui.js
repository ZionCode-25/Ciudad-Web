// ===== FUNCIONES DE INTERFAZ Y UTILIDADES =====

// --- Sistema de ayuda ---
const helpPanel = document.getElementById("help-panel");
const helpOverlay = document.getElementById("help-overlay");
const helpBtn = document.getElementById("help-btn");
const closeHelpBtn = document.getElementById("close-help");
const helpBody = document.getElementById("help-body");

function showHelp() {
  const helpKey = levelHelpMap[currentLevel];
  const guide = helpGuides[helpKey];
  
  if (guide) {
    helpBody.innerHTML = `
      <h3>${guide.title}</h3>
      ${guide.content}
    `;
    helpPanel.classList.add("active");
    helpOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    // Guía genérica si no hay específica
    helpBody.innerHTML = `
      <h3>Ayuda General</h3>
      <div class="help-section">
        <p>Para este nivel, revisa las instrucciones y objetivos en el panel izquierdo.</p>
        <h4>Recursos útiles:</h4>
        <ul>
          <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">MDN HTML</a></li>
          <li><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">MDN CSS</a></li>
        </ul>
      </div>
    `;
    helpPanel.classList.add("active");
    helpOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function hideHelp() {
  helpPanel.classList.remove("active");
  helpOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Funciones de compartir ---
function showShareSection() {
  const shareSection = document.getElementById('share-section');
  if (shareSection) {
    shareSection.style.display = 'block';
    shareSection.classList.add('show');
  }
}

function shareToWhatsApp() {
  const message = encodeURIComponent(
    "🎉 ¡Acabo de completar el juego 'Ciudad Web' de Zion Code! " +
    "Aprendí HTML y CSS de forma divertida. " +
    "¡Pruébalo tú también! 🏙️💻"
  );
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${message} ${url}`, '_blank');
}

function shareToTwitter() {
  const text = encodeURIComponent(
    "🎉 ¡Completé 'Ciudad Web' de Zion Code! " +
    "Aprendí HTML y CSS jugando. " +
    "¡Pruébalo tú también!"
  );
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/share?text=${text}&url=${url}`, '_blank');
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("Ciudad Web de Zion Code");
  const description = encodeURIComponent(
    "¡Completé el juego de Zion Code! " +
    "Aprendí HTML y CSS construyendo mi propia ciudad web. " +
    "¡Pruébalo tú también!"
  );
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title} - ${description}`,
    '_blank'
  );
}

// --- Event listeners ---
document.addEventListener("DOMContentLoaded", function() {
  // Botones de ayuda
  if (helpBtn) {
    helpBtn.addEventListener("click", showHelp);
  }
  
  if (closeHelpBtn) {
    closeHelpBtn.addEventListener("click", hideHelp);
  }
  
  if (helpOverlay) {
    helpOverlay.addEventListener("click", hideHelp);
  }
  
  // Cerrar ayuda con ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && helpPanel && helpPanel.classList.contains("active")) {
      hideHelp();
    }
  });
});