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

  // Guías HTML Básico adicionales
  "html-parrafos-saltos": {
    title: "Párrafos y Saltos de Línea",
    content: `
      <div class="help-section">
        <h3>📝 Párrafos y Saltos</h3>
        <p>Los párrafos organizan el texto en bloques legibles, y los saltos de línea permiten control fino del formato.</p>
        
        <h4>Elemento &lt;p&gt;</h4>
        <p>Los párrafos crean bloques de texto separados:</p>
        <pre><code>&lt;p&gt;Este es el primer párrafo.&lt;/p&gt;
&lt;p&gt;Este es el segundo párrafo.&lt;/p&gt;</code></pre>
        
        <h4>Elemento &lt;br&gt;</h4>
        <p>El salto de línea fuerza una nueva línea dentro del mismo párrafo:</p>
        <pre><code>&lt;p&gt;Primera línea&lt;br&gt;Segunda línea en el mismo párrafo&lt;/p&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Tip:</strong> &lt;br&gt; es un elemento vacío (self-closing). Úsalo con moderación.
        </div>
      </div>
    `,
  },

  "html-texto-formato": {
    title: "Formato de Texto",
    content: `
      <div class="help-section">
        <h3>✨ Formato de Texto</h3>
        <p>HTML ofrece elementos para dar énfasis y formato al texto.</p>
        
        <h4>Elementos de énfasis</h4>
        <ul>
          <li><code>&lt;strong&gt;</code> - Texto importante (negrita)</li>
          <li><code>&lt;em&gt;</code> - Texto enfatizado (cursiva)</li>
          <li><code>&lt;u&gt;</code> - Texto subrayado</li>
        </ul>
        
        <h4>Ejemplo práctico</h4>
        <pre><code>&lt;p&gt;Este texto tiene &lt;strong&gt;palabras importantes&lt;/strong&gt; y 
&lt;em&gt;texto enfatizado&lt;/em&gt;, además de &lt;u&gt;texto subrayado&lt;/u&gt;.&lt;/p&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Semántica:</strong> Usa &lt;strong&gt; y &lt;em&gt; por su significado, no solo por el estilo visual.
        </div>
      </div>
    `,
  },

  "html-encabezados-jerarquicos": {
    title: "Jerarquía de Encabezados",
    content: `
      <div class="help-section">
        <h3>🏗️ Jerarquía de Encabezados</h3>
        <p>Los encabezados crean una estructura jerárquica clara en tu contenido.</p>
        
        <h4>Niveles de encabezados</h4>
        <ul>
          <li><code>&lt;h1&gt;</code> - Título principal (solo uno por página)</li>
          <li><code>&lt;h2&gt;</code> - Secciones principales</li>
          <li><code>&lt;h3&gt;</code> - Subsecciones</li>
          <li><code>&lt;h4&gt;</code> - Sub-subsecciones</li>
        </ul>
        
        <h4>Estructura correcta</h4>
        <pre><code>&lt;h1&gt;Título Principal&lt;/h1&gt;
&lt;h2&gt;Sección 1&lt;/h2&gt;
&lt;h3&gt;Subsección 1.1&lt;/h3&gt;
&lt;h4&gt;Detalle 1.1.1&lt;/h4&gt;
&lt;h2&gt;Sección 2&lt;/h2&gt;</code></pre>
        
        <div class="help-tip">
          <strong>SEO:</strong> Los motores de búsqueda usan la jerarquía de encabezados para entender tu contenido.
        </div>
      </div>
    `,
  },

  "html-division-contenido": {
    title: "División de Contenido con DIV",
    content: `
      <div class="help-section">
        <h3>📦 Elemento &lt;div&gt;</h3>
        <p>El div es un contenedor genérico que agrupa otros elementos.</p>
        
        <h4>Uso básico</h4>
        <pre><code>&lt;div&gt;
  &lt;h2&gt;Sección 1&lt;/h2&gt;
  &lt;p&gt;Contenido de la sección 1&lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;h2&gt;Sección 2&lt;/h2&gt;
  &lt;p&gt;Contenido de la sección 2&lt;/p&gt;
&lt;/div&gt;</code></pre>
        
        <h4>Con clases para estilo</h4>
        <pre><code>&lt;div class="seccion-principal"&gt;
  &lt;h2&gt;Título&lt;/h2&gt;
  &lt;p&gt;Contenido principal&lt;/p&gt;
&lt;/div&gt;</code></pre>
        
        <div class="help-tip">
          <strong>Semántica:</strong> Usa elementos semánticos como &lt;section&gt; cuando sea apropiado, div es genérico.
        </div>
      </div>
    `,
  },
};

