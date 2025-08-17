// ===== SISTEMA DE AYUDA =====
// Guías educativas para cada nivel

const helpGuides = {
  // Guías HTML Básico
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
          <li><code>RGB:</code> <code>rgb(255, 0, 0)</code> (rojo)</li>
        </ul>
        
        <div class="help-tip">
          <strong>Sintaxis CSS:</strong> selector { propiedad: valor; }
        </div>
      </div>
    `,
  },
};

// Mapeo de niveles a guías de ayuda
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

  // CSS Básico (8+)
  8: "css-color-en-el-titulo",
  // Agregar más mapeos según se necesiten
};
