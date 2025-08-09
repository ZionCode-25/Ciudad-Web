/* Juego: niveles por categorías, editor, validaciones, guardado en localStorage
    Niveles organizados por categorías HTML y CSS
*/

// Sistema de Guías - Contenido educativo
const helpGuides = {
  // Guías HTML
  "html-primer-ladrillo": {
    title: "Elementos HTML Básicos",
    content: `
      <div class="help-section">
        <h3>🏗️ Elementos HTML Fundamentales</h3>
        <p>HTML usa <strong>etiquetas</strong> para estructurar el contenido. Cada etiqueta tiene una apertura y un cierre.</p>
        
        <h4>Encabezados (h1-h6)</h4>
        <p>Los encabezados organizan el contenido jerárquicamente:</p>
        <pre><code>&lt;h1&gt;Título principal&lt;/h1&gt;
        &lt;h2&gt;Subtítulo&lt;/h2&gt;
        &lt;h3&gt;Título de sección&lt;/h3&gt;</code></pre>
        
        <h4>Párrafos</h4>
        <p>Los párrafos contienen texto normal:</p>
        <pre><code>&lt;p&gt;Este es un párrafo de texto.&lt;/p&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Tip:</strong> Siempre cierra las etiquetas. HTML es como abrir y cerrar paréntesis.
        </div>
      </div>
    `,
  },

  "html-imagen-en-la-fachada": {
    title: "Imágenes en HTML",
    content: `
      <div class="help-section">
        <h3>🖼️ Etiqueta &lt;img&gt;</h3>
        <p>Las imágenes se insertan con la etiqueta <code>&lt;img&gt;</code>, que es <strong>auto-cerrada</strong>.</p>
        
        <h4>Atributos esenciales</h4>
        <ul>
          <li><code>src</code>: La URL o ruta de la imagen</li>
          <li><code>alt</code>: Texto alternativo para accesibilidad</li>
        </ul>
        
        <pre><code>&lt;img src="https://via.placeholder.com/150" alt="Imagen de ejemplo"&gt;</code></pre>
        
        <div class="help-example">
          <strong>Ejemplo completo:</strong><br>
          <code>&lt;img src="https://picsum.photos/200/150" alt="Paisaje hermoso"&gt;</code>
        </div>
        
        <div class="help-tip">
          <strong>Accesibilidad:</strong> El atributo <code>alt</code> es crucial para usuarios con discapacidades visuales.
        </div>
      </div>
    `,
  },

  "html-navegacion": {
    title: "Enlaces y Navegación",
    content: `
      <div class="help-section">
        <h3>🔗 Enlaces con &lt;a&gt;</h3>
        <p>Los enlaces conectan páginas y recursos usando la etiqueta <code>&lt;a&gt;</code>.</p>
        
        <h4>Atributo href</h4>
        <p>Define el destino del enlace:</p>
        <pre><code>&lt;a href="https://example.com"&gt;Visitar Example&lt;/a&gt;</code></pre>
        
        <h4>Tipos de enlaces</h4>
        <ul>
          <li><strong>Externos:</strong> <code>href="https://google.com"</code></li>
          <li><strong>Internos:</strong> <code>href="pagina.html"</code></li>
          <li><strong>Email:</strong> <code>href="mailto:correo@ejemplo.com"</code></li>
        </ul>
        
        <div class="help-tip">
          <strong>Tip:</strong> El texto entre las etiquetas es lo que ve el usuario.
        </div>
      </div>
    `,
  },

  "html-lista-de-compras": {
    title: "Listas en HTML",
    content: `
      <div class="help-section">
        <h3>📝 Listas HTML</h3>
        <p>HTML tiene dos tipos principales de listas:</p>
        
        <h4>Lista desordenada (&lt;ul&gt;)</h4>
        <p>Para elementos sin orden específico:</p>
        <pre><code>&lt;ul&gt;
  &lt;li&gt;Manzanas&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
  &lt;li&gt;Naranjas&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        
        <h4>Lista ordenada (&lt;ol&gt;)</h4>
        <p>Para elementos con orden específico:</p>
        <pre><code>&lt;ol&gt;
  &lt;li&gt;Primer paso&lt;/li&gt;
  &lt;li&gt;Segundo paso&lt;/li&gt;
  &lt;li&gt;Tercer paso&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Estructura:</strong> Siempre usa <code>&lt;li&gt;</code> dentro de <code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code>.
        </div>
      </div>
    `,
  },

  // Guías CSS
  "css-color-en-el-titulo": {
    title: "Colores en CSS",
    content: `
      <div class="help-section">
        <h3>🎨 Aplicar Colores</h3>
        <p>CSS permite cambiar colores de varias maneras:</p>
        
        <h4>Métodos para aplicar CSS</h4>
        <p><strong>1. CSS Interno (recomendado para este ejercicio):</strong></p>
        <pre><code>&lt;style&gt;
  h1 {
    color: red;
  }
&lt;/style&gt;</code></pre>
        
        <p><strong>2. CSS Inline:</strong></p>
        <pre><code>&lt;h1 style="color: red;"&gt;Título rojo&lt;/h1&gt;</code></pre>
        
        <h4>Formas de especificar colores</h4>
        <ul>
          <li><strong>Nombres:</strong> <code>red</code>, <code>blue</code>, <code>green</code></li>
          <li><strong>Hexadecimal:</strong> <code>#ff0000</code> (rojo)</li>
          <li><strong>RGB:</strong> <code>rgb(255, 0, 0)</code> (rojo)</li>
        </ul>
        
        <div class="help-tip">
          <strong>Sintaxis CSS:</strong> selector { propiedad: valor; }
        </div>
      </div>
    `,
  },

  "css-box-model": {
    title: "Modelo de Caja CSS",
    content: `
      <div class="help-section">
        <h3>📦 Box Model</h3>
        <p>Cada elemento HTML es una "caja" con diferentes capas:</p>
        
        <h4>Componentes del Box Model</h4>
        <ul>
          <li><strong>Content:</strong> El contenido del elemento</li>
          <li><strong>Padding:</strong> Espacio interno entre contenido y borde</li>
          <li><strong>Border:</strong> El borde del elemento</li>
          <li><strong>Margin:</strong> Espacio externo alrededor del elemento</li>
        </ul>
        
        <h4>Ejemplo práctico</h4>
        <pre><code>.caja {
  padding: 20px;        /* Espacio interno */
  border: 2px solid blue;  /* Borde azul */
  margin: 10px;         /* Espacio externo */
}</code></pre>
        
        <div class="help-example">
          <strong>Resultado:</strong> Una caja con espacio interno, borde azul y separación de otros elementos.
        </div>
      </div>
    `,
  },

  "css-flexbox-basico": {
    title: "Flexbox - Layout Flexible",
    content: `
      <div class="help-section">
        <h3>🔄 Flexbox</h3>
        <p>Flexbox facilita la alineación y distribución de elementos.</p>
        
        <h4>Activar Flexbox</h4>
        <pre><code>.container {
  display: flex;
}</code></pre>
        
        <h4>Propiedades útiles</h4>
        <ul>
          <li><code>justify-content: center;</code> - Centra horizontalmente</li>
          <li><code>align-items: center;</code> - Centra verticalmente</li>
          <li><code>gap: 10px;</code> - Espacio entre elementos</li>
        </ul>
        
        <h4>Ejemplo completo</h4>
        <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}</code></pre>
        
        <div class="help-tip">
          <strong>Concepto clave:</strong> El contenedor padre controla cómo se organizan los hijos.
        </div>
      </div>
    `,
  },

  "css-grid-basico": {
    title: "CSS Grid - Layout en Cuadrícula",
    content: `
      <div class="help-section">
        <h3>🏗️ CSS Grid</h3>
        <p>Grid permite crear layouts bidimensionales (filas y columnas).</p>
        
        <h4>Activar Grid</h4>
        <pre><code>.grid {
  display: grid;
}</code></pre>
        
        <h4>Definir columnas</h4>
        <pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 columnas iguales */
  /* o también: */
  grid-template-columns: repeat(2, 1fr);
}</code></pre>
        
        <h4>Espaciado</h4>
        <pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;  /* Espacio entre elementos */
}</code></pre>
        
        <div class="help-tip">
          <strong>fr = fracción:</strong> 1fr significa "toma 1 parte del espacio disponible"
        </div>
      </div>
    `,
  },

  "css-pseudo-clases": {
    title: "Pseudo-clases CSS",
    content: `
      <div class="help-section">
        <h3>✨ Pseudo-clases</h3>
        <p>Las pseudo-clases aplican estilos en estados específicos del elemento.</p>
        
        <h4>:hover - Al pasar el mouse</h4>
        <pre><code>button:hover {
  background-color: blue;
  color: white;
}</code></pre>
        
        <h4>Otras pseudo-clases útiles</h4>
        <ul>
          <li><code>:focus</code> - Cuando el elemento tiene foco</li>
          <li><code>:active</code> - Cuando se está haciendo clic</li>
          <li><code>:first-child</code> - Primer hijo de su contenedor</li>
        </ul>
        
        <div class="help-example">
          <strong>Ejemplo completo:</strong><br>
          <pre><code>button {
  background: gray;
  transition: all 0.3s ease;
}

button:hover {
  background: blue;
  transform: scale(1.05);
}</code></pre>
        </div>
      </div>
    `,
  },

  "css-transiciones": {
    title: "Transiciones CSS",
    content: `
      <div class="help-section">
        <h3>🎬 Transiciones</h3>
        <p>Las transiciones suavizan los cambios entre estados CSS.</p>
        
        <h4>Sintaxis básica</h4>
        <pre><code>elemento {
  transition: propiedad duración tipo-easing;
}</code></pre>
        
        <h4>Ejemplo práctico</h4>
        <pre><code>button {
  background: gray;
  transition: background 0.3s ease;
}

button:hover {
  background: blue;
}</code></pre>
        
        <h4>Transición múltiple</h4>
        <pre><code>button {
  transition: all 0.3s ease;
  /* o específicas: */
  transition: background 0.3s ease, transform 0.2s ease;
}</code></pre>
        
        <div class="help-tip">
          <strong>Tip:</strong> <code>all</code> aplica transición a todas las propiedades que cambien.
        </div>
      </div>
    `,
  },

  "html-formulario-simple": {
    title: "Formularios HTML",
    content: `
      <div class="help-section">
        <h3>📝 Formularios</h3>
        <p>Los formularios recopilan información del usuario.</p>
        
        <h4>Estructura básica</h4>
        <pre><code>&lt;form&gt;
  &lt;input type="text" name="nombre" placeholder="Tu nombre"&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
        
        <h4>Tipos de input</h4>
        <ul>
          <li><code>type="text"</code> - Texto normal</li>
          <li><code>type="email"</code> - Email</li>
          <li><code>type="password"</code> - Contraseña</li>
          <li><code>type="number"</code> - Números</li>
        </ul>
        
        <h4>Atributos importantes</h4>
        <ul>
          <li><code>name</code> - Identifica el campo</li>
          <li><code>placeholder</code> - Texto de ayuda</li>
          <li><code>required</code> - Campo obligatorio</li>
        </ul>
        
        <div class="help-tip">
          <strong>Accesibilidad:</strong> Usa <code>&lt;label&gt;</code> para describir cada input.
        </div>
      </div>
    `,
  },

  "html-tabla-basica": {
    title: "Tablas HTML",
    content: `
      <div class="help-section">
        <h3>📊 Tablas HTML</h3>
        <p>Las tablas organizan datos en filas y columnas.</p>
        
        <h4>Estructura básica</h4>
        <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Nombre&lt;/th&gt;
    &lt;th&gt;Edad&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Juan&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        
        <h4>Elementos de tabla</h4>
        <ul>
          <li><code>&lt;table&gt;</code> - Contenedor principal</li>
          <li><code>&lt;tr&gt;</code> - Fila (table row)</li>
          <li><code>&lt;th&gt;</code> - Encabezado (table header)</li>
          <li><code>&lt;td&gt;</code> - Celda de datos (table data)</li>
        </ul>
        
        <h4>Estructura semántica</h4>
        <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Producto&lt;/th&gt;&lt;th&gt;Precio&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Laptop&lt;/td&gt;&lt;td&gt;$800&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Tip:</strong> Usa <code>&lt;th&gt;</code> para encabezados y <code>&lt;td&gt;</code> para datos.
        </div>
      </div>
    `,
  },

  "html-estructura-semantica": {
    title: "HTML Semántico",
    content: `
      <div class="help-section">
        <h3>🏗️ Estructura Semántica</h3>
        <p>HTML5 incluye elementos semánticos que dan significado al contenido.</p>
        
        <h4>Elementos principales</h4>
        <ul>
          <li><code>&lt;header&gt;</code> - Encabezado de página o sección</li>
          <li><code>&lt;main&gt;</code> - Contenido principal</li>
          <li><code>&lt;section&gt;</code> - Sección temática</li>
          <li><code>&lt;footer&gt;</code> - Pie de página</li>
        </ul>
        
        <h4>Estructura típica</h4>
        <pre><code>&lt;header&gt;
  &lt;h1&gt;Mi Sitio Web&lt;/h1&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section&gt;
    &lt;h2&gt;Sobre nosotros&lt;/h2&gt;
    &lt;p&gt;Contenido...&lt;/p&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2024 Mi Sitio&lt;/p&gt;
&lt;/footer&gt;</code></pre>
        
        <h4>Otros elementos semánticos</h4>
        <ul>
          <li><code>&lt;nav&gt;</code> - Navegación</li>
          <li><code>&lt;article&gt;</code> - Contenido independiente</li>
          <li><code>&lt;aside&gt;</code> - Contenido lateral</li>
        </ul>
        
        <div class="help-tip">
          <strong>Beneficios:</strong> Mejor SEO, accesibilidad y mantenimiento del código.
        </div>
      </div>
    `,
  },

  "html-atributos-avanzados": {
    title: "Atributos HTML Avanzados",
    content: `
      <div class="help-section">
        <h3>⚡ Atributos de Input</h3>
        <p>Los inputs modernos tienen atributos que mejoran la experiencia del usuario.</p>
        
        <h4>Tipos de input especializados</h4>
        <pre><code>&lt;input type="email" placeholder="tu@email.com" required&gt;
&lt;input type="password" placeholder="Contraseña" required&gt;
&lt;input type="number" min="1" max="100"&gt;
&lt;input type="date"&gt;</code></pre>
        
        <h4>Atributos de validación</h4>
        <ul>
          <li><code>required</code> - Campo obligatorio</li>
          <li><code>placeholder</code> - Texto de ayuda</li>
          <li><code>min/max</code> - Valores mínimo/máximo</li>
          <li><code>pattern</code> - Expresión regular</li>
        </ul>
        
        <h4>Ejemplo completo</h4>
        <pre><code>&lt;form&gt;
  &lt;input 
    type="email" 
    name="email"
    placeholder="Ingresa tu email" 
    required
  &gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Validación automática:</strong> El navegador valida automáticamente estos campos.
        </div>
      </div>
    `,
  },

  "css-responsive-simple": {
    title: "CSS Responsive - Media Queries",
    content: `
      <div class="help-section">
        <h3>📱 Diseño Responsive</h3>
        <p>Media queries permiten aplicar estilos según el tamaño de pantalla.</p>
        
        <h4>Sintaxis básica</h4>
        <pre><code>@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}</code></pre>
        
        <h4>Breakpoints comunes</h4>
        <ul>
          <li><code>max-width: 480px</code> - Móviles</li>
          <li><code>max-width: 768px</code> - Tablets</li>
          <li><code>max-width: 1024px</code> - Laptops</li>
          <li><code>min-width: 1200px</code> - Escritorio</li>
        </ul>
        
        <h4>Ejemplo práctico</h4>
        <pre><code>/* Desktop: 2 columnas */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Móvil: 1 columna */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}</code></pre>
        
        <div class="help-tip">
          <strong>Mobile First:</strong> Diseña primero para móvil, luego escala hacia arriba.
        </div>
      </div>
    `,
  },

  "css-animacion-css": {
    title: "Animaciones CSS",
    content: `
      <div class="help-section">
        <h3>🎬 Animaciones CSS</h3>
        <p>Las animaciones CSS crean movimiento usando @keyframes.</p>
        
        <h4>Definir keyframes</h4>
        <pre><code>@keyframes flotar {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}</code></pre>
        
        <h4>Aplicar animación</h4>
        <pre><code>.item {
  animation: flotar 2s ease-in-out infinite;
}</code></pre>
        
        <h4>Propiedades de animation</h4>
        <ul>
          <li><code>animation-name</code> - Nombre del keyframe</li>
          <li><code>animation-duration</code> - Duración (2s, 500ms)</li>
          <li><code>animation-timing-function</code> - Curva (ease, linear)</li>
          <li><code>animation-iteration-count</code> - Repeticiones (infinite, 3)</li>
        </ul>
        
        <h4>Sintaxis corta</h4>
        <pre><code>.item {
  animation: flotar 2s ease-in-out infinite;
  /*       nombre duración timing repeticiones */
}</code></pre>
        
        <div class="help-tip">
          <strong>Performance:</strong> Anima transform y opacity para mejor rendimiento.
        </div>
      </div>
    `,
  },

  "css-variables-css": {
    title: "Variables CSS (Custom Properties)",
    content: `
      <div class="help-section">
        <h3>🎨 Variables CSS</h3>
        <p>Las variables CSS permiten reutilizar valores y crear temas dinámicos.</p>
        
        <h4>Definir variables</h4>
        <pre><code>:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --spacing: 16px;
}</code></pre>
        
        <h4>Usar variables</h4>
        <pre><code>.card {
  background: var(--color-primary);
  padding: var(--spacing);
  color: var(--color-secondary);
}</code></pre>
        
        <h4>Variables con fallback</h4>
        <pre><code>.element {
  color: var(--color-text, #333);
  /* Si --color-text no existe, usa #333 */
}</code></pre>
        
        <h4>Ejemplo completo</h4>
        <pre><code>:root {
  --primary: #007bff;
  --padding: 20px;
}

.card {
  background: var(--primary);
  padding: var(--padding);
  border-radius: 8px;
}</code></pre>
        
        <div class="help-tip">
          <strong>Ventaja:</strong> Cambia una variable y actualiza todo el diseño automáticamente.
        </div>
      </div>
    `,
  },

  "css-posicionamiento": {
    title: "Posicionamiento CSS",
    content: `
      <div class="help-section">
        <h3>📍 Position en CSS</h3>
        <p>La propiedad position controla cómo se ubican los elementos.</p>
        
        <h4>Tipos de posicionamiento</h4>
        <ul>
          <li><code>static</code> - Posición normal (por defecto)</li>
          <li><code>relative</code> - Relativo a su posición original</li>
          <li><code>absolute</code> - Relativo al contenedor posicionado más cercano</li>
          <li><code>fixed</code> - Relativo a la ventana del navegador</li>
        </ul>
        
        <h4>Position absolute</h4>
        <pre><code>.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}</code></pre>
        
        <h4>Contenedor de referencia</h4>
        <pre><code>.container {
  position: relative; /* Crea contexto de posicionamiento */
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
}</code></pre>
        
        <h4>Propiedades de ubicación</h4>
        <ul>
          <li><code>top</code> - Distancia desde arriba</li>
          <li><code>right</code> - Distancia desde la derecha</li>
          <li><code>bottom</code> - Distancia desde abajo</li>
          <li><code>left</code> - Distancia desde la izquierda</li>
        </ul>
        
        <div class="help-tip">
          <strong>Tip:</strong> El contenedor padre debe tener <code>position: relative</code> para que absolute funcione correctamente.
        </div>
      </div>
    `,
  },
};