// Mapeo de niveles a guías
const levelHelpMap = {
  // HTML Básico (0-7)
  0: "html-primer-ladrillo",
  1: "html-imagen-en-la-fachada",
  2: "html-navegacion",
  3: "html-lista-de-compras",
  4: "html-parrafos-saltos",
  5: "html-texto-formato",
  6: "html-encabezados-jerarquicos",
  7: "html-division-contenido",

  // HTML Intermedio (8-15)
  8: "html-formulario-completo",
  9: "html-tabla-datos",
  10: "html-lista-anidada",
  11: "html-elementos-multimedia",
  12: "html-estructura-semantica",
  13: "html-formulario-validacion",
  14: "html-enlaces-avanzados",
  15: "html-metadatos-seo",

  // HTML Avanzado (16-23)
  16: "html-formulario-fieldset",
  17: "html-elementos-interactivos",
  18: "html-microdata-schema",
  19: "html-canvas-basico",
  20: "html-elementos-tiempo",
  21: "html-atributos-aria",
  22: "html-elementos-cita",
  23: "html-tablas-complejas",

  // CSS Básico (24-31)
  24: "css-color-en-el-titulo",
  25: "css-tamanos-fuente",
  26: "css-box-model",
  27: "css-colores-fondos",
  28: "css-texto-tipografia",
  29: "css-selectores-basicos",
  30: "css-display-basico",
  31: "css-listas-enlaces",

  // CSS Intermedio (32-39)
  32: "css-flexbox-completo",
  33: "css-grid-layout",
  34: "css-posicionamiento-avanzado",
  35: "css-pseudo-clases-avanzadas",
  36: "css-transiciones-transformaciones",
  37: "css-media-queries",
  38: "css-variables-css",
  39: "css-gradientes",

  // CSS Avanzado (40-47)
  40: "css-animaciones-complejas",
  41: "css-grid-avanzado",
  42: "css-pseudo-elementos",
  43: "css-filtros-css",
  44: "css-clipping-masking",
  45: "css-funciones-avanzadas",
  46: "css-container-queries",
  47: "css-scroll-viewport",
};

