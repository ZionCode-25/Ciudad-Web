// ===== NIVELES Y CATEGORÍAS =====
// Definición de todos los niveles organizados por categorías

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

  cssBasico: {
    name: "CSS Básico",
    color: "#1572b6",
    icon: "🎨",
    levels: [
      {
        title: "Color en el título",
        instructions:
          "Usa CSS para cambiar el color de un <h1>. Puedes usar CSS interno con <style> o inline con style=''.",
        goals: ["Tener un <h1>", "Aplicar color CSS al h1"],
        initialCode: "<h1>Título para colorear</h1>",
        validate: (code) => {
          const hasH1 = /<h1\b/i.test(code);
          const hasInlineStyle =
            /<h1[^>]*style=['"][^'"]*color\s*:[^'"]*['"][^>]*>/i.test(code);
          const hasInternalCSS =
            /<style[\s\S]*?h1[\s\S]*?{[\s\S]*?color\s*:[\s\S]*?}[\s\S]*?<\/style>/i.test(
              code
            );
          return hasH1 && (hasInlineStyle || hasInternalCSS);
        },
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

// Exportar para uso global
window.categories = categories;
window.levels = levels;