// Mapeo de niveles a guías
const levelHelpMap = {
  0: "html-primer-ladrillo",
  1: "html-imagen-en-la-fachada",
  2: "html-navegacion",
  3: "html-lista-de-compras",
  4: "html-formulario-simple",
  5: "html-tabla-basica",
  6: "html-estructura-semantica",
  7: "html-atributos-avanzados",
  8: "css-color-en-el-titulo",
  9: "css-box-model",
  10: "css-flexbox-basico",
  11: "css-grid-basico",
  12: "css-pseudo-clases",
  13: "css-transiciones",
  14: "css-responsive-simple",
  15: "css-animacion-css",
  16: "css-variables-css",
  17: "css-posicionamiento",
};

const categories = {
  html: {
    name: "HTML Básico",
    color: "#e34c26",
    icon: "🏗️",
    levels: [
      {
        title: "Primer ladrillo",
        instructions:
          "Crea un HTML mínimo que contenga <h1> y <p>. Usa el texto que quieras.",
        goals: ["Contener un <h1>", "Contener un <p>"],
        initialCode: "",
        validate: (code) =>
          /<h1[\s\S]*?>[\s\S]*?<\/h1>/i.test(code) &&
          /<p[\s\S]*?>[\s\S]*?<\/p>/i.test(code),
      },
      {
        title: "Imagen en la fachada",
        instructions:
          "Inserta una imagen con <img> y añade atributo alt. Puede ser una URL pública (ej: https://via.placeholder.com/150).",
        goals: ["Tener una etiqueta img", "Tener atributo alt"],
        initialCode: "<h1>Img aquí debajo</h1>",
        validate: (code) =>
          /<img[^>]*src=['"][^'"]+['"][^>]*>/i.test(code) &&
          /<img[^>]*alt=['"][^'"]+['"][^>]*>/i.test(code),
      },
      {
        title: "Navegación",
        instructions:
          "Crea un enlace (<a>) que apunte a https://example.com y que tenga texto visible.",
        goals: ["Crear un enlace con href", "Texto visible en el enlace"],
        initialCode: "",
        validate: (code) =>
          /<a[^>]*href=['"]https?:\/\/[^'"]+['"][^>]*>[\s\S]*?<\/a>/i.test(
            code
          ),
      },
      {
        title: "Lista de compras",
        instructions:
          "Haz una lista desordenada (<ul>) con al menos 3 <li> elementos.",
        goals: ["Usar <ul>", "Al menos 3 elementos <li>"],
        initialCode: "",
        validate: (code) =>
          /<ul[^>]*>[\s\S]*?<\/ul>/i.test(code) &&
          (code.match(/<li\b/gi) || []).length >= 3,
      },
      {
        title: "Formulario simple",
        instructions:
          'Crea un formulario con un <input> (name) y un <button type="submit">.',
        goals: ["input con atributo name", "submit button"],
        initialCode: "",
        validate: (code) =>
          /<input[^>]*name=['"][^'"]+['"][^>]*>/i.test(code) &&
          /<button[^>]*type=['"]?submit['"]?[^>]*>/i.test(code),
      },
      {
        title: "Tabla básica",
        instructions:
          "Crea una tabla con <table>, <tr>, <th> y <td>. Al menos 2 filas y 2 columnas.",
        goals: ["Usar <table>", "Al menos 2 <tr>", "Usar <th> y <td>"],
        initialCode: "",
        validate: (code) =>
          /<table[^>]*>/i.test(code) &&
          (code.match(/<tr\b/gi) || []).length >= 2 &&
          /<th\b/i.test(code) &&
          /<td\b/i.test(code),
      },
      {
        title: "Estructura semántica",
        instructions:
          "Usa etiquetas semánticas: <header>, <main>, <section> y <footer>.",
        goals: [
          "Usar <header>",
          "Usar <main>",
          "Usar <section>",
          "Usar <footer>",
        ],
        initialCode: "",
        validate: (code) =>
          /<header\b/i.test(code) &&
          /<main\b/i.test(code) &&
          /<section\b/i.test(code) &&
          /<footer\b/i.test(code),
      },
      {
        title: "Atributos avanzados",
        instructions: "Crea un input con placeholder, required y type='email'.",
        goals: [
          "input type='email'",
          "atributo placeholder",
          "atributo required",
        ],
        initialCode: "",
        validate: (code) =>
          /<input[^>]*type=['"]email['"][^>]*>/i.test(code) &&
          /<input[^>]*placeholder=/i.test(code) &&
          /<input[^>]*required/i.test(code),
      },
    ],
  },
  css: {
    name: "CSS Estilos",
    color: "#1572b6",
    icon: "🎨",
    levels: [
      {
        title: "Color en el título",
        instructions:
          "Dale color rojo al <h1> usando una etiqueta <style> en el propio HTML o un atributo style.",
        goals: ["Cambiar color del h1 a rojo"],
        initialCode: "<h1>Hola Mundo</h1>\n<style>\n\n</style>",
        validate: (code) =>
          /<h1[^>]*style=["'][^"']*color\s*:\s*(red|#ff0000|rgb\(255,\s*0,\s*0\))/i.test(
            code
          ) ||
          /<style[^>]*>[\s\S]*?h1[\s\S]*?color\s*:\s*(red|#ff0000|rgb\(255,\s*0,\s*0\))/i.test(
            code
          ),
      },
      {
        title: "Box model",
        instructions:
          "Crea un div con clase .caja y dale padding y border usando <style> interno.",
        goals: [
          "Contener .caja",
          "Tener reglas CSS para .caja con padding y border",
        ],
        initialCode: '<div class="caja">Mi caja</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasClass = /class\s*=\s*["'][^"']*caja[^"']*["']/i.test(code);
          const hasPadding = /\.caja[^{}]*\{[^{}]*padding\s*:[^;}]+/i.test(
            code
          );
          const hasBorder = /\.caja[^{}]*\{[^{}]*border\s*:[^;}]+/i.test(code);
          return hasClass && hasPadding && hasBorder;
        },
      },
      {
        title: "Flexbox básico",
        instructions:
          "Usa display:flex en un contenedor para alinear 3 cajas horizontalmente.",
        goals: ["Contenedor con display:flex", "3 elementos hijos visibles"],
        initialCode:
          '<div class="container">\n  <div>Caja 1</div>\n  <div>Caja 2</div>\n  <div>Caja 3</div>\n</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasFlex = /display\s*:\s*flex/i.test(code);
          const divCount = (code.match(/<div[^>]*>/gi) || []).length;
          return hasFlex && divCount >= 4; // container + 3 hijos
        },
      },
      {
        title: "Grid básico",
        instructions: "Crea un grid de 2 columnas y coloca 4 elementos dentro.",
        goals: ["display:grid con 2 columnas", "4 hijos dentro del grid"],
        initialCode:
          '<div class="grid">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n  <div>Item 4</div>\n</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasGrid = /display\s*:\s*grid/i.test(code);
          const hasTwoColumns =
            /grid-template-columns\s*:\s*[^;]*(repeat\s*\(\s*2\s*,|1fr\s+1fr|50%\s+50%)/i.test(
              code
            );
          return hasGrid && hasTwoColumns;
        },
      },
      {
        title: "Pseudo-clases",
        instructions:
          "Añade una regla :hover para <button> que cambie su background o color.",
        goals: ["Regla :hover para button"],
        initialCode: "<button>Hover me!</button>\n<style>\n\n</style>",
        validate: (code) => /button\s*:\s*hover|button:hover/i.test(code),
      },
      {
        title: "Transiciones",
        instructions:
          "Aplica una transición para que el cambio en :hover sea suave (transition en button).",
        goals: ["Tener transition en button", "Efecto en :hover"],
        initialCode: "<button>Smooth hover!</button>\n<style>\n\n</style>",
        validate: (code) => {
          const hasTransition =
            /button[^{}]*\{[^{}]*transition\s*:[^;}]+/i.test(code);
          const hasHover = /button\s*:\s*hover|button:hover/i.test(code);
          return hasTransition && hasHover;
        },
      },
      {
        title: "Responsive simple",
        instructions:
          "Añade una regla @media para que .grid tenga 1 columna en pantallas pequeñas.",
        goals: ["@media con grid a 1 columna"],
        initialCode:
          '<div class="grid">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n<style>\n.grid { display: grid; grid-template-columns: 1fr 1fr; }\n\n</style>',
        validate: (code) => {
          const hasMedia = /@media[^{]*\{/i.test(code);
          const hasOneColumn = /grid-template-columns\s*:\s*(1fr|100%)/i.test(
            code
          );
          return hasMedia && hasOneColumn;
        },
      },
      {
        title: "Animación CSS",
        instructions:
          "Crea una animación CSS llamada 'flotar' y aplícala a .item.",
        goals: ["@keyframes flotar", "usar animation en .item"],
        initialCode: '<div class="item">Anímame!</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasKeyframes = /@keyframes\s+flotar/i.test(code);
          const hasAnimation = /\.item[^{}]*\{[^{}]*animation\s*:[^;}]+/i.test(
            code
          );
          return hasKeyframes && hasAnimation;
        },
      },
      {
        title: "Variables CSS",
        instructions:
          "Define variables CSS (--color-primary) y úsalas en un elemento.",
        goals: [
          "Definir variable --color-primary",
          "Usar var(--color-primary)",
        ],
        initialCode:
          '<div class="card">Card con variables</div>\n<style>\n\n</style>',
        validate: (code) =>
          /--[a-zA-Z-]+\s*:/i.test(code) &&
          /var\s*\(\s*--[a-zA-Z-]+\s*\)/i.test(code),
      },
      {
        title: "Posicionamiento",
        instructions:
          "Usa position: absolute para posicionar un elemento en la esquina superior derecha.",
        goals: ["position: absolute", "top y right definidos"],
        initialCode:
          '<div class="container">\n  <div class="badge">Badge</div>\n  <p>Contenido principal</p>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /position\s*:\s*absolute/i.test(code) &&
          /top\s*:/i.test(code) &&
          /right\s*:/i.test(code),
      },
    ],
  },
};