const categories = {
  htmlBasico: {
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
        title: "Navegación básica",
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
        title: "Párrafos y saltos",
        instructions:
          "Crea 2 párrafos y usa <br> para hacer un salto de línea dentro de uno de ellos.",
        goals: ["2 elementos <p>", "Usar <br> dentro de un párrafo"],
        initialCode: "",
        validate: (code) =>
          (code.match(/<p\b/gi) || []).length >= 2 && /<br\s*\/?>/i.test(code),
      },
      {
        title: "Texto con formato",
        instructions:
          "Usa <strong>, <em> y <u> para dar formato a diferentes palabras.",
        goals: ["Usar <strong>", "Usar <em>", "Usar <u>"],
        initialCode: "<p>Aquí tienes texto para formatear</p>",
        validate: (code) =>
          /<strong\b/i.test(code) && /<em\b/i.test(code) && /<u\b/i.test(code),
      },
      {
        title: "Encabezados jerárquicos",
        instructions:
          "Crea una jerarquía de encabezados usando h1, h2, h3 y h4.",
        goals: ["Usar h1", "Usar h2", "Usar h3", "Usar h4"],
        initialCode: "",
        validate: (code) =>
          /<h1\b/i.test(code) &&
          /<h2\b/i.test(code) &&
          /<h3\b/i.test(code) &&
          /<h4\b/i.test(code),
      },
      {
        title: "División de contenido",
        instructions:
          "Usa <div> para crear 2 secciones diferentes con contenido.",
        goals: ["Al menos 2 elementos <div>", "Contenido dentro de cada div"],
        initialCode: "",
        validate: (code) => {
          const divs = code.match(/<div[^>]*>[\s\S]*?<\/div>/gi) || [];
          return (
            divs.length >= 2 &&
            divs.every(
              (div) => div.replace(/<\/?div[^>]*>/gi, "").trim().length > 0
            )
          );
        },
      },
    ],
  },

  htmlIntermedio: {
    name: "HTML Intermedio",
    color: "#ff6b35",
    icon: "🏘️",
    levels: [
      {
        title: "Formulario completo",
        instructions:
          "Crea un formulario con input text, email, password y un botón submit.",
        goals: [
          "input type='text'",
          "input type='email'",
          "input type='password'",
          "button submit",
        ],
        initialCode: "",
        validate: (code) =>
          /<input[^>]*type=['"]text['"][^>]*>/i.test(code) &&
          /<input[^>]*type=['"]email['"][^>]*>/i.test(code) &&
          /<input[^>]*type=['"]password['"][^>]*>/i.test(code) &&
          /<button[^>]*type=['"]?submit['"]?[^>]*>/i.test(code),
      },
      {
        title: "Tabla con datos",
        instructions:
          "Crea una tabla con <thead>, <tbody>, al menos 3 filas de datos y 3 columnas.",
        goals: [
          "Usar <thead>",
          "Usar <tbody>",
          "Al menos 3 <tr> en tbody",
          "Al menos 3 <th>",
        ],
        initialCode: "",
        validate: (code) => {
          const hasTheadTbody =
            /<thead\b/i.test(code) && /<tbody\b/i.test(code);
          const tbodyContent = code.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
          const rowsInTbody = tbodyContent
            ? (tbodyContent[1].match(/<tr\b/gi) || []).length
            : 0;
          const hasHeaders = (code.match(/<th\b/gi) || []).length >= 3;
          return hasTheadTbody && rowsInTbody >= 3 && hasHeaders;
        },
      },
      {
        title: "Lista ordenada y anidada",
        instructions:
          "Crea una lista ordenada (<ol>) que contenga una lista desordenada anidada.",
        goals: ["Usar <ol>", "Usar <ul> dentro de <ol>", "Al menos 2 niveles"],
        initialCode: "",
        validate: (code) => {
          const hasOl = /<ol\b/i.test(code);
          const hasNestedUl = /<ol[^>]*>[\s\S]*<ul\b[\s\S]*<\/ol>/i.test(code);
          return hasOl && hasNestedUl;
        },
      },
      {
        title: "Elementos multimedia",
        instructions:
          "Incluye una imagen, un video con controles y un audio con controles.",
        goals: [
          "Elemento <img>",
          "Elemento <video> con controls",
          "Elemento <audio> con controls",
        ],
        initialCode: "",
        validate: (code) =>
          /<img\b/i.test(code) &&
          /<video[^>]*controls[^>]*>/i.test(code) &&
          /<audio[^>]*controls[^>]*>/i.test(code),
      },
      {
        title: "Estructura semántica",
        instructions:
          "Usa <header>, <nav>, <main>, <section>, <article>, <aside> y <footer>.",
        goals: [
          "<header>",
          "<nav>",
          "<main>",
          "<section>",
          "<article>",
          "<aside>",
          "<footer>",
        ],
        initialCode: "",
        validate: (code) =>
          /<header\b/i.test(code) &&
          /<nav\b/i.test(code) &&
          /<main\b/i.test(code) &&
          /<section\b/i.test(code) &&
          /<article\b/i.test(code) &&
          /<aside\b/i.test(code) &&
          /<footer\b/i.test(code),
      },
      {
        title: "Formulario con validación",
        instructions:
          "Crea inputs con required, placeholder, min/max y pattern.",
        goals: [
          "input con required",
          "input con placeholder",
          "input con min o max",
          "input con pattern",
        ],
        initialCode: "",
        validate: (code) =>
          /<input[^>]*required[^>]*>/i.test(code) &&
          /<input[^>]*placeholder[^>]*>/i.test(code) &&
          (/<input[^>]*min[^>]*>/i.test(code) ||
            /<input[^>]*max[^>]*>/i.test(code)) &&
          /<input[^>]*pattern[^>]*>/i.test(code),
      },
      {
        title: "Enlaces avanzados",
        instructions:
          "Crea enlaces que abran en nueva pestaña, un enlace de email y uno de teléfono.",
        goals: ["target='_blank'", "href='mailto:'", "href='tel:'"],
        initialCode: "",
        validate: (code) =>
          /<a[^>]*target=['"]_blank['"][^>]*>/i.test(code) &&
          /<a[^>]*href=['"]mailto:[^'"]+['"][^>]*>/i.test(code) &&
          /<a[^>]*href=['"]tel:[^'"]+['"][^>]*>/i.test(code),
      },
      {
        title: "Metadatos y SEO",
        instructions:
          "Incluye <meta> tags para description, keywords y viewport.",
        goals: ["meta description", "meta keywords", "meta viewport"],
        initialCode:
          "<!DOCTYPE html>\n<html>\n<head>\n\n</head>\n<body>\n<h1>Mi página</h1>\n</body>\n</html>",
        validate: (code) =>
          /<meta[^>]*name=['"]description['"][^>]*>/i.test(code) &&
          /<meta[^>]*name=['"]keywords['"][^>]*>/i.test(code) &&
          /<meta[^>]*name=['"]viewport['"][^>]*>/i.test(code),
      },
    ],
  },

  htmlAvanzado: {
    name: "HTML Avanzado",
    color: "#d63384",
    icon: "🏙️",
    levels: [
      {
        title: "Formulario con fieldset",
        instructions:
          "Crea un formulario usando <fieldset>, <legend>, <label> y diferentes tipos de input.",
        goals: [
          "Usar <fieldset>",
          "Usar <legend>",
          "Usar <label>",
          "Al menos 3 tipos de input",
        ],
        initialCode: "",
        validate: (code) => {
          const hasFieldset = /<fieldset\b/i.test(code);
          const hasLegend = /<legend\b/i.test(code);
          const hasLabel = /<label\b/i.test(code);
          const inputTypes = (code.match(/type=['"][^'"]+['"]/gi) || []).length;
          return hasFieldset && hasLegend && hasLabel && inputTypes >= 3;
        },
      },
      {
        title: "Elementos interactivos",
        instructions: "Usa <details>, <summary>, <dialog> y <progress>.",
        goals: ["<details> con <summary>", "<dialog>", "<progress>"],
        initialCode: "",
        validate: (code) =>
          /<details\b/i.test(code) &&
          /<summary\b/i.test(code) &&
          /<dialog\b/i.test(code) &&
          /<progress\b/i.test(code),
      },
      {
        title: "Microdata y Schema",
        instructions:
          "Usa atributos itemscope, itemtype e itemprop para marcar datos estructurados.",
        goals: ["itemscope", "itemtype", "itemprop"],
        initialCode:
          "<div>\n  <h1>Restaurante El Buen Sabor</h1>\n  <p>Dirección: Calle Principal 123</p>\n  <p>Teléfono: +1234567890</p>\n</div>",
        validate: (code) =>
          /itemscope/i.test(code) &&
          /itemtype/i.test(code) &&
          /itemprop/i.test(code),
      },
      {
        title: "Canvas básico",
        instructions:
          "Crea un elemento <canvas> con id y dimensiones específicas.",
        goals: ["<canvas> con id", "width y height definidos"],
        initialCode: "",
        validate: (code) =>
          /<canvas[^>]*id=['"][^'"]+['"][^>]*>/i.test(code) &&
          /<canvas[^>]*width[^>]*>/i.test(code) &&
          /<canvas[^>]*height[^>]*>/i.test(code),
      },
      {
        title: "Elementos de tiempo",
        instructions: "Usa <time> con datetime para marcar fechas y horarios.",
        goals: ["<time> con datetime", "Contenido legible"],
        initialCode: "<p>El evento será el próximo viernes a las 3 PM</p>",
        validate: (code) =>
          /<time[^>]*datetime=['"][^'"]+['"][^>]*>[\s\S]*?<\/time>/i.test(code),
      },
      {
        title: "Atributos ARIA",
        instructions:
          "Usa atributos ARIA como aria-label, aria-describedby y role.",
        goals: ["aria-label", "aria-describedby", "role"],
        initialCode:
          '<button>Enviar</button>\n<input type="text">\n<div>Información adicional</div>',
        validate: (code) =>
          /aria-label/i.test(code) &&
          /aria-describedby/i.test(code) &&
          /role=/i.test(code),
      },
      {
        title: "Elementos de cita",
        instructions: "Usa <blockquote>, <cite>, <q> y <abbr> correctamente.",
        goals: ["<blockquote>", "<cite>", "<q>", "<abbr>"],
        initialCode: "",
        validate: (code) =>
          /<blockquote\b/i.test(code) &&
          /<cite\b/i.test(code) &&
          /<q\b/i.test(code) &&
          /<abbr\b/i.test(code),
      },
      {
        title: "Tablas complejas",
        instructions:
          "Crea una tabla con <caption>, <colgroup>, <col>, rowspan y colspan.",
        goals: ["<caption>", "<colgroup>", "rowspan", "colspan"],
        initialCode: "",
        validate: (code) =>
          /<caption\b/i.test(code) &&
          /<colgroup\b/i.test(code) &&
          /rowspan=/i.test(code) &&
          /colspan=/i.test(code),
      },
    ],
  },

  cssBasico: {
    name: "CSS Básico",
    color: "#1572b6",
    icon: "🎨",
    levels: [
      {
        title: "Color en el título",
        instructions:
          "Dale color rojo al <h1> usando una etiqueta <style> en el propio HTML.",
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
        title: "Tamaños de fuente",
        instructions:
          "Cambia el font-size de diferentes elementos usando px, em y rem.",
        goals: ["font-size en px", "font-size en em", "font-size en rem"],
        initialCode:
          "<h1>Título</h1>\n<p>Párrafo</p>\n<span>Texto pequeño</span>\n<style>\n\n</style>",
        validate: (code) =>
          /font-size\s*:\s*\d+px/i.test(code) &&
          /font-size\s*:\s*[\d.]+em/i.test(code) &&
          /font-size\s*:\s*[\d.]+rem/i.test(code),
      },
      {
        title: "Box model básico",
        instructions: "Aplica margin, padding y border a un elemento.",
        goals: ["margin definido", "padding definido", "border definido"],
        initialCode: '<div class="caja">Mi caja</div>\n<style>\n\n</style>',
        validate: (code) =>
          /margin\s*:/i.test(code) &&
          /padding\s*:/i.test(code) &&
          /border\s*:/i.test(code),
      },
      {
        title: "Colores y fondos",
        instructions:
          "Usa color, background-color y background-image en diferentes elementos.",
        goals: ["color definido", "background-color", "background-image"],
        initialCode:
          '<div class="header">Header</div>\n<p class="texto">Texto</p>\n<style>\n\n</style>',
        validate: (code) =>
          /color\s*:/i.test(code) &&
          /background-color\s*:/i.test(code) &&
          /background-image\s*:/i.test(code),
      },
      {
        title: "Texto y tipografía",
        instructions:
          "Aplica font-family, font-weight, text-align y text-decoration.",
        goals: ["font-family", "font-weight", "text-align", "text-decoration"],
        initialCode:
          '<h1>Título principal</h1>\n<p>Párrafo de ejemplo</p>\n<a href="#">Enlace</a>\n<style>\n\n</style>',
        validate: (code) =>
          /font-family\s*:/i.test(code) &&
          /font-weight\s*:/i.test(code) &&
          /text-align\s*:/i.test(code) &&
          /text-decoration\s*:/i.test(code),
      },
      {
        title: "Selectores básicos",
        instructions: "Usa selectores de elemento, clase, ID y descendiente.",
        goals: [
          "selector de elemento",
          "selector de clase",
          "selector de ID",
          "selector descendiente",
        ],
        initialCode:
          '<div id="container">\n  <h1 class="titulo">Título</h1>\n  <p>Párrafo dentro del container</p>\n</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasElement = /^[a-z]+\s*\{/im.test(code);
          const hasClass = /\.[a-z-_]+\s*\{/i.test(code);
          const hasId = /#[a-z-_]+\s*\{/i.test(code);
          const hasDescendant =
            /[a-z#.][a-z-_#.]*\s+[a-z#.][a-z-_#.]*\s*\{/i.test(code);
          return hasElement && hasClass && hasId && hasDescendant;
        },
      },
      {
        title: "Display básico",
        instructions: "Usa display: block, inline, inline-block y none.",
        goals: [
          "display: block",
          "display: inline",
          "display: inline-block",
          "display: none",
        ],
        initialCode:
          '<span class="bloque">Span como bloque</span>\n<div class="linea">Div como inline</div>\n<p class="inline-block">Párrafo inline-block</p>\n<div class="oculto">Elemento oculto</div>\n<style>\n\n</style>',
        validate: (code) =>
          /display\s*:\s*block/i.test(code) &&
          /display\s*:\s*inline/i.test(code) &&
          /display\s*:\s*inline-block/i.test(code) &&
          /display\s*:\s*none/i.test(code),
      },
      {
        title: "Listas y enlaces",
        instructions:
          "Estiliza una lista quitando bullets y cambia el color de enlaces en hover.",
        goals: [
          "list-style: none",
          "color en a:hover",
          "text-decoration en enlaces",
        ],
        initialCode:
          '<ul>\n  <li><a href="#">Enlace 1</a></li>\n  <li><a href="#">Enlace 2</a></li>\n  <li><a href="#">Enlace 3</a></li>\n</ul>\n<style>\n\n</style>',
        validate: (code) =>
          /list-style\s*:\s*none/i.test(code) &&
          /a\s*:\s*hover[\s\S]*?color\s*:/i.test(code) &&
          /text-decoration\s*:/i.test(code),
      },
    ],
  },

  cssIntermedio: {
    name: "CSS Intermedio",
    color: "#0d6efd",
    icon: "🎭",
    levels: [
      {
        title: "Flexbox completo",
        instructions:
          "Usa flexbox con justify-content, align-items, flex-direction y flex-wrap.",
        goals: [
          "display: flex",
          "justify-content",
          "align-items",
          "flex-direction",
          "flex-wrap",
        ],
        initialCode:
          '<div class="container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /display\s*:\s*flex/i.test(code) &&
          /justify-content\s*:/i.test(code) &&
          /align-items\s*:/i.test(code) &&
          /flex-direction\s*:/i.test(code) &&
          /flex-wrap\s*:/i.test(code),
      },
      {
        title: "Grid Layout",
        instructions:
          "Crea un grid con grid-template-columns, grid-template-rows y grid-gap.",
        goals: [
          "display: grid",
          "grid-template-columns",
          "grid-template-rows",
          "grid-gap o gap",
        ],
        initialCode:
          '<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n  <div>5</div>\n  <div>6</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /display\s*:\s*grid/i.test(code) &&
          /grid-template-columns\s*:/i.test(code) &&
          /grid-template-rows\s*:/i.test(code) &&
          /(grid-gap|gap)\s*:/i.test(code),
      },
      {
        title: "Posicionamiento avanzado",
        instructions: "Usa position: relative, absolute, fixed y sticky.",
        goals: [
          "position: relative",
          "position: absolute",
          "position: fixed",
          "position: sticky",
        ],
        initialCode:
          '<div class="container">\n  <div class="relative">Relative</div>\n  <div class="absolute">Absolute</div>\n  <div class="fixed">Fixed</div>\n  <div class="sticky">Sticky</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /position\s*:\s*relative/i.test(code) &&
          /position\s*:\s*absolute/i.test(code) &&
          /position\s*:\s*fixed/i.test(code) &&
          /position\s*:\s*sticky/i.test(code),
      },
      {
        title: "Pseudo-clases avanzadas",
        instructions: "Usa :nth-child(), :first-child, :last-child y :not().",
        goals: [":nth-child()", ":first-child", ":last-child", ":not()"],
        initialCode:
          "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n  <li>Item 4</li>\n  <li>Item 5</li>\n</ul>\n<style>\n\n</style>",
        validate: (code) =>
          /:nth-child\s*\(/i.test(code) &&
          /:first-child/i.test(code) &&
          /:last-child/i.test(code) &&
          /:not\s*\(/i.test(code),
      },
      {
        title: "Transiciones y transformaciones",
        instructions:
          "Aplica transition, transform con scale, rotate y translate.",
        goals: [
          "transition",
          "transform: scale",
          "transform: rotate",
          "transform: translate",
        ],
        initialCode:
          '<div class="box">Hover me!</div>\n<style>\n.box {\n  width: 100px;\n  height: 100px;\n  background: blue;\n  margin: 50px;\n}\n\n</style>',
        validate: (code) =>
          /transition\s*:/i.test(code) &&
          /transform\s*:[\s\S]*scale/i.test(code) &&
          /transform\s*:[\s\S]*rotate/i.test(code) &&
          /transform\s*:[\s\S]*translate/i.test(code),
      },
      {
        title: "Media Queries",
        instructions:
          "Crea responsive design con @media para móvil, tablet y desktop.",
        goals: [
          "@media (max-width: 768px)",
          "@media (min-width: 769px)",
          "@media (min-width: 1024px)",
        ],
        initialCode:
          '<div class="responsive">Contenido responsive</div>\n<style>\n.responsive {\n  background: red;\n  padding: 20px;\n}\n\n</style>',
        validate: (code) => {
          const hasSmall = /@media[^{]*max-width\s*:\s*768px/i.test(code);
          const hasMedium = /@media[^{]*min-width\s*:\s*769px/i.test(code);
          const hasLarge = /@media[^{]*min-width\s*:\s*1024px/i.test(code);
          return hasSmall && hasMedium && hasLarge;
        },
      },
      {
        title: "Variables CSS",
        instructions:
          "Define variables CSS en :root y úsalas en diferentes elementos.",
        goals: [":root con variables", "var() en al menos 3 propiedades"],
        initialCode:
          '<div class="card">\n  <h2>Título</h2>\n  <p>Contenido</p>\n  <button>Botón</button>\n</div>\n<style>\n\n</style>',
        validate: (code) => {
          const hasRoot = /:root\s*\{[\s\S]*--[a-zA-Z-]+\s*:/i.test(code);
          const varUsage = (code.match(/var\s*\(\s*--[a-zA-Z-]+\s*\)/gi) || [])
            .length;
          return hasRoot && varUsage >= 3;
        },
      },
      {
        title: "Gradientes",
        instructions: "Usa linear-gradient y radial-gradient en backgrounds.",
        goals: ["linear-gradient", "radial-gradient"],
        initialCode:
          '<div class="linear">Linear gradient</div>\n<div class="radial">Radial gradient</div>\n<style>\n.linear, .radial {\n  width: 200px;\n  height: 100px;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n</style>',
        validate: (code) =>
          /linear-gradient/i.test(code) && /radial-gradient/i.test(code),
      },
    ],
  },

  cssAvanzado: {
    name: "CSS Avanzado",
    color: "#6f42c1",
    icon: "🎪",
    levels: [
      {
        title: "Animaciones complejas",
        instructions:
          "Crea animaciones con @keyframes, animation-delay y animation-fill-mode.",
        goals: [
          "@keyframes",
          "animation-delay",
          "animation-fill-mode",
          "animation-iteration-count",
        ],
        initialCode:
          '<div class="animated-box">Animación compleja</div>\n<style>\n.animated-box {\n  width: 100px;\n  height: 100px;\n  background: purple;\n  margin: 50px;\n}\n\n</style>',
        validate: (code) =>
          /@keyframes/i.test(code) &&
          /animation-delay\s*:/i.test(code) &&
          /animation-fill-mode\s*:/i.test(code) &&
          /animation-iteration-count\s*:/i.test(code),
      },
      {
        title: "Grid avanzado",
        instructions:
          "Usa grid-template-areas, grid-area y grid con nombres de líneas.",
        goals: [
          "grid-template-areas",
          "grid-area",
          "nombres de líneas en grid",
        ],
        initialCode:
          '<div class="grid-advanced">\n  <div class="header">Header</div>\n  <div class="sidebar">Sidebar</div>\n  <div class="content">Content</div>\n  <div class="footer">Footer</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /grid-template-areas\s*:/i.test(code) &&
          /grid-area\s*:/i.test(code) &&
          /\[[a-zA-Z-]+\]/i.test(code),
      },
      {
        title: "Pseudo-elementos",
        instructions: "Usa ::before, ::after, ::first-letter y ::first-line.",
        goals: ["::before", "::after", "::first-letter", "::first-line"],
        initialCode:
          '<p class="fancy">Este es un párrafo con pseudo-elementos. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n<style>\n\n</style>',
        validate: (code) =>
          /::before/i.test(code) &&
          /::after/i.test(code) &&
          /::first-letter/i.test(code) &&
          /::first-line/i.test(code),
      },
      {
        title: "Filtros CSS",
        instructions:
          "Aplica filter con blur, brightness, contrast y saturate.",
        goals: [
          "filter: blur",
          "filter: brightness",
          "filter: contrast",
          "filter: saturate",
        ],
        initialCode:
          '<div class="image-container">\n  <img src="https://picsum.photos/200/150" alt="Imagen de prueba">\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /filter\s*:[\s\S]*blur/i.test(code) &&
          /filter\s*:[\s\S]*brightness/i.test(code) &&
          /filter\s*:[\s\S]*contrast/i.test(code) &&
          /filter\s*:[\s\S]*saturate/i.test(code),
      },
      {
        title: "Clipping y masking",
        instructions: "Usa clip-path y mask para crear formas complejas.",
        goals: ["clip-path", "mask o -webkit-mask"],
        initialCode:
          '<div class="clipped">Elemento con clip-path</div>\n<div class="masked">Elemento con mask</div>\n<style>\n.clipped, .masked {\n  width: 200px;\n  height: 100px;\n  background: linear-gradient(45deg, red, blue);\n  margin: 20px;\n}\n\n</style>',
        validate: (code) =>
          /clip-path\s*:/i.test(code) &&
          /(mask\s*:|webkit-mask\s*:)/i.test(code),
      },
      {
        title: "Funciones CSS avanzadas",
        instructions:
          "Usa calc(), clamp(), min(), max() y var() con fallbacks.",
        goals: ["calc()", "clamp()", "min()", "max()", "var() con fallback"],
        initialCode:
          '<div class="responsive-box">Caja responsive</div>\n<style>\n\n</style>',
        validate: (code) =>
          /calc\s*\(/i.test(code) &&
          /clamp\s*\(/i.test(code) &&
          /min\s*\(/i.test(code) &&
          /max\s*\(/i.test(code) &&
          /var\s*\([^,)]+,/i.test(code),
      },
      {
        title: "Layout con container queries",
        instructions: "Implementa container queries y container-type.",
        goals: ["@container", "container-type", "container-name"],
        initialCode:
          '<div class="main-container">\n  <div class="card">\n    <h3>Título</h3>\n    <p>Contenido que se adapta al contenedor</p>\n  </div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /@container/i.test(code) &&
          /container-type\s*:/i.test(code) &&
          /container-name\s*:/i.test(code),
      },
      {
        title: "Scroll y viewport avanzado",
        instructions:
          "Usa scroll-behavior, scroll-snap y viewport units (vh, vw, vmin, vmax).",
        goals: ["scroll-behavior", "scroll-snap", "vh/vw", "vmin/vmax"],
        initialCode:
          '<div class="scroll-container">\n  <div class="section">Sección 1</div>\n  <div class="section">Sección 2</div>\n  <div class="section">Sección 3</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /scroll-behavior\s*:/i.test(code) &&
          /scroll-snap/i.test(code) &&
          /(vh|vw)/i.test(code) &&
          /(vmin|vmax)/i.test(code),
      },
      {
        title: "CSS moderno y futuro",
        instructions:
          "Usa aspect-ratio, gap en flexbox, y logical properties (margin-inline, padding-block).",
        goals: [
          "aspect-ratio",
          "gap en flexbox",
          "margin-inline",
          "padding-block",
        ],
        initialCode:
          '<div class="modern-layout">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /aspect-ratio\s*:/i.test(code) &&
          /gap\s*:[\s\S]*flex/i.test(code) &&
          /margin-inline\s*:/i.test(code) &&
          /padding-block\s*:/i.test(code),
      },
      {
        title: "Efectos visuales avanzados",
        instructions:
          "Combina backdrop-filter, mix-blend-mode y transform-style: preserve-3d.",
        goals: [
          "backdrop-filter",
          "mix-blend-mode",
          "transform-style: preserve-3d",
        ],
        initialCode:
          '<div class="glass-effect">\n  <div class="content">Contenido con efectos</div>\n  <div class="overlay">Overlay</div>\n</div>\n<style>\n\n</style>',
        validate: (code) =>
          /backdrop-filter\s*:/i.test(code) &&
          /mix-blend-mode\s*:/i.test(code) &&
          /transform-style\s*:\s*preserve-3d/i.test(code),
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
      // Lógica normal de progresión con mejor feedback visual
      if (i < currentLevel) {
        li.classList.add("completed");
        li.innerHTML += ` <span class="badge">✓</span>`;
      } else if (i === currentLevel) {
        li.classList.add("current");
      } else {
        li.style.color = "#6b7280";
        li.style.cursor = "default";
      }
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
  // Optimizaciones de performance
  viewportMargin: 10, // Renderizar solo las líneas visibles + margen
  scrollbarStyle: "native", // Usar scrollbar nativo para mejor performance
  lineWrapping: true,
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
  messageEl.textContent = "";
  updateProgress();

  // Renderizar la vista previa después de un pequeño delay para asegurar que el iframe esté listo
  setTimeout(() => {
    renderPreview();
  }, 100);
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
  renderPreview();
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
        * {
          box-sizing: border-box;
        }
        /* Estilos base para elementos comunes */
        h1, h2, h3, h4, h5, h6 {
          margin-top: 0;
          margin-bottom: 0.5em;
        }
        p {
          margin-top: 0;
          margin-bottom: 1em;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        input, button {
          padding: 8px;
          margin: 4px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #007bff;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        ul, ol {
          padding-left: 20px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
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

// Debounce utility para mejor performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Función mejorada para mostrar mensajes
function showMessage(text, type = "info") {
  messageEl.textContent = text;
  messageEl.className = `message ${type}`;

  // Auto-limpiar mensajes después de 5 segundos (excepto errores)
  if (type !== "error") {
    setTimeout(() => {
      if (messageEl.textContent === text) {
        messageEl.textContent = "";
        messageEl.className = "message";
      }
    }, 5000);
  }
}

// comprobación del nivel actual
function checkLevel() {
  const checkBtn = document.getElementById("check-btn");
  const code = cm.getValue().trim();

  if (!code) {
    showMessage("❌ Escribe algo de código primero.", "error");
    return;
  }

  // Mostrar estado de loading
  checkBtn.classList.add("loading");
  checkBtn.disabled = true;

  const validator = levels[currentLevel].validate;

  // Simular validación (para futuras validaciones complejas)
  setTimeout(() => {
    try {
      const ok = validator(code);
      if (ok) {
        showMessage("✅ ¡Nivel completado! 🎉", "success");

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
            if (!/<h1/i.test(code))
              specificMessage += "Falta la etiqueta <h1>.";
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

        showMessage(specificMessage, "error");
      }
    } catch (e) {
      showMessage("⚠️ Error al validar: " + e.message, "error");
      console.error("Validation error:", e);
    }

    // Remover estado de loading
    checkBtn.classList.remove("loading");
    checkBtn.disabled = false;
  }, 200);
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
// Debounced render para mejor performance
const debouncedRender = debounce(renderPreview, 300);

let autorunTimer = null;
cm.on("change", () => {
  if (autorun.checked) {
    debouncedRender();
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