// Convertir estructura de categorías a array plano para compatibilidad
const levels = [];
Object.keys(categories).forEach((categoryKey) => {
  categories[categoryKey].levels.forEach((level, index) => {
    levels.push({
      ...level,
      category: categoryKey,
      categoryName: categories[categoryKey].name,
      categoryColor: categories[categoryKey].color,
      categoryIcon: categories[categoryKey].icon,
    });
  });
});

// --- Estado ---
const totalLevels = levels.length;
let currentLevel = parseInt(localStorage.getItem("cw_currentLevel")) || 0;
let gameCompleted =
  localStorage.getItem("cw_gameCompleted") === "true" ||
  currentLevel >= totalLevels;
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

levelTotalEl.textContent = totalLevels;

// rellenar lista de niveles en el aside con categorías
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

    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${level.title}`;
    li.dataset.index = i;
    li.style.paddingLeft = "12px";
    li.style.fontSize = "13px";

    // Configurar estilos y acceso basado en el estado del juego
    if (gameCompleted) {
      // Si el juego está completado, todos los niveles son accesibles
      li.style.color = i === currentLevel ? "#E6EEF3" : "#7dd3fc";
      li.style.cursor = "pointer";
    } else {
      // Lógica normal de progresión
      li.style.color =
        i < currentLevel
          ? "#7dd3fc"
          : i === currentLevel
          ? "#E6EEF3"
          : "#6b7280";
      li.style.cursor = i <= currentLevel ? "pointer" : "default";
    }

    li.style.fontWeight = i === currentLevel ? "700" : "400";

    li.addEventListener("click", () => {
      if (i <= currentLevel || gameCompleted) {
        loadLevel(i);
      }
    });
    levelListEl.appendChild(li);
  });
}

// Ejecutar la función inicialmente
renderLevelList();

// inicializa CodeMirror
let cm = CodeMirror(editorElement, {
  value: levels[currentLevel].initialCode,
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  autoCloseTags: true,
  matchBrackets: true,
  tabSize: 2,
});

// cargar nivel
function loadLevel(i) {
  if (i < 0) i = 0;
  if (i >= totalLevels) {
    showCompletion();
    return;
  }
  currentLevel = i;
  localStorage.setItem("cw_currentLevel", currentLevel);
  const level = levels[currentLevel];

  // UI
  levelTitleEl.textContent = level.title;
  levelInstrEl.textContent = level.instructions;
  levelNumEl.textContent = currentLevel + 1;
  levelGoalsEl.innerHTML = "";
  level.goals.forEach((g) => {
    const li = document.createElement("li");
    li.textContent = g;
    levelGoalsEl.appendChild(li);
  });

  // Tags con categoría
  levelTagsEl.innerHTML = `
    <span class="badge" style="background: ${level.categoryColor}20; color: ${
    level.categoryColor
  }; border: 1px solid ${level.categoryColor}40;">
      ${level.categoryIcon} ${level.categoryName}
    </span>
    <span class="badge">Nivel ${currentLevel + 1}</span>
  `;

  cm.setValue(level.initialCode);
  preview.innerHTML = "";
  messageEl.textContent = "";
  updateProgress();
  highlightLevelList();
}

// actualizar progreso
function updateProgress() {
  const pct = Math.round((currentLevel / totalLevels) * 100);
  progressBar.style.width = pct + "%";
}

// marcar lista
function highlightLevelList() {
  [...levelListEl.children].forEach((li, idx) => {
    if (li.classList.contains("category-header")) return;

    const levelIndex = parseInt(li.dataset.index);
    if (isNaN(levelIndex)) return;

    li.style.fontWeight = levelIndex === currentLevel ? "700" : "400";

    if (gameCompleted) {
      // Si el juego está completado, todos los niveles son accesibles
      li.style.color = levelIndex === currentLevel ? "#E6EEF3" : "#7dd3fc";
      li.style.cursor = "pointer";
    } else {
      // Lógica normal de progresión
      li.style.color =
        levelIndex < currentLevel
          ? "#7dd3fc"
          : levelIndex === currentLevel
          ? "#E6EEF3"
          : "#6b7280";
      li.style.cursor = levelIndex <= currentLevel ? "pointer" : "default";
    }
  });
}

// mostrar final
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
  preview.innerHTML = cm.getValue();
  messageEl.textContent = "¡Juego completado!";
  messageEl.style.color = "#7dd3fc";
  progressBar.style.width = "100%";

  // Actualizar la lista para mostrar todos los niveles como accesibles
  highlightLevelList();

  // Mostrar sección de compartir y activar funcionalidades del footer
  completeGame();
}

// render preview
function renderPreview() {
  const code = cm.getValue();
  preview.innerHTML = code;
}

// comprobación del nivel actual
function checkLevel() {
  const code = cm.getValue().trim();

  if (!code) {
    messageEl.textContent = "❌ Escribe algo de código primero.";
    messageEl.style.color = "#fb7185";
    return;
  }

  const validator = levels[currentLevel].validate;
  try {
    const ok = validator(code);
    if (ok) {
      messageEl.textContent = "✅ ¡Nivel completado!";
      messageEl.style.color = "#4ade80";

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
      let specificMessage = "❌ Aún no cumple los objetivos. ";

      const level = levels[currentLevel];
      if (level.category === "html") {
        if (level.title.includes("Primer ladrillo")) {
          if (!/<h1/i.test(code)) specificMessage += "Falta la etiqueta <h1>.";
          else if (!/<p/i.test(code))
            specificMessage += "Falta la etiqueta <p>.";
        } else if (level.title.includes("Imagen")) {
          if (!/<img/i.test(code))
            specificMessage += "Falta la etiqueta <img>.";
          else if (!/alt=/i.test(code))
            specificMessage += "La imagen necesita atributo alt.";
        }
      } else if (level.category === "css") {
        if (level.title.includes("Color")) {
          specificMessage += "El <h1> debe tener color rojo.";
        }
      }

      if (specificMessage === "❌ Aún no cumple los objetivos. ") {
        specificMessage += "Revisa las instrucciones y prueba otra vez.";
      }

      messageEl.textContent = specificMessage;
      messageEl.style.color = "#fb7185";
    }
  } catch (e) {
    messageEl.textContent = "⚠️ Error al validar: " + e.message;
    messageEl.style.color = "#fb7185";
    console.error("Validation error:", e);
  }
}

// botones y controles
document.getElementById("run-btn").addEventListener("click", renderPreview);
document.getElementById("check-btn").addEventListener("click", checkLevel);
document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reiniciar progreso y volver al nivel 1?")) {
    localStorage.removeItem("cw_currentLevel");
    localStorage.removeItem("cw_gameCompleted");
    currentLevel = 0;
    gameCompleted = false;
    loadLevel(0);
    renderLevelList();
  }
});
document.getElementById("reset-code-btn").addEventListener("click", () => {
  if (confirm("Restablecer el código del nivel actual a su valor inicial?")) {
    cm.setValue(levels[currentLevel].initialCode);
    messageEl.textContent = "Código restablecido.";
    messageEl.style.color = "#9aa3b2";
  }
});

// autorun checkbox
const autorun = document.getElementById("autorun");
let autorunTimer = null;
cm.on("change", () => {
  if (autorun.checked) {
    clearTimeout(autorunTimer);
    autorunTimer = setTimeout(() => {
      renderPreview();
    }, 400);
  }
});

// atajo teclado: Ctrl/Cmd + Enter -> check
cm.addKeyMap({
  "Ctrl-Enter": () => checkLevel(),
  "Cmd-Enter": () => checkLevel(),
});

// Sistema de Ayuda
const helpPanel = document.getElementById("help-panel");
const helpOverlay = document.getElementById("help-overlay");
const helpBody = document.getElementById("help-body");
const helpBtn = document.getElementById("help-btn");
const closeHelpBtn = document.getElementById("close-help");

function showHelp() {
  const helpKey = levelHelpMap[currentLevel];
  if (helpKey && helpGuides[helpKey]) {
    const guide = helpGuides[helpKey];
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
        <div class="help-tip">
          <strong>Recursos útiles:</strong>
          <ul>
            <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">MDN HTML</a></li>
            <li><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">MDN CSS</a></li>
          </ul>
        </div>
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
  document.body.style.overflow = "auto";
}

// Event listeners para ayuda
helpBtn.addEventListener("click", showHelp);
closeHelpBtn.addEventListener("click", hideHelp);
helpOverlay.addEventListener("click", hideHelp);

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && helpPanel.classList.contains("active")) {
    hideHelp();
  }
});

// on load
loadLevel(currentLevel);
renderPreview();
updateProgress();

// ===== FUNCIONES DE COMPARTIR Y DONACIONES =====

// Mostrar sección de compartir cuando se complete el juego
function showShareSection() {
  const shareSection = document.getElementById("share-section");
  if (shareSection) {
    shareSection.style.display = "block";
    shareSection.classList.add("show");
  }
}

// Función para compartir en WhatsApp
function shareToWhatsApp() {
  const message = encodeURIComponent(
    "🎉 ¡Acabo de completar el juego 'Ciudad Web' de Zion Code! " +
      "Aprendí HTML y CSS de forma divertida. " +
      "¡Pruébalo tú también y construye tu propia ciudad web! " +
      window.location.href
  );
  window.open(`https://wa.me/?text=${message}`, "_blank");
}

// Función para compartir en Facebook
function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("¡Completé Ciudad Web de Zion Code!");
  const description = encodeURIComponent(
    "Aprendí HTML y CSS jugando. ¡Pruébalo tú también!"
  );

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title} - ${description}`,
    "_blank"
  );
}

// Función para compartir en Twitter
function shareToTwitter() {
  const text = encodeURIComponent(
    "🎉 ¡Acabo de completar 'Ciudad Web' de Zion Code! " +
      "Aprendí HTML y CSS de forma divertida. " +
      "¡Pruébalo tú también! 🏙️💻 #AprendeJugando #HTML #CSS #ZionCode"
  );
  const url = encodeURIComponent(window.location.href);

  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank"
  );
}

// Función para compartir en LinkedIn
function shareToLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("Completé Ciudad Web - Juego de HTML y CSS");
  const summary = encodeURIComponent(
    "Acabo de completar este increíble juego educativo de Zion Code donde aprendí HTML y CSS construyendo una ciudad web. ¡Recomendado para todos los que quieren aprender programación de forma divertida!"
  );

  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`,
    "_blank"
  );
}

// Función para copiar enlace del juego
function copyGameLink() {
  const url = window.location.href;

  if (navigator.clipboard && window.isSecureContext) {
    // Usar la API moderna de clipboard
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showCopyNotification("¡Enlace copiado al portapapeles!");
      })
      .catch(() => {
        fallbackCopyTextToClipboard(url);
      });
  } else {
    // Fallback para navegadores más antiguos
    fallbackCopyTextToClipboard(url);
  }
}

// Función fallback para copiar texto
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showCopyNotification("¡Enlace copiado al portapapeles!");
  } catch (err) {
    showCopyNotification("No se pudo copiar el enlace");
  }

  document.body.removeChild(textArea);
}

// Mostrar notificación de copia
function showCopyNotification(message) {
  // Crear elemento de notificación
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(90deg, var(--success), #22c55e);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    animation: slideInRight 0.3s ease;
  `;

  // Agregar animación CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideInRight 0.3s ease reverse";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }, 300);
  }, 3000);
}

// Función para abrir email para enviar comprobante de donación
function openEmailForDonation() {
  const subject = encodeURIComponent("Comprobante de Donación - Ciudad Web");
  const body = encodeURIComponent(
    "¡Hola!\n\n" +
      "Acabo de hacer una donación al proyecto 'Ciudad Web' de Zion Code.\n\n" +
      "Detalles de la donación:\n" +
      "• Proyecto: Ciudad Web - Juego Educativo HTML & CSS\n" +
      "• Método: Mercado Pago\n" +
      "• Alias: ZionCode\n" +
      "• Beneficiario: Cristian José Bordón Flores\n\n" +
      "Adjunto el comprobante de la transferencia.\n\n" +
      "Me gustaría recibir los eBooks prometidos:\n" +
      "• eBook CSS Intermedio\n" +
      "• eBook JavaScript Básico\n\n" +
      "¡Gracias por crear este excelente recurso educativo!\n\n" +
      "Saludos cordiales."
  );

  // Email para recibir comprobantes de donación
  const email = "zioncode25@gmail.com";

  window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
}

// Modificar la función de completar juego para mostrar la sección de compartir
function completeGame() {
  // Mostrar mensaje de felicitaciones
  messageEl.textContent =
    "🎉 ¡Felicitaciones! Has completado todos los niveles de Ciudad Web";
  messageEl.style.color = "var(--success)";

  // Mostrar sección de compartir
  showShareSection();

  // Guardar estado de juego completado
  localStorage.setItem("ciudadWebCompleted", "true");

  // Opcional: agregar confetti o alguna animación especial
  createConfetti();
}

// Función para crear efecto de confetti
function createConfetti() {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#ffeaa7",
    "#dda0dd",
  ];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
      `;

      document.body.appendChild(confetti);

      // Remover después de la animación
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 5000);
    }, i * 50);
  }

  // Agregar animación CSS para el confetti
  if (!document.getElementById("confetti-style")) {
    const style = document.createElement("style");
    style.id = "confetti-style";
    style.textContent = `
      @keyframes confettiFall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Verificar si el juego ya fue completado al cargar la página
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

// Llamar a la verificación al cargar la página
document.addEventListener("DOMContentLoaded", checkGameCompletion);
